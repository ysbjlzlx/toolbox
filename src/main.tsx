import { registerSW } from "virtual:pwa-register";
import { StyleProvider } from "@ant-design/cssinjs";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import Loading from "@/components/Loading";

import router from "@/router.tsx";

import "@/i18n";

import "./globals.css";

registerSW({ immediate: true });

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <StyleProvider layer>
      <RouterProvider router={router} fallbackElement={<Loading />} />
    </StyleProvider>
  </StrictMode>,
);
