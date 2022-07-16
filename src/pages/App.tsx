import { Card, CardActions, CardContent, Container, Grid, Link, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import './App.css';

import { Application, apps } from '../models/Apps';

const App = () => {
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
        {item({ applications: apps })}
      </Grid>
    </Container>
  );
};

export default App;
