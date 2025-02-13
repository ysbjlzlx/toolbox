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
        name: "JSON Formatter",
        path: "/json/formatter",
        key: "/json/formatter",
      },
      {
        name: "JSON Diff",
        path: "/json/json-diff",
        key: "/json/json-diff",
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
    name: "Markdown",
    desc: "Markdown 是一种轻量级标记语言，它允许人们使用易读易写的纯文本格式编写文档。",
    icon: <Iconify icon="lucide:pen" />,
    children: [
      { name: "md-editor", path: "/markdown/md-editor" },
      { name: "mdx-editor", path: "/markdown/mdx-editor" },
      { name: "Milkdown", path: "/markdown/milkdown" },
      { name: "Vditor", path: "/markdown/vditor" },
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
    name: "安全",
    desc: "随机 ID，随机用户名，随机密码",
    icon: <Iconify icon="lucide:shield-check" />,
    children: [
      { name: "ID", path: "/generator/id" },
      {
        name: "密码",
        desc: "生成密码",
        path: "/password",
      },
    ],
  },
];
