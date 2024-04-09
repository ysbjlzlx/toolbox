import Iconify from '@/components/Iconify';
import type { ButtonProps } from 'antd';
import { Button } from 'antd';
import copy from 'copy-to-clipboard';
import type { FC } from 'react';
import React from 'react';

interface Props extends ButtonProps {
  text?: string | null;
  children?: React.ReactNode;
}

const CopyButton: FC<Props> = ({ text, children, ...props }) => {
  const onClick = () => {
    if (text) {
      copy(text);
    }
  };
  return (
    <Button icon={<Iconify icon="material-symbols:content-copy" />} onClick={onClick} {...props}>
      {children}
    </Button>
  );
};

export default CopyButton;
