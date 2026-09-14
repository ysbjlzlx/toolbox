import { render } from "vitest-browser-react";
import { createRoutesStub } from "react-router";
import { describe, expect, test } from "vitest";

import { Component as JSONEditor } from "../../src/pages/json/json-editor";
import { Component } from "../../src/pages/page.tsx";

test("app",async () => {

  const Stub = createRoutesStub([
    {
      path: "/",
      Component: Component,
    },
    { path: "/json/json-editor", Component: JSONEditor },
  ]);

  const screen = await render(<Stub initialEntries={["/"]} />);

  const element =await screen.getByRole("button", { name: "text" });
  await expect.element(element).toBeInTheDocument();
});
