import Iconify from '@/components/Iconify';
import type { MenuDataItem } from '@ant-design/pro-components';

export const menuData: MenuDataItem[] = [
  {
    name: 'JSON',
    icon: <Iconify icon="material-symbols:data-object" />,
    children: [
      {
        name: 'JSON 编辑器',
        path: '/json/json-editor',
        key: '/json/json-editor',
      },
      {
        name: 'JSON To YAML',
        path: '/json/json-to-yaml',
        key: '/json/json-to-yaml',
      },
      {
        name: 'JSON To Excel',
        path: '/json/json-to-excel',
        key: '/json/json-to-excel',
        disabled: true,
      },
    ],
  },
  {
    name: 'YAML',
    desc: 'YAML 格式处理',
    path: '/yaml',
    icon: <Iconify icon="material-symbols:sync-alt" />,
  },
  {
    name: '格式转换（开发中）',
    desc: 'JSON, YAML 等格式转换',
    path: '/format-conversion',
    icon: <Iconify icon="material-symbols:sync-alt" />,
  },
  {
    name: 'CodeFormatter',
    desc: '代码格式化，目前支持：JSON、JSON5',
    path: '/code-formatter',
    icon: <Iconify icon="material-symbols:code" />,
  },
  {
    name: '生成器（Generator）',
    icon: <Iconify icon="material-symbols:code" />,
    children: [
      {
        name: '随机字符串（String）',
        desc: '生成包含数字、小写字母、大写字母、符号的随机字符串',
        path: '/generator/string',
      },
      { name: 'ID', path: '/generator/id' },
      {
        name: 'Image',
        desc: '快速便捷生成占位图',
        path: '/generator/image',
      },
    ],
  },
  {
    name: 'URL',
    desc: 'URL(Uniform Resource Locator) 统一资源定位符，俗称网页地址，简称网址，是因特网上标准的资源的地址（Address），如同在网络上的门牌。',
    path: '/url',
    icon: <Iconify icon="material-symbols:link" />,
  },
  {
    name: 'Markdown',
    desc: 'Markdown 是一种轻量级标记语言，它允许人们使用易读易写的纯文本格式编写文档。',
    path: '/markdown',
    icon: <Iconify icon="material-symbols:contract-edit-outline" />,
  },
  {
    name: 'Base 64',
    desc: 'Base64 编码、解码',
    path: '/base64',
    icon: <Iconify icon="material-symbols:compress" />,
  },
  {
    name: 'Excel',
    desc: 'Excel 转 JSON',
    path: '/excel',
    icon: <Iconify icon="material-symbols:table-chart-outline" />,
  },
  {
    name: 'Hash',
    desc: '计算 MD5、SHA1、SHA256、SHA512 哈希值',
    path: '/hash',
    icon: <Iconify icon="material-symbols:tag" />,
  },
  {
    name: 'QRCode',
    desc: '为字符串生成对应的 QRCode 图片',
    path: '/qrcode',
    icon: <Iconify icon="material-symbols:qr-code" />,
  },
  {
    name: '时间戳（Timestamp）',
    desc: '时间戳（Timestamp）',
    path: '/timestamp',
    icon: <Iconify icon="material-symbols:av-timer" />,
  },
];
