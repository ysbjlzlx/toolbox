'use client';

import BaseLayout from '@/layouts/BaseLayout';
import { FC, ReactNode } from 'react';

const DefaultLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return <BaseLayout>{children}</BaseLayout>;
};

export default DefaultLayout;
