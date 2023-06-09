'use client';

import { Box, List, ListItem, ListItemText } from '@mui/material';
import { TotpI } from './typings';

interface Props {
  totps?: TotpI[];
}

const AccountList = ({ totps }: Props) => {
  return (
    <Box>
      <List>
        {totps?.map((totp) => {
          return (
            <ListItem key={totp.secretKey}>
              <ListItemText>ha</ListItemText>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default AccountList;
