import { Layout, Menu, MenuProps, SiderProps } from 'antd';
import { FieldTimeOutlined, UserOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

const { Sider } = Layout;

const ITEMS: MenuProps['items'] = [
  {
    key: '/quan-ly-nhan-vien',
    label: 'Quản lý nhân viên',
    icon: <UserOutlined />,
    className: 'flex',
  },
  {
    key: '/quan-ly-cham-cong',
    label: 'Quản lý chấm công',
    icon: <FieldTimeOutlined />,
  },
];

type SidebarProps = {} & SiderProps;

const Sidebar = (props: SidebarProps) => {
  const pathname = usePathname();
  const router = useRouter();
  const handleItemClick: MenuProps['onClick'] = ({ key }) => {
    router.push(key);
  };
  return (
    <Sider {...props} collapsible>
      <Menu
        mode="inline"
        onClick={handleItemClick}
        items={ITEMS}
        selectedKeys={[pathname]}
      />
    </Sider>
  );
};

export default Sidebar;
