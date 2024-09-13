import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { MemoryRouter } from "react-router-dom";
import { Component } from "./page.tsx";

describe("Input", async () => {
  it("app", () => {
    render(
      <MemoryRouter>
        <Component />
      </MemoryRouter>,
    );

    const element = screen.getByRole("link", { name: "JSON" });
    expect(element).toBeInTheDocument();
  });
});
