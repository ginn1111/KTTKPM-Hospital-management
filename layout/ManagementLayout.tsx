'use client';
import { ReactNode } from 'react';
import { Avatar, Dropdown, Layout } from 'antd';
import { ItemType } from 'antd/es/menu/hooks/useItems';
import { useRouter } from 'next/navigation';
import Sidebar from './Sidebar';
const { Content, Header } = Layout;

const generateMenu = (router: ReturnType<typeof useRouter>): ItemType[] => [
  {
    key: 'thong-tin',
    label: 'Thông tin',
  },
  {
    key: 'dang-xuat',
    label: 'Đăng xuất',
    onClick: () => {
      router.replace('/');
    },
  },
];

const ManagementLayout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  return (
    <Layout style={{ height: '100vh' }}>
      <Header className="bg-background">
        <div className="flex items-center justify-space-between">
          <h1 className="mb-0 text-center font-semibold text-text text-[24px]">
            Quản lý bệnh viện
          </h1>
          <Dropdown
            menu={{ items: generateMenu(router) }}
            trigger={['click']}
            className="cursor-pointer"
          >
            <Avatar size="large" className="ml-auto">
              QL
            </Avatar>
          </Dropdown>
        </div>
      </Header>
      <Layout style={{ height: '100vh' }}>
        <Sidebar className="side-bar" style={{ height: '100%' }} />
        <Content>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default ManagementLayout;
