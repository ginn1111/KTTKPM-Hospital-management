'use client';

import { Button, Card, Pagination, Table } from 'antd';
import TableColumns from './TableColumns';
// import useUpdateDepartment from './hooks/useUpdateDepartment';
import { UserAddOutlined } from '@ant-design/icons';
import dynamic from 'next/dynamic';
import { departmentListSelector } from '@/slices/departmentSlice/selectors';
import { useAppSelector } from '@/store/hooks';

// const ModalUpdateDepartment = dynamic(
//   () => import('./Modal/ModalUpdateDepartment')
// );

const DepartmentTable = () => {
  // const { modalUpdate, isLoading, handleOpen, handleClose, handleOpenAdd } =
  //   useUpdateDepartment();
  const departmentList = useAppSelector(departmentListSelector);

  return (
    <>
      <Card className="m-2">
        <div className="flex mb-4">
          <Button
            icon={<UserAddOutlined />}
            className="bg-primary mr-auto"
            type="primary"
            // onClick={handleOpenAdd}
          >
            Thêm phòng ban
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
          // loading={isLoading}
          rowKey={(row) => row.id}
          bordered
          pagination={false}
          size="middle"
          dataSource={departmentList}
          columns={TableColumns({})}
          scroll={{ x: 1000 }}
        />
      </Card>
      {/* <ModalUpdateDepartment modal={modalUpdate} onClose={handleClose} /> */}
    </>
  );
};

export default DepartmentTable;
