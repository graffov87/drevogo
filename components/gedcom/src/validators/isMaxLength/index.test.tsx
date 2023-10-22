import { describe, it, expect } from "vitest";

import func from ".";

describe("isMaxLength", () => {
  it("Should be false if string is longer than 255 symbols", () => {
    const string = "#".repeat(256);
    expect(func(string)).toBeFalsy();
  });

  it("Should be true if string is equal 255 symbols", () => {
    const string = "#".repeat(255);
    expect(func(string)).toBeTruthy();
  });

  it("Should be true if string is shorter than 255 symbols", () => {
    expect(func("test")).toBeTruthy();
  });
});
