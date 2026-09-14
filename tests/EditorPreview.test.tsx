import { useState } from "react";
import { afterEach, describe, expect, it } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import EditorPreview from "@/components/site/jetbrains/EditorPreview";
import { iris, tokens, type Token } from "@/content/demo-tokens";

afterEach(cleanup);

function Demo() {
  const [token, setToken] = useState<Token>(iris);
  return (
    <EditorPreview mode="completion" token={token} onTokenChange={setToken} />
  );
}

const reopenKeys = [
  { name: "F1", event: { key: "F1" } },
  { name: "Ctrl+Space", event: { key: " ", ctrlKey: true } },
];
const acceptKeys = [
  { name: "Enter", event: { key: "Enter" }, suffix: "" },
  { name: "Tab", event: { key: "Tab" }, suffix: "" },
  { name: "Ctrl+.", event: { key: ".", ctrlKey: true }, suffix: "." },
];

describe("completion reopening", () => {
  for (const index of [1, 2]) {
    for (const initialKey of ["Enter", "Tab"]) {
      for (const reopen of reopenKeys) {
        for (const accept of acceptKeys) {
          it(`accepts suggestion ${index + 1} with ${initialKey}, then ${reopen.name} and ${accept.name}`, () => {
            render(<Demo />);
            const input = screen.getByRole("combobox") as HTMLInputElement;
            for (let step = 0; step < index; step++) {
              fireEvent.keyDown(input, { key: "ArrowDown" });
            }
            fireEvent.keyDown(input, { key: initialKey });
            expect(input.value).toBe(tokens[index].name);
            expect(input.getAttribute("aria-expanded")).toBe("false");

            fireEvent.keyDown(input, reopen.event);
            expect(screen.getAllByRole("option")).toHaveLength(1);
            fireEvent.keyDown(input, accept.event);
            expect(input.value).toBe(tokens[index].name + accept.suffix);
            expect(input.getAttribute("aria-expanded")).toBe("false");
          });
        }
      }
    }
  }

  it("points accessibility selection at the remaining suggestion after reopening", () => {
    render(<Demo />);
    const input = screen.getByRole("combobox");
    fireEvent.keyDown(input, { key: "ArrowDown" });
    fireEvent.keyDown(input, { key: "Enter" });
    fireEvent.keyDown(input, { key: "F1" });
    const active = document.getElementById(
      input.getAttribute("aria-activedescendant")!,
    );
    expect(active).not.toBeNull();
    expect(active?.getAttribute("aria-selected")).toBe("true");
  });

  for (const accept of acceptKeys) {
    it(`leaves an empty result alone on ${accept.name}`, () => {
      render(<Demo />);
      const input = screen.getByRole("combobox") as HTMLInputElement;
      fireEvent.change(input, { target: { value: "--missing-token" } });
      fireEvent.keyDown(input, { key: "F1" });
      expect(screen.queryAllByRole("option")).toHaveLength(0);
      expect(fireEvent.keyDown(input, accept.event)).toBe(true);
      expect(input.value).toBe("--missing-token");
    });
  }
});
