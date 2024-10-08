import Iconify from "@/components/Iconify";
import type { MenuDataItem } from "@ant-design/pro-components";

export const menuData: MenuDataItem[] = [
  {
    name: "JSON",
    icon: <Iconify icon="logos:json" />,
    children: [
      {
        name: "JSON 编辑器",
        path: "/json/json-editor",
        key: "/json/json-editor",
      },
      {
        name: "JSON To Excel",
        path: "/json/json-to-excel",
        key: "/json/json-to-excel",
        disabled: true,
      },
    ],
  },
  {
    name: "Code",
    icon: <Iconify icon="lucide:code" />,
    children: [
      {
        name: "格式转换",
        path: "/code/conversion",
        key: "/code/conversion",
      },
      {
        name: "Diff",
        path: "/code/diff",
        key: "/code/diff",
      },
      {
        name: "Formatter",
        path: "/code/formatter",
        key: "/code/formatter",
      },
    ],
  },
  {
    name: "图片",
    icon: <Iconify icon="lucide:image" />,
    children: [
      {
        name: "占位图",
        desc: "快速便捷生成占位图",
        path: "/image/placeholder",
      },
      {
        name: "QRCode",
        desc: "为字符串生成对应的 QRCode 图片",
        path: "/image/qrcode",
      },
    ],
  },
  {
    name: "字符串",
    icon: <Iconify icon="lucide:whole-word" />,
    children: [
      { name: "Base-X", path: "/base64" },
      { name: "Hashing", path: "/hash" },
    ],
  },
  {
    name: "生成器（Generator）",
    icon: <Iconify icon="lucide:dices" />,
    children: [{ name: "ID", path: "/generator/id" }],
  },
  {
    name: "URL",
    desc: "URL(Uniform Resource Locator) 统一资源定位符，俗称网页地址，简称网址，是因特网上标准的资源的地址（Address），如同在网络上的门牌。",
    path: "/url",
    icon: <Iconify icon="lucide:link" />,
  },
  {
    name: "文本编辑器",
    icon: <Iconify icon="material-symbols:contract-edit-outline" />,
    children: [
      {
        name: "Markdown",
        desc: "Markdown 是一种轻量级标记语言，它允许人们使用易读易写的纯文本格式编写文档。",
        path: "/markdown",
      },
      {
        name: "富文本编辑器",
        desc: "Quill",
        path: "/writer",
        icon: <Iconify icon="material-symbols:contract-edit-outline" />,
      },
      {
        name: "Tiptap",
        desc: "Tiptap",
        path: "/tiptap",
      },
    ],
  },
  {
    name: "Excel",
    desc: "Excel 转 JSON",
    path: "/excel",
    icon: <Iconify icon="lucide:sheet" />,
  },
  {
    name: "时间戳（Timestamp）",
    desc: "时间戳（Timestamp）",
    path: "/timestamp",
    icon: <Iconify icon="lucide:timer" />,
  },
  {
    name: "换算（Transform）",
    desc: "宽带速率",
    path: "/transform",
    icon: <Iconify icon="material-symbols:transform" />,
  },
  {
    name: "用户名与密码",
    desc: "为你生成安全的用户名和密码",
    icon: <Iconify icon="lucide:shield-check" />,
    children: [
      {
        name: "密码",
        desc: "生成密码",
        path: "/password",
      },
    ],
  },
];
