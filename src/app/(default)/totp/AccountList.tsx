'use client';

import { Box } from '@mui/system';
import { List } from 'antd';
import { TotpI } from './typings';

interface Props {
  totps?: TotpI[];
}

const AccountList = ({ totps }: Props) => {
  return (
    <Box>
      <List>
        {totps?.map((totp) => {
          return <List.Item key={totp.secretKey}></List.Item>;
        })}
      </List>
    </Box>
  );
};

export default AccountList;
