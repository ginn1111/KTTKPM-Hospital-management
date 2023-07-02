export const SCHEDULE_BASE_URL = `${process.env.NEXT_PUBLIC_BASE_URL}/schedule`;

export const getAllSchedule = async (): Promise<ScheduleItem[]> => {
  const response = await fetch(SCHEDULE_BASE_URL as string, {
    cache: 'no-store'
  });
  if (!response.ok) {
    throw new Error('Get all timetable failed');
  }

  return response.json();
};
