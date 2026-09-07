import data from "./resolution-examples.json";

// Content exported from the v1.9.4 documentation generator and verified fixtures.
export const resolutionExamples = data.examples;
export type ResolutionExample = (typeof resolutionExamples)[number];
export type ResolutionStep = ResolutionExample["steps"][number];
export const exampleFiles: Record<string, string[]> = data.files;
export const resolutionGroups = [
  { value: "imports", label: "Imports" },
  { value: "calculations", label: "Calculations" },
  { value: "css", label: "CSS values" },
] as const;
export type ResolutionGroup = (typeof resolutionGroups)[number]["value"];
