import { Icon } from '@iconify/react';
import { FC } from 'react';

interface Props {
  icon: string;
}

const Iconify: FC<Props> = ({ icon }) => {
  return (
    <span role="img" className="anticon">
      <Icon icon={icon} />
    </span>
  );
};

export default Iconify;
