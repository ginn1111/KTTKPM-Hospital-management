'use client';

import { actions as departmentActions } from '@/slices/departmentSlice';
import store from '@/store';
import { useRef } from 'react';

const Preloader = ({ departmentList }: { departmentList: Department[] }) => {
  const isLoading = useRef(false);
  if (!isLoading.current) {
    store.dispatch(departmentActions.setDepartmentList({ departmentList }));
  }

  return <></>;
};

export default Preloader;
