"use client";

import React from "react";
import styles from "./styles/Typography.module.scss";
import { cx } from "@/lib/utils/cx";

/* Types */
type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type TextSize =
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl"
  | "6xl";

type TextWeight =
  | "thin"
  | "light"
  | "regular"
  | "medium"
  | "semibold"
  | "bold"
  | "extrabold";

type TextAlign = "left" | "center" | "right" | "justify";

type FontFamily = "primary" | "secondary" | "tertiary" | "alternative" | "mono";

type TextVariant =
  | "default"
  | "muted"
  | "primary"
  | "success"
  | "warning"
  | "danger";

type LineHeight = "none" | "tight" | "snug" | "normal" | "relaxed" | "loose";

type TextElementType = "p" | "span" | "div" | "small" | "label";

type ListElementType = "ul" | "ol";

// Map element types to their corresponding HTML element types
type ElementRef<T extends TextElementType> = T extends "p"
  ? HTMLParagraphElement
  : T extends "div"
    ? HTMLDivElement
    : T extends "span"
      ? HTMLSpanElement
      : T extends "small"
        ? HTMLElement
        : T extends "label"
          ? HTMLLabelElement
          : HTMLElement;

// Style props without children or ref
interface StyleProps {
  className?: string;
  id?: string;
  size?: TextSize;
  weight?: TextWeight;
  align?: TextAlign;
  font?: FontFamily;
  variant?: TextVariant;
  lineHeight?: LineHeight;
  truncate?: boolean;
  clamp?: 1 | 2 | 3;
  balance?: boolean;
  pretty?: boolean;
  tracking?: "tighter" | "tight" | "normal" | "wide" | "wider" | "widest";
}

// Base props including children but not ref
interface BaseProps extends StyleProps {
  children: React.ReactNode;
}

/* Helper function to map props to class names */
const getClassNames = (props: StyleProps): string => {
  const {
    size,
    weight,
    align,
    font,
    variant,
    lineHeight,
    truncate,
    clamp,
    balance,
    pretty,
    tracking,
  } = props;

  return cx(
    size && styles[`text-${size}`],
    weight && styles[`font-${weight}`],
    align && styles[`text-${align}`],
    font && styles[`font-${font}`],
    variant && variant !== "default" && styles[`text-${variant}`],
    lineHeight && styles[`leading-${lineHeight}`],
    truncate && styles.truncate,
    clamp && styles[`clamp-${clamp}`],
    balance && styles.balance,
    pretty && styles.pretty,
    tracking && styles[`tracking-${tracking}`],
  );
};

/* Main Components */

/**
 * Heading component for all heading levels (h1-h6)
 * @example
 * <Heading level="h1">Page Title</Heading>
 */
export function Heading({
  level,
  children,
  className = "",
  id,
  ref,
  ...rest
}: BaseProps & {
  level: HeadingLevel;
  ref?: React.Ref<HTMLHeadingElement>;
}) {
  const Tag = level;
  const combinedClassNames = cx(
    styles.heading,
    styles[level],
    getClassNames(rest),
    className,
  );

  return (
    <Tag className={combinedClassNames} id={id} ref={ref}>
      {children}
    </Tag>
  );
}

/**
 * Text component for paragraphs, spans, or divs
 * @example
 * <Text>Default paragraph</Text>
 * <Text as="span">Inline text</Text>
 */
export function Text<T extends TextElementType = "p">({
  children,
  className = "",
  as,
  ref,
  ...rest
}: BaseProps & {
  as?: T;
  ref?: React.Ref<ElementRef<T>>;
}) {
  const elementType = (as || "p") as T;
  const combinedClassNames = cx(styles.text, getClassNames(rest), className);

  return React.createElement(
    elementType,
    {
      className: combinedClassNames,
      ref: ref,
      ...rest,
    },
    children,
  );
}

/**
 * Paragraph component - specialized Text component always rendering as <p>
 * @example
 * <Paragraph>This is a paragraph.</Paragraph>
 */
export function Paragraph({
  children,
  ref,
  ...rest
}: Omit<BaseProps, "as"> & { ref?: React.Ref<HTMLParagraphElement> }) {
  return (
    <Text<"p"> as="p" ref={ref} {...rest}>
      {children}
    </Text>
  );
}

/**
 * Lead paragraph component for introductions
 * @example
 * <Lead>Introduction paragraph with larger text</Lead>
 */
export function Lead({
  children,
  className = "",
  ref,
  ...rest
}: Omit<BaseProps, "size"> & { ref?: React.Ref<HTMLParagraphElement> }) {
  return (
    <Text<"p">
      as="p"
      className={cx(styles.lead, className)}
      ref={ref}
      {...rest}
    >
      {children}
    </Text>
  );
}

/**
 * Small text component
 * @example
 * <Small>Fine print text</Small>
 */
export function Small({
  children,
  className = "",
  ref,
  ...rest
}: Omit<BaseProps, "size"> & { ref?: React.Ref<HTMLElement> }) {
  return (
    <small
      className={cx(styles.small, styles.text, getClassNames(rest), className)}
      ref={ref}
    >
      {children}
    </small>
  );
}

/**
 * Title/display heading component for large hero sections
 * @example
 * <Title level={1}>Hero Title</Title>
 */
export function Title({
  level,
  children,
  className = "",
  ref,
  ...rest
}: BaseProps & {
  level: 1 | 2;
  ref?: React.Ref<HTMLHeadingElement>;
}) {
  return (
    <Heading
      level="h1"
      className={cx(styles[`display-${level}`], className)}
      ref={ref}
      {...rest}
    >
      {children}
    </Heading>
  );
}

/**
 * Prose container for article content
 * @example
 * <Prose>
 *   <Heading2>Article Title</Heading2>
 *   <Paragraph>Article content...</Paragraph>
 * </Prose>
 */
export function Prose({
  children,
  className = "",
  ref,
}: {
  children: React.ReactNode;
  className?: string;
  ref?: React.Ref<HTMLDivElement>;
}) {
  return (
    <div className={cx(styles.prose, className)} ref={ref}>
      {children}
    </div>
  );
}

/**
 * Caption component for images and figures
 * @example
 * <Caption>Figure 1: Example diagram</Caption>
 */
export function Caption({
  children,
  className = "",
  ref,
  ...rest
}: Omit<BaseProps, "size"> & { ref?: React.Ref<HTMLParagraphElement> }) {
  return (
    <Text<"p">
      as="p"
      className={cx(styles.caption, className)}
      ref={ref}
      {...rest}
    >
      {children}
    </Text>
  );
}

/**
 * Blockquote component
 * @example
 * <Blockquote>Quote text here</Blockquote>
 */
export function Blockquote({
  children,
  className = "",
  cite,
  ref,
}: {
  children: React.ReactNode;
  className?: string;
  cite?: string;
  ref?: React.Ref<HTMLQuoteElement>;
}) {
  return (
    <blockquote
      className={cx(styles.blockquote, className)}
      cite={cite}
      ref={ref}
    >
      {children}
    </blockquote>
  );
}

/**
 * Code component for inline code snippets
 * @example
 * <Code>const example = 'code';</Code>
 */
export function Code({
  children,
  className = "",
  ref,
  ...rest
}: Omit<BaseProps, "as"> & { ref?: React.Ref<HTMLElement> }) {
  return (
    <code className={cx(styles.code, getClassNames(rest), className)} ref={ref}>
      {children}
    </code>
  );
}

/**
 * Label component for form elements
 * @example
 * <Label>Username</Label>
 */
export function Label({
  children,
  className = "",
  ref,
  ...rest
}: Omit<BaseProps, "as"> & { ref?: React.Ref<HTMLLabelElement> }) {
  return (
    <label
      className={cx(styles.label, styles.text, getClassNames(rest), className)}
      ref={ref}
    >
      {children}
    </label>
  );
}

// Numbered heading components (Heading1, Heading2, etc.)
/**
 * Heading1 component (h1)
 * @example
 * <Heading1>Page Title</Heading1>
 */
export function Heading1({
  children,
  ...props
}: Omit<BaseProps, "level"> & { ref?: React.Ref<HTMLHeadingElement> }) {
  return (
    <Heading level="h1" {...props}>
      {children}
    </Heading>
  );
}

/**
 * Heading2 component (h2)
 * @example
 * <Heading2>Section Title</Heading2>
 */
export function Heading2({
  children,
  ...props
}: Omit<BaseProps, "level"> & { ref?: React.Ref<HTMLHeadingElement> }) {
  return (
    <Heading level="h2" {...props}>
      {children}
    </Heading>
  );
}

/**
 * Heading3 component (h3)
 * @example
 * <Heading3>Subsection Title</Heading3>
 */
export function Heading3({
  children,
  ...props
}: Omit<BaseProps, "level"> & { ref?: React.Ref<HTMLHeadingElement> }) {
  return (
    <Heading level="h3" {...props}>
      {children}
    </Heading>
  );
}

/**
 * Heading4 component (h4)
 * @example
 * <Heading4>Minor Section Title</Heading4>
 */
export function Heading4({
  children,
  ...props
}: Omit<BaseProps, "level"> & { ref?: React.Ref<HTMLHeadingElement> }) {
  return (
    <Heading level="h4" {...props}>
      {children}
    </Heading>
  );
}

/**
 * Heading5 component (h5)
 * @example
 * <Heading5>Small Section Title</Heading5>
 */
export function Heading5({
  children,
  ...props
}: Omit<BaseProps, "level"> & { ref?: React.Ref<HTMLHeadingElement> }) {
  return (
    <Heading level="h5" {...props}>
      {children}
    </Heading>
  );
}

/**
 * Heading6 component (h6)
 * @example
 * <Heading6>Smallest Section Title</Heading6>
 */
export function Heading6({
  children,
  ...props
}: Omit<BaseProps, "level"> & { ref?: React.Ref<HTMLHeadingElement> }) {
  return (
    <Heading level="h6" {...props}>
      {children}
    </Heading>
  );
}

/**
 * List container – ordered or unordered
 * @example
 * <List as="ol"><ListItem>…</ListItem></List>
 */
export function List({
  as = "ul",
  children,
  className = "",
  ref,
  ...rest
}: Omit<BaseProps, "size" | "weight" | "lineHeight"> & {
  as?: ListElementType;
  ref?: React.Ref<HTMLUListElement | HTMLOListElement>;
}) {
  const combined = cx(styles.list, className, getClassNames(rest));

  return React.createElement(
    as,
    { className: combined, ref, ...rest },
    children,
  );
}

/**
 * List item
 * @example
 * <ListItem>Lorem ipsum</ListItem>
 */
export function ListItem({
  children,
  className = "",
  ref,
  ...rest
}: Omit<BaseProps, "size" | "weight" | "lineHeight"> & {
  ref?: React.Ref<HTMLLIElement>;
}) {
  return (
    <li
      className={cx(styles.listItem, className, getClassNames(rest))}
      ref={ref}
      {...rest}
    >
      {children}
    </li>
  );
}

// Legacy Title components (kept for backward compatibility)
export const Title1 = Heading1;
export const Title2 = Heading2;
export const Title3 = Heading3;
export const Title4 = Heading4;
export const Title5 = Heading5;
export const Title6 = Heading6;

// Export short aliases for backward compatibility
export {
  Paragraph as P, // Keep short alias for backward compatibility
  Heading as H, // Keep short alias for backward compatibility
};
