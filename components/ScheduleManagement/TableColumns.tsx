import { ShiftIndex } from '@/constants/shiftIndex';
import { centeredColumnsTable } from '@/helper/format';
import { Tag } from 'antd';
import { ColumnsType } from 'antd/es/table';
import dayjs from 'dayjs';

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
scheduleWeek
}: {
  onOpenModalUpdate: (record: { name: string; id: string }) => void;
  scheduleWeek: string[];
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
        title: <p>Thứ Hai {dayjs(scheduleWeek[0]).format('DD/MM/YYYY')}</p>,
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
        title: <p>Thứ Ba {dayjs(scheduleWeek[1]).format('DD/MM/YYYY')}</p>,
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
        title: <p>Thứ Tư {dayjs(scheduleWeek[2]).format('DD/MM/YYYY')}</p>,
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
        title: <p>Thứ Năm {dayjs(scheduleWeek[3]).format('DD/MM/YYYY')}</p>,
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
        title: <p>Thứ Sáu {dayjs(scheduleWeek[4]).format('DD/MM/YYYY')}</p>,
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
        title: <p>Thứ Bảy {dayjs(scheduleWeek[5]).format('DD/MM/YYYY')}</p>,
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
        title: <p>Thứ Nhật {dayjs(scheduleWeek[6]).format('DD/MM/YYYY')}</p>,
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
