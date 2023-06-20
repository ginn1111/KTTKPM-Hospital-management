import { ReactNode } from 'react';
import ManagementLayout from '@/layout/ManagementLayout';

const Layout = ({ children }: { children: ReactNode }) => {
  return <ManagementLayout>{children}</ManagementLayout>;
};

export default Layout;
