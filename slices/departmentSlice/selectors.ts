import { RootState } from '@/store';
import { createSelector } from '@reduxjs/toolkit';

const departmentSelector = (state: RootState) => state.department;

export const departmentListSelector = createSelector(
  departmentSelector,
  (department) => department.departmentList as Department[]
);

export const departmentLoadingSelector = createSelector(
  departmentSelector,
  (department) => department.loading
);

export const departmentIndexSelector = createSelector(
  departmentListSelector,
  (departmentList): { [k: string]: string } => {
    if (departmentList?.length) {
      return departmentList.reduce(
        (index, department) => ({
          ...index,
          [department.id]: department.departmentName,
        }),
        {}
      );
    }

    return {};
  }
);
