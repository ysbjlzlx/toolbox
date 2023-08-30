import { Container } from '@mui/system';
import { Card, Col, Row } from 'antd';
import { Link } from 'react-router-dom';

import type { Application } from '@/models/Apps.tsx';
import { apps } from '@/models/Apps.tsx';

const Page = () => {
  const item = ({ applications }: { applications: Application[] }) => {
    return applications.map((application) => {
      return (
        <Col span={8} key={application.name}>
          <Card
            key={application.name}
            title={application.name}
            actions={[
              <Link to={application.href} key="0">
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
