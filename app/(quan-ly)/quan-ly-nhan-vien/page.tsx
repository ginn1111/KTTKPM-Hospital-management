import EmployeeManagement from '@/components/EmployeeManagement';
import Preloader from '@/components/EmployeeManagement/Preloader';
import { getAllDepartment } from '@/libs/department/getAllDepartment';
import { getAllEmployee } from '@/libs/employee/getAllEmployee';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quản lý nhân viên',
  description: 'Quản lý nhân viên bệnh viện',
};

const EmployeeManagementPage = async () => {
  const employeeListData = getAllEmployee();
  const departmentListData = getAllDepartment();
  const [employeeList, departmentList] = await Promise.all([
    employeeListData,
    departmentListData,
  ]);

  return (
    <main className="h-full overflow-y-auto">
      <Preloader
        totalEmployeeList={employeeList?.total}
        employeeList={employeeList.data}
        departmentList={departmentList}
      />
      <EmployeeManagement />
    </main>
  );
};

export default EmployeeManagementPage;
