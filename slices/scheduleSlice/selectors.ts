import { RootState } from '@/store';
import { createSelector } from '@reduxjs/toolkit';

const scheduleSelector = (state: RootState) => state.schedule;

export const scheduleListSelector = createSelector(
  scheduleSelector,
  (schedule) => {
    const { scheduleList = [] } = schedule ?? {};

    return scheduleList.map((scheduleItem) => {
      const morningSchedule = getScheduleWithShift(
        scheduleItem.schedule,
        'morning'
      );

      const afternoonSchedule = getScheduleWithShift(
        scheduleItem.schedule,
        'afternoon'
      );

      return {
        id: scheduleItem.id,
        departmentName: scheduleItem.department_name,
        schedule: [morningSchedule, afternoonSchedule],
      };
    });
  }
);

export const scheduleLoadingSelector = createSelector(
  scheduleSelector,
  (schedule) => schedule.loading
);

// helpers

const getScheduleWithShift = (schedule: Schedule, shift: ScheduleShift) => {
  return Object.keys(schedule).reduce((acc, key) => {
    const shiftData = schedule[key as ScheduleDate][shift];
    return {
      ...acc,
      [key as ScheduleDate]: shiftData,
    };
  }, {});
};
