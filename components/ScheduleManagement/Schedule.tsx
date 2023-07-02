'use client';

import { scheduleListSelector } from '@/slices/scheduleSlice/selectors';
import { useAppSelector } from '@/store/hooks';
import { Modal, Typography } from 'antd';
import { useState } from 'react';
import TableColumns from './TableColumns';
import TimeTableItem from './TimeTableItem';
//  header={
//           <div className="flex mb-4">
//             <Typography.Title level={4}>Tuần 1</Typography.Title>

//             <Popconfirm
//               okText="Xác nhận"
//               cancelText="Huỷ"
//               placement="left"
//               onCancel={() => setIsShowConfirm(false)}
//               okButtonProps={{ className: 'bg-primary', type: 'primary' }}
//               open={isShowConfirm}
//               title={`Bạn muốn tạo lịch trực cho tháng mới? (tháng ${
//                 new Date().getMonth() + 2
//               })`}
//             >
//               <Button
//                 className="bg-primary ml-auto"
//                 type="primary"
//                 onClick={() => setIsShowConfirm(true)}
//               >
//                 Tạo lịch trực
//               </Button>
//             </Popconfirm>
//           </div>
//         }

const Schedule = () => {
  const [modalUpdate, setModalUpdate] = useState<
    { id: string; name: string } | undefined
  >();
  const scheduleObject = useAppSelector(scheduleListSelector);

  return (
    <>
      {scheduleObject.scheduleList.map((scheduleItem) => {
        return (
          <>
            <TimeTableItem
              header={
                <Typography.Title level={5} className="mb-4">
                  {scheduleItem.departmentName}
                </Typography.Title>
              }
              key={scheduleItem.id}
              scroll={{ x: 1000 }}
              dataSource={scheduleItem.schedule as any}
              columns={
                TableColumns({ onOpenModalUpdate: setModalUpdate, scheduleWeek: scheduleObject.scheduleWeek }) as any
              }
              rowKey={(row) => row.id}
            />
          </>
        );
      })}

      <Modal
        open={!!Object.keys(modalUpdate ?? {}).length}
        onCancel={() => setModalUpdate(undefined)}
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

export default Schedule;
