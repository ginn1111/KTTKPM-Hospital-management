import { SlidersOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Menu, MenuProps, SiderProps } from 'antd';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const FieldTimeOutlined = dynamic(
  () => import('@ant-design/icons/FieldTimeOutlined'),
  { ssr: false }
);

const { Sider } = Layout;

const ITEMS: MenuProps['items'] = [
  {
    key: '/quan-ly-nhan-vien',
    label: <Link href="/quan-ly-nhan-vien">Quản lý nhân viên</Link>,
    icon: <UserOutlined />,
  },
  {
    key: '/quan-ly-cham-cong',
    label: <Link href="/quan-ly-cham-cong">Quản lý chấm công</Link>,
    icon: <FieldTimeOutlined />,
  },
  {
    key: '/quan-ly-phong-ban',
    label: <Link href="/quan-ly-phong-ban">Quản lý phòng ban</Link>,
    icon: <SlidersOutlined />,
  },
];

type SidebarProps = {} & SiderProps;

const Sidebar = (props: SidebarProps) => {
  const pathname = usePathname();

  return (
    <Sider {...props} collapsible>
      <Menu mode="inline" items={ITEMS} selectedKeys={[pathname]} />
    </Sider>
  );
};

export default Sidebar;
