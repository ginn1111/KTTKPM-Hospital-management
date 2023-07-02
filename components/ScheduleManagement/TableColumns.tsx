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
  scheduleWeek,
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
        title: (
          <p>
            Thứ Hai <p>{dayjs(scheduleWeek[0]).format('DD/MM/YYYY')}</p>
          </p>
        ),
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
        title: (
          <p>
            Thứ Ba <p>{dayjs(scheduleWeek[1]).format('DD/MM/YYYY')}</p>
          </p>
        ),
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
        title: (
          <p>
            Thứ Tư <p>{dayjs(scheduleWeek[2]).format('DD/MM/YYYY')}</p>
          </p>
        ),
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
        title: (
          <p>
            Thứ Năm <p>{dayjs(scheduleWeek[3]).format('DD/MM/YYYY')}</p>
          </p>
        ),
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
        title: (
          <p>
            Thứ Sáu <p>{dayjs(scheduleWeek[4]).format('DD/MM/YYYY')}</p>
          </p>
        ),
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
        title: (
          <p>
            Thứ Bảy <p>{dayjs(scheduleWeek[5]).format('DD/MM/YYYY')}</p>
          </p>
        ),
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
        title: (
          <p>
            Chủ Nhật <p>{dayjs(scheduleWeek[6]).format('DD/MM/YYYY')}</p>
          </p>
        ),
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
