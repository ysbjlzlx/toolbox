import React from 'react';
import './App.css';
import { Card, CardActions, CardContent, Container, Grid, Link, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export type Application = {
  name: string;
  desc: string;
  href: string;
};
const application: Application[] = [
  {
    name: 'JSON',
    desc: 'JSON(JavaScript Object Notation) 是一种轻量级的数据交换格式。易于人阅读和编写。同时也易于机器解析和生成。',
    href: '/json',
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
];

function App() {
  const item = ({ applications }: { applications: Application[] }) => {
    return applications.map((application) => {
      return (
        <Grid item xs={12} sm={6} md={4} key={application.name}>
          <Card>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {application.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {application.desc}
              </Typography>
            </CardContent>
            <CardActions>
              <Link component={RouterLink} to={application.href}>
                {application.name}
              </Link>
            </CardActions>
          </Card>
        </Grid>
      );
    });
  };
  return (
    <Container style={{ marginTop: '64px' }}>
      <Grid container spacing={2}>
        {item({ applications: application })}
      </Grid>
    </Container>
  );
}

export default App;
