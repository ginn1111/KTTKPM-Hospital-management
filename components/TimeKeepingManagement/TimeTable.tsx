'use client';

import { Button, Modal, Popconfirm, Typography } from 'antd';
import { useState } from 'react';
import TableColumns from './TableColumns';
import TimeTableItem from './TimeTableItem';
import timeTable from './time-table.json';

const TimeTable = () => {
  const [isShowConfirm, setIsShowConfirm] = useState(false);
  const [modalUpdate, setModalUpdate] = useState({});
  return (
    <>
      <TimeTableItem
        header={
          <div className="flex mb-4">
            <Typography.Title level={4}>Tuần 1</Typography.Title>

            <Popconfirm
              okText="Xác nhận"
              cancelText="Huỷ"
              placement="left"
              onCancel={() => setIsShowConfirm(false)}
              okButtonProps={{ className: 'bg-primary', type: 'primary' }}
              open={isShowConfirm}
              title={`Bạn muốn tạo lịch trực cho tháng mới? (tháng ${
                new Date().getMonth() + 2
              })`}
            >
              <Button
                className="bg-primary ml-auto"
                type="primary"
                onClick={() => setIsShowConfirm(true)}
              >
                Tạo lịch trực
              </Button>
            </Popconfirm>
          </div>
        }
        scroll={{ x: 1000 }}
        dataSource={timeTable.week1 as any[]}
        columns={TableColumns({ onOpenModalUpdate: setModalUpdate })}
      />
      <TimeTableItem
        header={<Typography.Title level={4}>Tuần 2</Typography.Title>}
        dataSource={timeTable.week1 as any[]}
        columns={TableColumns({ onOpenModalUpdate: setModalUpdate })}
      />
      <TimeTableItem
        header={<Typography.Title level={4}>Tuần 3</Typography.Title>}
        dataSource={timeTable.week1 as any[]}
        columns={TableColumns({ onOpenModalUpdate: setModalUpdate })}
      />
      <TimeTableItem
        header={<Typography.Title level={4}>Tuần 4</Typography.Title>}
        dataSource={timeTable.week1 as any[]}
        columns={TableColumns({ onOpenModalUpdate: setModalUpdate })}
      />
      <Modal
        open={!!Object.keys(modalUpdate).length}
        onCancel={() => setModalUpdate({})}
        okButtonProps={{ className: 'bg-primary', type: 'primary' }}
        okText="Xác nhận"
        cancelText="Huỷ"
        title="Quản lý lịch trực"
      >
        <p>{JSON.stringify(modalUpdate)}</p>
      </Modal>
    </>
  );
};

export default TimeTable;
