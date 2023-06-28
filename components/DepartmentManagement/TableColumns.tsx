import { centeredColumnsTable } from '@/helper/format';
import { useAppDispatch } from '@/store/hooks';
import {
  EditOutlined,
  DeleteOutlined,
  EllipsisOutlined,
} from '@ant-design/icons';
import { Button, Dropdown, Popconfirm } from 'antd';
import { ItemType } from 'antd/es/menu/hooks/useItems';
import { ColumnsType } from 'antd/es/table';
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
  onOpenModalUpdate?: (department: Partial<Department>) => void;
};

const TableColumns = ({
  onOpenModalUpdate,
}: TableColumnsProps): ColumnsType<Department> => {
  const dispatch = useAppDispatch();
  const [deleteConfirm, setDeleteConfirm] = useState<{
    id: number | null;
    open: boolean;
  }>({
    id: null,
    open: false,
  });

  // const handleDeleteDepartment = (departmentId: string) => {
  //   dispatch(deleteDepartmentThunk(departmentId));
  //   setDeleteConfirm({ open: false, id: null });
  // };

  return centeredColumnsTable<Department>({
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
        title: 'Tên phòng ban',
        key: 'departmentName',
        dataIndex: 'departmentName',
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
              // onConfirm={() => handleDeleteDepartment(record.id)}
              cancelText="Huỷ"
              okText="Xác nhận"
              okButtonProps={{ className: 'bg-primary' }}
            >
              <Dropdown
                menu={{
                  items: generateDropdownMenu(
                    () => setDeleteConfirm({ id: record.id, open: true }),
                    () => onOpenModalUpdate?.(record)
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
