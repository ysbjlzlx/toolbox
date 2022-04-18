import React, { FC } from 'react';
import { Grid, Link } from '@mui/material';
import { apps } from '../models/Apps';

const NavBar: FC = () => {
  return (
    <Grid container direction="row" spacing={2}>
      {apps.map((app) => {
        return (
          <Grid item key={app.name}>
            <Link underline="none" title={app.desc} href={app.href}>
              {app.name}
            </Link>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default NavBar;
