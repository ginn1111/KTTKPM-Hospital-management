import DepartmentTable from '@/components/DepartmentManagement/DepartmentTable';
import Preloader from '@/components/DepartmentManagement/Preloader';
import { getAllDepartment } from '@/libs/department/getAllDepartment';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quản lý phòng ban',
  description: 'Quản lý phòng ban bệnh viện',
};

const DepartmentManagement = async () => {
  const departmentListData = getAllDepartment();
  const departmentList = await departmentListData;

  return (
    <main>
      <Preloader departmentList={departmentList.data} />
      <DepartmentTable />
    </main>
  );
};

export default DepartmentManagement;
