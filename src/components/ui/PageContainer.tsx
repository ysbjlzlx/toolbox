import { cn } from '@/lib/utils';
import type { ClassValue } from 'clsx';
import type { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: ClassValue;
}

const PageContainer: FC<Props> = ({ children, className = [] }) => {
  return <div className={cn('p-4', className)}>{children}</div>;
};

export default PageContainer;
