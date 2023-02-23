import { LinkOutlined, QrcodeOutlined } from '@ant-design/icons';
import { Route } from '@ant-design/pro-layout/lib/typing';
import {
  Code,
  Compress,
  DataObject,
  Drafts,
  Image,
  Shuffle,
  SyncAlt,
  TableView,
  Tag,
  Timer,
} from '@mui/icons-material';

export const route: Route = {
  path: '/',
  children: [
    {
      name: 'JSON',
      icon: <DataObject fontSize="small" />,
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
      icon: <SyncAlt />,
    },
    {
      name: 'BSON ObjectID',
      desc: 'BSON',
      path: '/bson-object-id',
      icon: <Code />,
    },
    {
      name: 'CodeFormatter',
      desc: '代码格式化，目前支持：JSON、JSON5',
      path: '/code-formatter',
      icon: <Code />,
    },
    {
      name: 'URL',
      desc: 'URL(Uniform Resource Locator) 统一资源定位符，俗称网页地址，简称网址，是因特网上标准的资源的地址（Address），如同在网络上的门牌。',
      path: '/url',
      icon: <LinkOutlined />,
    },
    {
      name: 'Markdown',
      desc: 'Markdown 是一种轻量级标记语言，它允许人们使用易读易写的纯文本格式编写文档。',
      path: '/markdown',
      icon: <Drafts />,
    },
    {
      name: 'Random',
      desc: '生成包含数字、小写字母、大写字母、符号的随机字符串',
      path: '/random',
      icon: <Shuffle />,
    },
    {
      name: 'Base 64',
      desc: 'Base64 编码、解码',
      path: '/base64',
      icon: <Compress />,
    },
    {
      name: 'Excel',
      desc: 'Excel 转 JSON',
      path: '/excel',
      icon: <TableView />,
    },
    {
      name: 'Hash',
      desc: '计算 MD5、SHA1、SHA256、SHA512 哈希值',
      path: '/hash',
      icon: <Tag />,
    },
    {
      name: 'QRCode',
      desc: '为字符串生成对应的 QRCode 图片',
      path: '/qrcode',
      icon: <QrcodeOutlined />,
    },
    {
      name: 'Placeholder Image',
      desc: '快速便捷生成占位图',
      path: '/placeholder',
      icon: <Image />,
    },
    {
      name: '时间戳（Timestamp）',
      desc: '时间戳（Timestamp）',
      path: '/timestamp',
      icon: <Timer />,
    },
  ],
};
