"use client";

import { useEffect, useState } from "react";
import {
  ArrowDownRight,
  FileCode2,
  Play,
  RotateCcw,
  Square,
} from "lucide-react";
import {
  resolutionExamples,
  resolutionGroups,
  type ResolutionExample,
  type ResolutionGroup,
} from "@/content/resolution-examples";
import SelectionTabs from "../SelectionTabs";
import ResolutionDocumentation from "../jetbrains/ResolutionDocumentation";
import SourceCode from "./SourceCode";
import styles from "./ResolutionDemo.module.scss";

function ExampleScene({ example }: { example: ResolutionExample }) {
  const [sourceIndex, setSourceIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);
  const source = example.files[sourceIndex];

  useEffect(() => {
    if (!playing) return;
    function stopWhenHidden() {
      if (document.hidden) setPlaying(false);
    }
    document.addEventListener("visibilitychange", stopWhenHidden);
    const timer = window.setTimeout(() => {
      if (sourceIndex < example.files.length - 1)
        setSourceIndex(sourceIndex + 1);
      else setPlaying(false);
    }, 1100);
    return () => {
      window.clearTimeout(timer);
      document.removeEventListener("visibilitychange", stopWhenHidden);
    };
  }, [playing, sourceIndex, example.files.length]);

  function trace() {
    if (playing) {
      setPlaying(false);
      return;
    }
    setHasPlayed(true);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setSourceIndex(example.files.length - 1);
      return;
    }
    setSourceIndex(0);
    setPlaying(true);
  }

  return (
    <>
      <div className={styles.scene}>
        <div className={styles.usage}>
          <div className={styles.fileHeader}>
            <FileCode2 size={14} aria-hidden="true" />
            <span>{example.entry}</span>
            <span>{example.entry.split(".").pop()?.toUpperCase()}</span>
          </div>
          <SourceCode path={example.entry} line={example.entryLine} />
          <div className={styles.docArea}>
            <ResolutionDocumentation
              example={example}
              onSourceInspect={() => {
                setPlaying(false);
                setSourceIndex(0);
              }}
            />
          </div>
          <p className={styles.hint}>
            Hover Value or Source. Click or tap to keep it open.
          </p>
        </div>
        <div className={styles.sources}>
          <div className={styles.sourceHeading}>
            <div>
              <ArrowDownRight size={16} aria-hidden="true" />
              <span>Explore the source files</span>
            </div>
            <button onClick={trace} type="button">
              {playing ? (
                <Square size={11} aria-hidden="true" />
              ) : hasPlayed ? (
                <RotateCcw size={12} aria-hidden="true" />
              ) : (
                <Play size={12} aria-hidden="true" />
              )}
              {playing
                ? "Stop trace"
                : hasPlayed
                  ? "Replay trace"
                  : "Trace value"}
            </button>
          </div>
          <ol className={styles.fileTrail} aria-label="Reference path">
            {example.files.map((file, index) => (
              <li
                key={`${file.path}:${file.line}`}
                data-visited={index <= sourceIndex}
              >
                <button
                  type="button"
                  aria-current={index === sourceIndex ? "step" : undefined}
                  aria-label={`Show ${file.path}, line ${file.line}`}
                  onClick={() => {
                    setPlaying(false);
                    setSourceIndex(index);
                  }}
                >
                  <span className={styles.stepNumber}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>
                    {file.path.split("/").pop()}
                    <small>:{file.line}</small>
                  </span>
                </button>
              </li>
            ))}
          </ol>
          <div className={styles.sourceEditor}>
            <div className={styles.fileHeader}>
              <FileCode2 size={14} aria-hidden="true" />
              <span>{source.path}</span>
            </div>
            <div
              key={`${source.path}:${source.line}`}
              className={styles.sourceReveal}
            >
              <SourceCode path={source.path} line={source.line} />
            </div>
          </div>
          <div className={styles.resolvedResult}>
            <span>Resolved value</span>
            <strong>
              {example.color && (
                <i
                  style={{ backgroundColor: example.color }}
                  aria-hidden="true"
                />
              )}
              {example.value}
            </strong>
          </div>
          <p className={styles.explorerNote}>
            Browse the example project. The plugin shows the source in its hover
            popup.
          </p>
          <span className={styles.announcement} aria-live="polite">
            {source.path}, line {source.line}
            {playing ? ". Following references." : ""}
          </span>
        </div>
      </div>
      <div className={styles.sceneCaption}>
        <h4>{example.heading}</h4>
        <p>{example.description}</p>
      </div>
    </>
  );
}

export default function ResolutionDemo() {
  const [group, setGroup] = useState<ResolutionGroup>("imports");
  const [exampleId, setExampleId] = useState("scss-color");
  const example = resolutionExamples.find((item) => item.id === exampleId)!;
  const options = resolutionExamples.filter((item) => item.group === group);
  return (
    <div className={styles.demo} id="imports-sources">
      <div className={styles.intro}>
        <div>
          <span className="eyebrow">Imports, sources & calculations</span>
          <h3>
            Follow the value
            <br />
            <span>back home.</span>
          </h3>
        </div>
        <p>
          Behind every value is a story. Follow imported tokens to their
          declarations, and see the steps that turn a reference into a result.
        </p>
      </div>
      <div className={styles.controls}>
        <SelectionTabs
          id="resolution"
          label="Explore variable resolution"
          options={resolutionGroups}
          value={group}
          onChange={(next) => {
            setGroup(next);
            setExampleId(
              resolutionExamples.find((item) => item.group === next)!.id,
            );
          }}
        />
        <label className={styles.variant}>
          <span>Example</span>
          <select
            aria-label="Resolution example"
            value={exampleId}
            onChange={(event) => setExampleId(event.target.value)}
          >
            {options.map((item) => (
              <option key={item.id} value={item.id}>
                {item.label}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div
        role="tabpanel"
        id="resolution-panel"
        aria-labelledby={`resolution-${group}`}
      >
        <ExampleScene key={example.id} example={example} />
      </div>
    </div>
  );
}
