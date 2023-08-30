import type { FC } from 'react';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

const ImageWrapper: FC<Props> = ({ children }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'inherit',
      }}
    >
      {children}
    </div>
  );
};
export default ImageWrapper;
