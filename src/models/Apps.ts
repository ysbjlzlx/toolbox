export type Application = {
  name: string;
  desc: string;
  href: string;
};
export const apps: Application[] = [
  {
    name: 'JSON',
    desc: 'JSON(JavaScript Object Notation) 是一种轻量级的数据交换格式。易于人阅读和编写。同时也易于机器解析和生成。',
    href: '/json',
  },
  {
    name: 'JSON2YAML',
    desc: 'JSON 与 Yaml 格式相互转化',
    href: '/json2yaml',
  },
  {
    name: 'URL',
    desc: 'URL(Uniform Resource Locator) 统一资源定位符，俗称网页地址，简称网址，是因特网上标准的资源的地址（Address），如同在网络上的门牌。',
    href: '/url',
  },
  {
    name: 'Markdown',
    desc: 'Markdown 是一种轻量级标记语言，它允许人们使用易读易写的纯文本格式编写文档。',
    href: '/markdown',
  },
  {
    name: 'Random',
    desc: '生成包含数字、小写字母、大写字母、符号的随机字符串',
    href: '/random',
  },
  {
    name: 'Base 64',
    desc: 'Base64 编码、解码',
    href: '/base64',
  },
  {
    name: 'Excel',
    desc: 'Excel 转 JSON',
    href: '/excel',
  },
  {
    name: 'Hash',
    desc: '计算 MD5、SHA1、SHA256、SHA512 哈希值',
    href: '/hash',
  },
  {
    name: 'QRCode',
    desc: '为字符串生成对应的 QRCode 图片',
    href: '/qrcode',
  },
  {
    name: 'CodeFormatter',
    desc: '代码格式化，目前支持：JSON、JSON5',
    href: '/code-formatter',
  },
  {
    name: 'Placeholder',
    desc: '快速便捷生成占位图',
    href: '/placeholder',
  },
];
