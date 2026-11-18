import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import HeroEditor from "@/components/site/hero/HeroEditor";
import {
  DEFAULT_ACCENT_INDEX,
  spectrum,
  spectrumStops,
} from "@/content/spectrum";

const accentStop = () =>
  document.documentElement.style.getPropertyValue("--s3");
const value = (name: string) =>
  spectrum.find((token) => token.name === name)!.value;

beforeEach(() => {
  // jsdom has no matchMedia. Reporting reduced motion skips the typed intro,
  // so the suggestion list is open as soon as the editor mounts.
  window.matchMedia = ((query: string) => ({
    matches: true,
    media: query,
    addEventListener() {},
    removeEventListener() {},
  })) as unknown as typeof window.matchMedia;
});

afterEach(() => {
  cleanup();
  document.documentElement.removeAttribute("style");
});

describe("spectrumStops", () => {
  it("keeps the logo order for the default accent", () => {
    expect(spectrumStops(DEFAULT_ACCENT_INDEX)).toEqual(
      spectrum.map((token) => token.value),
    );
  });

  it.each(spectrum.map((token, index) => [token.name, index] as const))(
    "puts %s on the accent stop and keeps all six colors",
    (_name, index) => {
      const stops = spectrumStops(index);
      expect(stops[2]).toBe(spectrum[index].value);
      expect([...stops].sort()).toEqual(
        spectrum.map((token) => token.value).sort(),
      );
    },
  );
});

describe("hero editor", () => {
  it("opens on the default accent without touching the page", () => {
    render(<HeroEditor />);
    expect(
      screen.getByRole("option", { name: /--spectrum-violet/ }),
    ).toHaveProperty("ariaSelected", "true");
    expect(accentStop()).toBe("");
  });

  it("picks up an accent chosen before it mounted", () => {
    const first = render(<HeroEditor />);
    fireEvent.click(screen.getByRole("option", { name: /--spectrum-lime/ }));
    first.unmount();

    render(<HeroEditor />);
    expect(
      screen.getByRole("option", { name: /--spectrum-lime/ }),
    ).toHaveProperty("ariaSelected", "true");
    expect(accentStop()).toBe(value("--spectrum-lime"));
  });

  it("previews the highlighted token and commits the clicked one", () => {
    render(<HeroEditor />);
    const green = screen.getByRole("option", { name: /--spectrum-green/ });

    fireEvent.mouseEnter(green);
    expect(accentStop()).toBe(value("--spectrum-green"));

    fireEvent.click(green);
    expect(screen.queryByRole("listbox")).toBeNull();
    expect(screen.getByRole<HTMLInputElement>("combobox").value).toBe(
      "--spectrum-green",
    );
    expect(accentStop()).toBe(value("--spectrum-green"));
  });

  it("restores the committed accent when the list is dismissed", () => {
    render(<HeroEditor />);
    fireEvent.mouseEnter(
      screen.getByRole("option", { name: /--spectrum-orange/ }),
    );
    expect(accentStop()).toBe(value("--spectrum-orange"));

    fireEvent.keyDown(screen.getByRole("combobox"), { key: "Escape" });
    expect(accentStop()).toBe(value("--spectrum-violet"));
  });

  it("picks a token with the arrow keys and Enter", () => {
    render(<HeroEditor />);
    const input = screen.getByRole<HTMLInputElement>("combobox");

    fireEvent.keyDown(input, { key: "ArrowDown" });
    fireEvent.keyDown(input, { key: "Enter" });

    expect(input.value).toBe("--spectrum-blue");
    expect(accentStop()).toBe(value("--spectrum-blue"));
  });

  it("reopens on the committed token", () => {
    render(<HeroEditor />);
    fireEvent.click(screen.getByRole("option", { name: /--spectrum-pink/ }));
    fireEvent.click(screen.getByRole("button", { name: "Show suggestions" }));

    expect(
      screen.getByRole("option", { name: /--spectrum-pink/ }),
    ).toHaveProperty("ariaSelected", "true");
  });
});
