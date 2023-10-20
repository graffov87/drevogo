import { describe, it, expect } from "vitest";

import func from ".";

describe("isEmpty", () => {
  it("Should be true if string is empty", () => {
    expect(func("")).toBeTruthy();
  });

  it("Should be false if string is not enpty", () => {
    expect(func("test")).toBeFalsy();
  });
});
