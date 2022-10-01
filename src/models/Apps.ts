import {
  Code,
  Compress,
  DataObject,
  Drafts,
  Image,
  Link,
  QrCode,
  Shuffle,
  SvgIconComponent,
  SyncAlt,
  TableView,
  Tag,
  Timer,
} from '@mui/icons-material';

export interface Application {
  name: string;
  desc: string;
  href: string;
  icon?: null | SvgIconComponent;
}

export const apps: Application[] = [
  {
    name: 'JSON',
    desc: 'JSON(JavaScript Object Notation) 是一种轻量级的数据交换格式。易于人阅读和编写。同时也易于机器解析和生成。',
    href: '/json',
    icon: DataObject,
  },
  {
    name: 'Yaml',
    desc: 'Yaml 格式处理',
    href: '/yaml',
    icon: SyncAlt,
  },
  {
    name: 'BSON ObjectID',
    desc: 'BSON',
    href: '/bson-object-id',
    icon: Code,
  },
  {
    name: 'CodeFormatter',
    desc: '代码格式化，目前支持：JSON、JSON5',
    href: '/code-formatter',
    icon: Code,
  },
  {
    name: 'URL',
    desc: 'URL(Uniform Resource Locator) 统一资源定位符，俗称网页地址，简称网址，是因特网上标准的资源的地址（Address），如同在网络上的门牌。',
    href: '/url',
    icon: Link,
  },
  {
    name: 'Markdown',
    desc: 'Markdown 是一种轻量级标记语言，它允许人们使用易读易写的纯文本格式编写文档。',
    href: '/markdown',
    icon: Drafts,
  },
  {
    name: 'Random',
    desc: '生成包含数字、小写字母、大写字母、符号的随机字符串',
    href: '/random',
    icon: Shuffle,
  },
  {
    name: 'Base 64',
    desc: 'Base64 编码、解码',
    href: '/base64',
    icon: Compress,
  },
  {
    name: 'Excel',
    desc: 'Excel 转 JSON',
    href: '/excel',
    icon: TableView,
  },
  {
    name: 'Hash',
    desc: '计算 MD5、SHA1、SHA256、SHA512 哈希值',
    href: '/hash',
    icon: Tag,
  },
  {
    name: 'QRCode',
    desc: '为字符串生成对应的 QRCode 图片',
    href: '/qrcode',
    icon: QrCode,
  },
  {
    name: 'Placeholder Image',
    desc: '快速便捷生成占位图',
    href: '/placeholder',
    icon: Image,
  },
  {
    name: '时间戳（Timestamp）',
    desc: '时间戳（Timestamp）',
    href: '/timestamp',
    icon: Timer,
  },
];
