import { describe, it, expect } from "vitest";

import func from ".";

describe("isNotEmpty", () => {
  it("Should be false if string is empty", () => {
    expect(func("")).toBeFalsy();
  });

  it("Should be true if string is not enpty", () => {
    expect(func("test")).toBeTruthy();
  });
});
