import { registerSW } from "virtual:pwa-register";
import { StyleProvider } from "@ant-design/cssinjs";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router";

import { routes } from "@/routes.tsx";

import "@/i18n";

import "./globals.css";

registerSW({ immediate: true });

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <StyleProvider layer>
      <RouterProvider router={router} />
    </StyleProvider>
  </StrictMode>,
);
