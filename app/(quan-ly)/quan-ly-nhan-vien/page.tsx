import EmployeeManagement from '@/components/EmployeeManagement';
import { getAllEmployee } from '@/libs/employee/getAllEmployee';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quản lý nhân viên',
  description: 'Quản lý nhân viên bệnh viện',
};

const EmployeeManagementPage = async () => {
  const employeeListData = getAllEmployee();
  const employeeList: Employee[] = await employeeListData;

  return <EmployeeManagement employeeList={employeeList} />;
};

export default EmployeeManagementPage;
