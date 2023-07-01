'use client';

import { actions } from '@/slices/scheduleSlice';
import store from '@/store';
import { useRef } from 'react';

const Preloader = ({ scheduleList }: { scheduleList: ScheduleItem[] }) => {
  const isLoading = useRef(false);
  if (!isLoading.current) {
    store.dispatch(
      actions.setScheduleList({
        scheduleList,
      })
    );
  }

  return <></>;
};

export default Preloader;
