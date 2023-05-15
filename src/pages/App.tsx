import { Masonry } from '@mui/lab';
import { Container, Link } from '@mui/material';
import { Card } from 'antd';
import { Link as RouterLink } from 'react-router-dom';

import { Application, apps } from '../models/Apps';
import './App.css';

const App = () => {
  const item = ({ applications }: { applications: Application[] }) => {
    return applications.map((application) => {
      return (
        <Card
          key={application.name}
          title={application.name}
          actions={[
            <Link component={RouterLink} to={application.href} key="0">
              {application.name}
            </Link>,
          ]}
        >
          {application.desc}
        </Card>
      );
    });
  };
  return (
    <Container>
      <Masonry columns={4} spacing={8}>
        {item({ applications: apps })}
      </Masonry>
    </Container>
  );
};

export default App;
