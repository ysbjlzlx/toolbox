import { List } from 'antd';
import type { TotpI } from './typings';

interface Props {
  totps?: TotpI[];
}

const AccountList = ({ totps }: Props) => {
  return (
    <div>
      <List>
        {totps?.map((totp) => {
          return <List.Item key={totp.secretKey} />;
        })}
      </List>
    </div>
  );
};

export default AccountList;
