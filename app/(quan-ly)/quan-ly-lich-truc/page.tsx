import Schedule from '@/components/ScheduleManagement/Schedule';
import { Metadata } from 'next';
import { getAllSchedule } from '@/libs/schedule/getAllSchedule';
import Preloader from '@/components/ScheduleManagement/Preloader';

export const metadata: Metadata = {
  title: 'Quản lý lịch trực',
  description: 'Quản lý lịch trực bệnh viện',
};

const ScheduleManagementPage = async () => {
  const scheduleData = getAllSchedule();
  const scheduleList = await scheduleData;

  return (
    <main className="overflow-y-auto h-full">
      <Preloader scheduleList={scheduleList} />
      <Schedule />
    </main>
  );
};

export default ScheduleManagementPage;
