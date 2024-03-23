import Iconify from '@/components/Iconify';
import type { ReactNode } from 'react';

export interface Application {
  name: string;
  desc: string;
  href: string;
  icon?: ReactNode;
}

export const apps: Application[] = [
  {
    name: 'JSON',
    desc: 'JSON(JavaScript Object Notation) 是一种轻量级的数据交换格式。易于人阅读和编写。同时也易于机器解析和生成。',
    href: '/json/json-editor',
    icon: <Iconify icon="material-symbols:data-object" />,
  },
  {
    name: 'URL',
    desc: 'URL(Uniform Resource Locator) 统一资源定位符，俗称网页地址，简称网址，是因特网上标准的资源的地址（Address），如同在网络上的门牌。',
    href: '/url',
    icon: <Iconify icon="material-symbols:link" />,
  },
  {
    name: 'Markdown',
    desc: 'Markdown 是一种轻量级标记语言，它允许人们使用易读易写的纯文本格式编写文档。',
    href: '/markdown',
    icon: <Iconify icon="material-symbols:contract-edit-outline" />,
  },
  {
    name: '格式转换',
    desc: 'JSON、YAML、XML 代码格式转换',
    href: '/format-conversion',
    icon: <Iconify icon="material-symbols:sync-alt" />,
  },
  {
    name: 'ID Generator',
    desc: 'ID 生成器',
    href: '/generator/id',
    icon: <Iconify icon="material-symbols:code" />,
  },
  {
    name: 'Random String Generator',
    desc: '生成包含数字、小写字母、大写字母、符号的随机字符串',
    href: '/generator/string',
    icon: <Iconify icon="material-symbols:shuffle" />,
  },
  {
    name: 'Image Generator',
    desc: '快速便捷生成占位图',
    href: '/generator/image',
    icon: <Iconify icon="material-symbols:imagesmode-outline" />,
  },
  {
    name: 'CodeFormatter',
    desc: '代码格式化，目前支持：JSON、JSON5',
    href: '/code-formatter',
    icon: <Iconify icon="material-symbols:code" />,
  },
  {
    name: 'Base 64',
    desc: 'Base64 编码、解码',
    href: '/base64',
    icon: <Iconify icon="material-symbols:compress" />,
  },
  {
    name: 'Excel',
    desc: 'Excel 转 JSON',
    href: '/excel',
    icon: <Iconify icon="material-symbols:table-chart-outline" />,
  },
  {
    name: 'Hash',
    desc: '计算 MD5、SHA1、SHA256、SHA512 哈希值',
    href: '/hash',
    icon: <Iconify icon="material-symbols:tag" />,
  },
  {
    name: 'QRCode',
    desc: '为字符串生成对应的 QRCode 图片',
    href: '/qrcode',
    icon: <Iconify icon="material-symbols:qr-code" />,
  },
  {
    name: '时间戳（Timestamp）',
    desc: '时间戳（Timestamp）',
    href: '/timestamp',
    icon: <Iconify icon="material-symbols:av-timer" />,
  },
];
