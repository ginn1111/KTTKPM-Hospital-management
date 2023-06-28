import { dateIdx } from '@/constants/dateIdx';
import { genderIdx } from '@/constants/genderIdx';
import { centeredColumnsTable } from '@/helper/format';
import { deleteEmployeeThunk } from '@/slices/employeeSlice';
import { useAppDispatch } from '@/store/hooks';
import {
  DeleteOutlined,
  EditOutlined,
  EllipsisOutlined,
} from '@ant-design/icons';
import { Button, Card, Dropdown, Popconfirm, Tag } from 'antd';
import { ItemType } from 'antd/es/menu/hooks/useItems';
import { ColumnsType } from 'antd/es/table';
import Typography from 'antd/es/typography/Typography';
import dayjs from 'dayjs';
import { MouseEventHandler, useState } from 'react';

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
  onOpenModalUpdate?: (employee: Partial<Employee>) => void;
};

const renderEmployee = (employees: Partial<Employee>[]) => {
  if (!employees?.length) {
    return '';
  }
  return employees.map((employee, idx) => (
    <li key={employee.id ?? idx}>
      <Tag
        className="rounded-sm text-[14px] outline-text outline-[2px] outline-offset-2"
        color="#3fcf50"
      >
        {employee.fullName}
      </Tag>
    </li>
  ));
};

const RenderCell = ({
  employees,
  onClick,
}: {
  employees: Partial<Employee>[];
  onClick: MouseEventHandler<HTMLUListElement>;
}) => {
  return (
    <>
      <ul
        onClick={employees?.length === 2 ? () => {} : onClick}
        className={`space-y-2 ${
          employees?.length === 2 ? 'time-table-disabled' : 'time-table-active'
        }`}
      >
        {renderEmployee(employees)}
      </ul>
    </>
  );
};

const TableColumns = ({
  onOpenModalUpdate,
}: {
  onOpenModalUpdate: (record: Partial<Employee>) => void;
}): ColumnsType<Employee> => {
  const dispatch = useAppDispatch();
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
        title: 'Ca',
        key: 'shift',
        width: 50,
        render: (_: unknown, _record: unknown, idx: number) => (
          <span>Ca {idx + 1}</span>
        ),
      },
      {
        title: 'Thứ Hai',
        key: '0',
        dataIndex: '0',
        width: 100,
        render: (value, record: Partial<Employee>) => (
          <RenderCell {...value} onClick={() => onOpenModalUpdate(record)} />
        ),
      },
      {
        title: 'Thứ Ba',
        key: '1',
        dataIndex: '1',
        width: 100,
        render: (value, record: Partial<Employee>) => (
          <RenderCell {...value} onClick={() => onOpenModalUpdate(record)} />
        ),
      },
      {
        title: 'Thứ Tư',
        key: '2',
        dataIndex: '2',
        width: 100,
        render: (value, record: Partial<Employee>) => (
          <RenderCell {...value} onClick={() => onOpenModalUpdate(record)} />
        ),
      },
      {
        title: 'Thứ Năm',
        key: '3',
        dataIndex: '3',
        width: 100,
        render: (value, record: Partial<Employee>) => (
          <RenderCell {...value} onClick={() => onOpenModalUpdate(record)} />
        ),
      },
      {
        title: 'Thứ Sáu',
        key: '4',
        dataIndex: '4',
        width: 100,
        render: (value, record: Partial<Employee>) => (
          <RenderCell {...value} onClick={() => onOpenModalUpdate(record)} />
        ),
      },
      {
        title: 'Thứ Bảy',
        key: '5',
        dataIndex: '5',
        width: 100,
        render: (value, record: Partial<Employee>) => (
          <RenderCell {...value} onClick={() => onOpenModalUpdate(record)} />
        ),
      },
      {
        title: 'Chủ Nhật',
        key: '6',
        dataIndex: '6',
        width: 100,
        render: (value, record: Partial<Employee>) => (
          <RenderCell {...value} onClick={() => onOpenModalUpdate(record)} />
        ),
      },
    ],
  });
};

export default TableColumns;
