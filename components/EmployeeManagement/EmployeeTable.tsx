'use client';

import { getAllEmployeeThunk } from '@/slices/employeeSlice';
import {
  employeeListSelector,
  employeeTotalSelector,
} from '@/slices/employeeSlice/selectors';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { UserAddOutlined } from '@ant-design/icons';
import { Button, Card, Pagination, Table } from 'antd';
import dynamic from 'next/dynamic';
import TableColumns from './TableColumns';
import useUpdateEmployee from './hooks/useUpdateEmployee';

const ModalUpdateEmployee = dynamic(
  () => import('./Modal/ModalUpdateEmployee')
);

const EmployeeTable = () => {
  const { modalUpdate, isLoading, handleOpen, handleClose, handleOpenAdd } =
    useUpdateEmployee();
  const employeeList = useAppSelector(employeeListSelector);

  const employeeTotal = useAppSelector(employeeTotalSelector);

  const dispatch = useAppDispatch();

  const handleFetchAllEmployee = (paging: Paging) => {
    dispatch(getAllEmployeeThunk(paging));
  };

  return (
    <>
      <Card className="m-2">
        <div className="flex mb-4">
          <Button
            icon={<UserAddOutlined />}
            className="bg-primary mr-auto"
            type="primary"
            onClick={handleOpenAdd}
          >
            Thêm nhân viên
          </Button>
          <Pagination
            total={employeeTotal}
            size="small"
            className="ml-auto"
            pageSizeOptions={[10, 20, 30]}
            defaultPageSize={10}
            showSizeChanger
            onShowSizeChange={(offset: number, limit: number) =>
              handleFetchAllEmployee({ offset, limit })
            }
            onChange={(offset: number, limit: number) => {
              handleFetchAllEmployee({ offset, limit });
            }}
          />
        </div>
        <Table
          loading={isLoading}
          rowKey={(row) => row.id}
          bordered
          pagination={false}
          size="middle"
          dataSource={employeeList}
          columns={TableColumns({ onOpenModalUpdate: handleOpen })}
          scroll={{ x: 1000, y: 'calc(100vh - 248px)' }}
        />
      </Card>
      <ModalUpdateEmployee modal={modalUpdate} onClose={handleClose} />
    </>
  );
};

export default EmployeeTable;
