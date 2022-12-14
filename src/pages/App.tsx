import { Masonry } from '@mui/lab';
import { Card, CardActions, CardContent, Container, Link, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

import { Application, apps } from '../models/Apps';
import './App.css';

const App = () => {
  const item = ({ applications }: { applications: Application[] }) => {
    return applications.map((application) => {
      return (
        <Card key={application.name}>
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
      );
    });
  };
  return (
    <Container style={{ marginTop: '64px' }}>
      <Masonry columns={4} spacing={8}>
        {item({ applications: apps })}
      </Masonry>
    </Container>
  );
};

export default App;
