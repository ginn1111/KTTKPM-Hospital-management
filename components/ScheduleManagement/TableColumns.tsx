import { ShiftIndex } from '@/constants/shiftIndex';
import { centeredColumnsTable } from '@/helper/format';
import { Tag } from 'antd';
import { ColumnsType } from 'antd/es/table';

const RenderEmployee = ({
  employee,
  onClick,
}: {
  employee: { name: string };
  onClick: () => void;
}) => {
  return (
    <Tag
      className="rounded-sm text-[14px] outline-text outline-[2px] outline-offset-2 cursor-pointer"
      color="#3fcf50"
      onClick={onClick}
    >
      {employee?.name}
    </Tag>
  );
};

const TableColumns = ({
  onOpenModalUpdate,
}: {
  onOpenModalUpdate: (record: { name: string; id: string }) => void;
}): ColumnsType<{ name: string; id: string }[]> => {
  return centeredColumnsTable<{ name: string; id: string }[]>({
    centeredColumns: 'all',
    columns: [
      {
        title: 'Ca',
        key: 'shift',
        width: 50,
        render: (_: unknown, _record: unknown, idx: number) => (
          <span>{ShiftIndex[idx]}</span>
        ),
      },
      {
        title: 'Thứ Hai',
        key: '1',
        dataIndex: '1',
        width: 100,
        render: (employee) => {
          return (
            <RenderEmployee
              employee={employee}
              onClick={() => onOpenModalUpdate(employee)}
            />
          );
        },
      },
      {
        title: 'Thứ Ba',
        key: '2',
        dataIndex: '2',
        width: 100,

        render: (employee) => {
          return (
            <RenderEmployee
              employee={employee}
              onClick={() => onOpenModalUpdate(employee)}
            />
          );
        },
      },
      {
        title: 'Thứ Tư',
        key: '3',
        dataIndex: '3',
        width: 100,

        render: (employee) => {
          return (
            <RenderEmployee
              employee={employee}
              onClick={() => onOpenModalUpdate(employee)}
            />
          );
        },
      },
      {
        title: 'Thứ Năm',
        key: '4',
        dataIndex: '4',
        width: 100,

        render: (employee) => {
          return (
            <RenderEmployee
              employee={employee}
              onClick={() => onOpenModalUpdate(employee)}
            />
          );
        },
      },
      {
        title: 'Thứ Sáu',
        key: '5',
        dataIndex: '5',
        width: 100,

        render: (employee) => {
          return (
            <RenderEmployee
              employee={employee}
              onClick={() => onOpenModalUpdate(employee)}
            />
          );
        },
      },
      {
        title: 'Thứ Bảy',
        key: '6',
        dataIndex: '6',
        width: 100,

        render: (employee) => {
          return (
            <RenderEmployee
              employee={employee}
              onClick={() => onOpenModalUpdate(employee)}
            />
          );
        },
      },
      {
        title: 'Chủ Nhật',
        key: '0',
        dataIndex: '0',
        width: 100,

        render: (employee) => {
          return (
            <RenderEmployee
              employee={employee}
              onClick={() => onOpenModalUpdate(employee)}
            />
          );
        },
      },
    ],
  });
};

export default TableColumns;
