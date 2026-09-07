"use client";

import {
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import styles from "./NativeTooltip.module.scss";

export default function NativeTooltip({
  label,
  children,
  content,
  kind = "source",
  onOpen,
}: {
  label: string;
  children: ReactNode;
  content: ReactNode;
  kind?: "source" | "resolution";
  onOpen?: () => void;
}) {
  const id = useId();
  const trigger = useRef<HTMLButtonElement>(null);
  const tooltip = useRef<HTMLDivElement>(null);
  const pinned = useRef(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState<{
    left: number;
    top: number;
  } | null>(null);

  function cancelClose() {
    if (timer.current) clearTimeout(timer.current);
  }
  function dismiss() {
    cancelClose();
    pinned.current = false;
    setOpen(false);
    setPosition(null);
  }
  function show() {
    cancelClose();
    document.dispatchEvent(new CustomEvent("cva-tooltip-open", { detail: id }));
    onOpen?.();
    setOpen(true);
  }
  function leave() {
    if (!pinned.current && document.activeElement !== trigger.current) {
      timer.current = setTimeout(dismiss, 100);
    }
  }

  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );

  useLayoutEffect(() => {
    if (!open) return;
    function place() {
      const anchor = trigger.current?.getBoundingClientRect();
      const box = tooltip.current?.getBoundingClientRect();
      if (!anchor || !box) return;
      if (anchor.bottom < 0 || anchor.top > window.innerHeight) {
        pinned.current = false;
        setOpen(false);
        return;
      }
      const inset = 16;
      const preferredLeft = kind === "source" ? anchor.left : anchor.right - 8;
      const below = anchor.bottom + 8;
      setPosition({
        left: Math.max(
          inset,
          Math.min(preferredLeft, window.innerWidth - box.width - inset),
        ),
        top:
          below + box.height <= window.innerHeight - inset
            ? below
            : Math.max(inset, anchor.top - box.height - 8),
      });
    }
    place();
    window.addEventListener("scroll", place, true);
    return () => window.removeEventListener("scroll", place, true);
  }, [open, kind, content]);

  useEffect(() => {
    if (!open) return;
    function close() {
      pinned.current = false;
      setOpen(false);
      setPosition(null);
    }
    function keydown(event: KeyboardEvent) {
      if (event.key === "Escape") close();
    }
    function outside(event: Event) {
      const node = event.target as Node;
      if (!trigger.current?.contains(node) && !tooltip.current?.contains(node))
        close();
    }
    function anotherTooltip(event: Event) {
      if ((event as CustomEvent<string>).detail !== id) close();
    }
    document.addEventListener("keydown", keydown);
    document.addEventListener("pointerdown", outside);
    document.addEventListener("cva-tooltip-open", anotherTooltip);
    window.addEventListener("resize", close);
    return () => {
      document.removeEventListener("keydown", keydown);
      document.removeEventListener("pointerdown", outside);
      document.removeEventListener("cva-tooltip-open", anotherTooltip);
      window.removeEventListener("resize", close);
    };
  }, [open, id]);

  return (
    <>
      <button
        ref={trigger}
        type="button"
        className={styles.trigger}
        aria-label={label}
        aria-describedby={open ? id : undefined}
        aria-expanded={open}
        onMouseEnter={show}
        onMouseLeave={leave}
        onFocus={show}
        onBlur={dismiss}
        onClick={() => {
          pinned.current = !pinned.current;
          if (pinned.current) show();
          else dismiss();
        }}
      >
        {children}
      </button>
      {open &&
        createPortal(
          <div
            ref={tooltip}
            id={id}
            role="tooltip"
            className={styles.tooltip}
            data-kind={kind}
            style={{
              left: position?.left ?? 0,
              top: position?.top ?? 0,
              visibility: position ? "visible" : "hidden",
            }}
            onMouseEnter={cancelClose}
            onMouseLeave={leave}
          >
            {content}
          </div>,
          document.body,
        )}
    </>
  );
}
