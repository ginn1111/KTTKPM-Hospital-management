import { Card, Table, TableProps } from 'antd';
import { ReactNode } from 'react';

type TimeTableItemProps = {
  header?: ReactNode | JSX.Element;
} & TableProps<{ name: string; id: string }>;

const TimeTableItem = ({ header, ...rest }: TimeTableItemProps) => {
  return (
    <Card className="m-2">
      {header}
      <Table
        bordered
        pagination={false}
        size="middle"
        scroll={{ x: 1000 }}
        {...rest}
      />
    </Card>
  );
};

export default TimeTableItem;
