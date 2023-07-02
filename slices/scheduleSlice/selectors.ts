import { RootState } from '@/store';
import { createSelector } from '@reduxjs/toolkit';

const scheduleSelector = (state: RootState) => state.schedule;

export const scheduleListSelector = createSelector(
  scheduleSelector,
  (schedule) => {
    const { scheduleList = [] } = schedule ?? {};

    const scheduleWeek = getScheduleWeek(scheduleList[0].schedule)

    const _scheduleList = scheduleList.map((scheduleItem) => {
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

    return {
      scheduleList: _scheduleList,
      scheduleWeek,
    }
  }
);

export const scheduleLoadingSelector = createSelector(
  scheduleSelector,
  (schedule) => schedule.loading
);

// helpers

const getScheduleWithShift = (schedule: Schedule, shift: ScheduleShift) => {
  return Object.keys(schedule).reduce((acc, key) => {
    const scheduleDate = schedule[key as ScheduleDate]
    const shiftData = scheduleDate[shift];

    return {
      ...acc,
      [key as ScheduleDate]: shiftData,
    };
  }, {});
};

const getScheduleWeek = (schedule: Schedule) => {
  return Object.keys(schedule).map(key => {
    return schedule[key as ScheduleDate].date
  })
}

