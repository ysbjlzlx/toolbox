'use client';

import { Container } from '@mui/material';
import { Card, Col, Row } from 'antd';
import Link from 'next/link';

import { Application, apps } from '../models/Apps';

const Page = () => {
  const item = ({ applications }: { applications: Application[] }) => {
    return applications.map((application) => {
      return (
        <Col span={8} key={application.name}>
          <Card
            key={application.name}
            title={application.name}
            actions={[
              <Link href={application.href} key="0" prefetch={false}>
                {application.name}
              </Link>,
            ]}
          >
            {application.desc}
          </Card>
        </Col>
      );
    });
  };
  return (
    <Container>
      <Row gutter={[16, 8]}>{item({ applications: apps })}</Row>
    </Container>
  );
};

export default Page;
