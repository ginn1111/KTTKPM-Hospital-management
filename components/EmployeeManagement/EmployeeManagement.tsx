'use client';

import { Card, Pagination, Table } from 'antd';
import TableColumns from './TableColumns';
import Filter from './Filter';

const MOCK_DATA: Employee[] = [
  {
    id: 'E1',
    fullName: 'Employee 1',
    gender: 'female',
    dateOfBirth: new Date(2000, 10, 1).toISOString(),
    address: '97 Man thiện',
    department: 'IT',
    position: 'Bác sĩ',
    title: 'Bác sĩ bậc 2',
  },
  {
    id: 'E2',
    fullName: 'Employee 2',
    gender: 'female',
    dateOfBirth: new Date(2000, 10, 1).toISOString(),
    address: '97 Man thiện',
    department: 'IT',
    position: 'Bác sĩ',
    title: 'Bác sĩ bậc 2',
  },
  {
    id: 'E3',
    fullName: 'Employee 3',
    gender: 'female',
    dateOfBirth: new Date(2000, 1, 1).toISOString(),
    address: '97 Man thiện',
    department: 'IT',
    position: 'Bác sĩ',
    title: 'Bác sĩ bậc 2',
  },
];

const EmployeeManagement = () => {
  return (
    <>
      <Card className="m-2">
        <Filter />
      </Card>
      <Card className="m-2">
        <Table
          bordered
          pagination={false}
          size="middle"
          dataSource={MOCK_DATA}
          columns={TableColumns()}
        />
        <div className="flex mt-4">
          <Pagination
            size="small"
            className="ml-auto"
            pageSizeOptions={[10, 20, 30]}
            defaultPageSize={10}
            showSizeChanger
          />
        </div>
      </Card>
    </>
  );
};

export default EmployeeManagement;
