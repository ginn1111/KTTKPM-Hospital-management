'use client';

import { actions as employeeActions } from '@/slices/employeeSlice';
import { actions as departmentActions } from '@/slices/departmentSlice';
import store from '@/store';
import { useRef } from 'react';

const Preloader = ({
  employeeList,
  departmentList,
}: {
  employeeList: Employee[];
  departmentList: Department[];
}) => {
  const isLoading = useRef(false);
  if (!isLoading.current) {
    store.dispatch(employeeActions.setEmployeeList({ employeeList }));
    store.dispatch(departmentActions.setDepartmentList({ departmentList }));
  }

  return <></>;
};

export default Preloader;
