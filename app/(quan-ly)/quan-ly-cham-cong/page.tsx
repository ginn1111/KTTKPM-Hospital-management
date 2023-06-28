import TimeTable from '@/components/TimeKeepingManagement/TimeTable';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quản lý chấm công',
  description: 'Quản lý chấm công bệnh viện',
};

const TimeKeepingManagementPage = () => {
  return (
    <main className="overflow-y-auto h-full">
      <TimeTable />
    </main>
  );
};

export default TimeKeepingManagementPage;
