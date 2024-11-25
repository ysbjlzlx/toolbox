import { render, screen } from "@testing-library/react";
import { createRoutesStub } from "react-router";
import { describe, expect, it } from "vitest";

import { Component as JSONEditor } from "./json/json-editor";
import { Component } from "./page.tsx";

describe("Input", async () => {
  const Stub = createRoutesStub([
    {
      path: "/",
      Component: Component,
    },
    { path: "/json/json-editor", Component: JSONEditor },
  ]);

  it("app", () => {
    render(<Stub initialEntries={["/"]} />);

    const element = screen.getByRole("button", { name: "text" });
    expect(element).toBeInTheDocument();
  });
});
