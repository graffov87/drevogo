import { describe, it, expect } from "vitest";

import func from ".";

describe("isFirstNumber", () => {
  it("Should be true if first letter is number", () => {
    expect(func("1test")).toBeTruthy();
  });

  it("Should be false if first letter is not number", () => {
    expect(func("test")).toBeFalsy();
  });

  it("Should be false if string is empty", () => {
    expect(func("")).toBeFalsy();
  });
});
