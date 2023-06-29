'use client';

import { actions as employeeActions } from '@/slices/employeeSlice';
import { actions as departmentActions } from '@/slices/departmentSlice';
import store from '@/store';
import { useRef } from 'react';

const Preloader = ({
  employeeList,
  totalEmployeeList,
  departmentList,
}: {
  employeeList: Employee[];
  totalEmployeeList?: number;
  departmentList: Department[];
}) => {
  const isLoading = useRef(false);
  if (!isLoading.current) {
    store.dispatch(
      employeeActions.setEmployeeList({
        employeeList,
        total: totalEmployeeList ?? 10,
      })
    );
    store.dispatch(departmentActions.setDepartmentList({ departmentList }));
  }

  return <></>;
};

export default Preloader;
