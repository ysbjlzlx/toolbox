import React from 'react';
import './App.css';
import {
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Link,
  Typography,
} from '@mui/material';

function App() {
  return (
    <Container style={{marginTop: '64px'}}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                JSON
              </Typography>
              <Typography variant="body2" color="text.secondary">
                JSON(JavaScript Object Notation) 是一种轻量级的数据交换格式。
                易于人阅读和编写。同时也易于机器解析和生成。
              </Typography>
            </CardContent>
            <CardActions>
              <Link href={'/json'}>JSON</Link>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                URL
              </Typography>
              <Typography variant="body2" color="text.secondary">

              </Typography>
            </CardContent>
            <CardActions>
              <Link href={'/url'}>URL</Link>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
