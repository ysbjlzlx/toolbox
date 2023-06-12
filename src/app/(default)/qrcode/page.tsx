'use client';

import { Container } from '@mui/material';
import { Col, Input, QRCode, Row } from 'antd';
import { ReactElement, useState } from 'react';

export default function Page(): ReactElement {
  const [text, setText] = useState<string>('');
  const { TextArea } = Input;

  return (
    <Container sx={{ mt: 5 }}>
      <Row gutter={8}>
        <Col span={24} md={16}>
          <TextArea
            value={text}
            onChange={(event) => {
              setText(event.target.value);
            }}
            autoSize={{ minRows: 7, maxRows: 7 }}
          />
        </Col>

        <Col span={24} md={8}>
          <QRCode value={text || 'toolbox.fanfou.dev'} />
        </Col>
      </Row>
    </Container>
  );
}
