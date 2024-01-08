import { PageContainer } from '@ant-design/pro-components';
import { useLocalStorageState } from 'ahooks';
import * as OTPAuth from 'otpauth';

import AccountList from './AccountList.tsx';
import DetailInfo from './DetailInfo.tsx';
import type { TotpI } from './typings';

const Totp = () => {
  const [totps] = useLocalStorageState<TotpI[]>('totps', { defaultValue: [] });

  console.log(OTPAuth.Secret.fromUTF8('ha'));
  return (
    <PageContainer title={false} className="pt-4">
      <div className="grid grid-cols-3">
        <div className="col-span-1">
          <AccountList totps={totps} />
        </div>
        <div className="col-span-2">
          <DetailInfo />
        </div>
      </div>
    </PageContainer>
  );
};
export default Totp;
