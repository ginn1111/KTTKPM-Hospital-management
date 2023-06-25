'use client';

import { Button, Card, Pagination, Table } from 'antd';
import TableColumns from './TableColumns';
import useUpdateEmployee from './hooks/useUpdateEmployee';
import { UserAddOutlined } from '@ant-design/icons';
import dynamic from 'next/dynamic';
import { employeeListSelector } from '@/slices/employeeSlice/selectors';
import { useAppSelector } from '@/store/hooks';

const ModalUpdateEmployee = dynamic(
  () => import('./Modal/ModalUpdateEmployee'),
  { ssr: false }
);

type EmployeeTableProps = {
  employeeList: Employee[];
};

const EmployeeTable = ({ employeeList }: EmployeeTableProps) => {
  const { modalUpdate, isLoading, handleOpen, handleClose, handleOpenAdd } =
    useUpdateEmployee();
  // const employeeList = useAppSelector(employeeListSelector);

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
            size="small"
            className="ml-auto"
            pageSizeOptions={[10, 20, 30]}
            defaultPageSize={10}
            showSizeChanger
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
          scroll={{ x: 1000 }}
        />
      </Card>
      <ModalUpdateEmployee modal={modalUpdate} onClose={handleClose} />
    </>
  );
};

export default EmployeeTable;
