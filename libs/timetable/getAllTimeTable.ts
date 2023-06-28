export const TIME_TABLE_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const getAllTimeTable = async () => {
  const response = await fetch(TIME_TABLE_BASE_URL as string);
  if (!response.ok) {
    throw new Error('Get all timetable failed');
  }

  return response.json();
};
