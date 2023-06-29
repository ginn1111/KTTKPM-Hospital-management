import { genderIdx } from '@/constants/genderIdx';
import { centeredColumnsTable } from '@/helper/format';
import { departmentIndexSelector } from '@/slices/departmentSlice/selectors';
import { deleteEmployeeThunk } from '@/slices/employeeSlice';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import {
  EditOutlined,
  DeleteOutlined,
  EllipsisOutlined,
} from '@ant-design/icons';
import { Button, Dropdown, Popconfirm } from 'antd';
import { ItemType } from 'antd/es/menu/hooks/useItems';
import { ColumnsType } from 'antd/es/table';
import dayjs from 'dayjs';
import { useState } from 'react';

const generateDropdownMenu = (
  setDeleteConfirm: () => void,
  openModalUpdate: () => void
): ItemType[] => [
  {
    key: 'update',
    label: (
      <Button
        className="w-full text-start"
        icon={<EditOutlined className="mr-2" />}
        size="small"
        type="ghost"
        onClick={openModalUpdate}
      >
        Cập nhật
      </Button>
    ),
  },
  {
    key: 'delete',
    label: (
      <Button
        className="w-full text-start"
        icon={<DeleteOutlined className="mr-2" />}
        onClick={setDeleteConfirm}
        size="small"
        type="ghost"
      >
        Xoá
      </Button>
    ),
  },
];

type TableColumnsProps = {
  onOpenModalUpdate: (employee: Partial<Employee>) => void;
};

const TableColumns = ({
  onOpenModalUpdate,
}: TableColumnsProps): ColumnsType<Employee> => {
  const dispatch = useAppDispatch();
  const departmentIdx = useAppSelector(departmentIndexSelector);
  const [deleteConfirm, setDeleteConfirm] = useState<{
    id: string | null;
    open: boolean;
  }>({
    id: null,
    open: false,
  });

  const handleDeleteEmployee = (employeeId: string) => {
    dispatch(deleteEmployeeThunk(employeeId));
    setDeleteConfirm({ open: false, id: null });
  };

  return centeredColumnsTable<Employee>({
    centeredColumns: 'all',
    columns: [
      {
        title: 'STT',
        key: 'stt',
        width: 50,
        render: (_: unknown, _record: unknown, idx: number) => (
          <span>{idx + 1}</span>
        ),
      },
      {
        title: 'Họ và tên',
        key: 'fullName',
        dataIndex: 'fullName',
      },
      {
        title: 'Giới tính',
        key: 'gender',
        dataIndex: 'gender',
        width: 50,
        render: (gender: number) => <p>{genderIdx[gender]}</p>,
      },
      {
        title: 'Ngày sinh',
        key: 'dateOfBirdth',
        dataIndex: 'dateOfBirdth',
        render: (dateOfBirth: string) => (
          <span>{dayjs(dateOfBirth).format('DD-MM-YYYY')}</span>
        ),
      },
      {
        title: 'Phòng ban',
        key: 'departmentId',
        dataIndex: 'departmentId',
        render: (departmentId: string) => <p>{departmentIdx[departmentId]}</p>,
      },
      {
        title: 'Địa chỉ',
        key: 'address',
        dataIndex: 'address',
      },
      {
        title: 'Thao tác',
        key: 'edit',
        fixed: 'right',
        width: 100,
        render: (_: unknown, record) => {
          return (
            <Popconfirm
              placement="leftTop"
              open={deleteConfirm.open && record.id === deleteConfirm.id}
              title="Bạn có muốn xoá nhân viên này?"
              onCancel={() => setDeleteConfirm({ open: false, id: null })}
              onConfirm={() => handleDeleteEmployee(record.id)}
              cancelText="Huỷ"
              okText="Xác nhận"
              okButtonProps={{ className: 'bg-primary' }}
            >
              <Dropdown
                menu={{
                  items: generateDropdownMenu(
                    () => setDeleteConfirm({ id: record.id, open: true }),
                    () => onOpenModalUpdate(record)
                  ),
                }}
                trigger={['click']}
                placement="bottomRight"
              >
                <EllipsisOutlined className="cursor-pointer" />
              </Dropdown>
            </Popconfirm>
          );
        },
      },
    ],
  });
};

export default TableColumns;
