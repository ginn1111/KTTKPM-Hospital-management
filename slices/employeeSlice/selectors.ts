import { RootState } from '@/store';
import { createSelector } from '@reduxjs/toolkit';

const employeeSelector = (state: RootState) => state.employee;

export const employeeListSelector = createSelector(
  employeeSelector,
  (employee) => employee.employeeList as Employee[]
);

export const employeeTotalSelector = createSelector(
  employeeSelector,
  (employee) => employee.total
);

export const employeeLoadingSelector = createSelector(
  employeeSelector,
  (employee) => employee.loading
);
