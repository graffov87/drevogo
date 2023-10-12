import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

import Component from ".";

describe("Uploader", () => {
  it("Should render upload button", () => {
    render(<Component />);
    expect(screen.getByText("Upload a file")).toBeInTheDocument();
  });
});
