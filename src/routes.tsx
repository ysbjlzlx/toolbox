import type { RouteObject } from "react-router";

import Loading from "@/components/Loading";
import NotFound from "@/components/NotFound";
import BaseLayout from "@/layouts/BaseLayout";

export const routes: RouteObject[] = [
  {
    path: "/",
    HydrateFallback: Loading,
    children: [
      {
        index: true,
        lazy: () => import("@/pages/page.tsx"),
      },
      {
        path: "playground",
        lazy: () => import("@/pages/playground/index.tsx"),
      },
    ],
  },
  {
    path: "/",
    element: <BaseLayout />,
    HydrateFallback: Loading,
    children: [
      {
        path: "base64",
        lazy: () => import("@/pages/base64/page.tsx"),
      },
      {
        path: "code",
        children: [
          {
            path: "conversion",
            lazy: () => import("@/pages/code/conversion"),
          },
          {
            path: "formatter",
            lazy: () => import("@/pages/code/formatter"),
          },
        ],
      },
      {
        path: "image",
        children: [
          {
            path: "placeholder",
            lazy: () => import("@/pages/image/placeholder/page.tsx"),
          },
          {
            path: "qrcode",
            lazy: () => import("@/pages/image/qrcode/page.tsx"),
          },
        ],
      },
      {
        path: "string",
        children: [{ index: true, lazy: () => import("@/pages/string/index.tsx") }],
      },
      {
        path: "template",
        children: [{ index: true, lazy: () => import("@/pages/template/index.tsx") }],
      },
      {
        path: "excel",
        lazy: () => import("@/pages/excel/page.tsx"),
      },
      {
        path: "generator",
        children: [
          {
            path: "id",
            lazy: () => import("@/pages/generator/id/page.tsx"),
          },
        ],
      },
      {
        path: "hash",
        lazy: () => import("@/pages/hash/page.tsx"),
      },
      {
        path: "json",
        children: [
          {
            index: true,
            lazy: () => import("@/pages/json/json-editor"),
          },
          {
            path: "formatter",
            lazy: () => import("@/pages/json/json-formatter"),
          },
          {
            path: "json-editor",
            lazy: () => import("@/pages/json/json-editor"),
          },
          {
            path: "json-to-excel",
            lazy: () => import("@/pages/json/json-to-excel/page.tsx"),
          },
          {
            path: "json-diff",
            lazy: () => import("@/pages/json/json-diff/index.tsx"),
          },
        ],
      },
      {
        path: "markdown",
        children: [
          {
            path: "mdx-editor",
            lazy: () => import("@/pages/markdown/mdx-editor"),
          },
          { path: "milkdown", lazy: () => import("@/pages/markdown/milkdown") },
          { path: "vditor", lazy: () => import("@/pages/markdown/vditor") },
        ],
      },
      {
        path: "password",
        lazy: () => import("@/pages/password"),
      },
      {
        path: "timestamp",
        lazy: () => import("@/pages/timestamp/page.tsx"),
      },
      {
        path: "tiptap",
        lazy: () => import("@/pages/tiptap/page.tsx"),
      },
      {
        path: "totp",
        lazy: () => import("@/pages/totp/page.tsx"),
      },
      {
        path: "url",
        lazy: () => import("@/pages/url/page.tsx"),
      },
      {
        path: "user-pass",
        lazy: () => import("@/pages/user-pass/index.tsx"),
      },
      {
        path: "username",
        lazy: () => import("@/pages/username/index.tsx"),
      },
      {
        path: "writer",
        children: [{ index: true, lazy: () => import("@/pages/writer/page.tsx") }],
      },
      {
        path: "transform",
        lazy: () => import("@/pages/transform"),
      },
    ],
  },
  {
    path: "*",
    HydrateFallback: Loading,
    element: <NotFound />,
  },
];
