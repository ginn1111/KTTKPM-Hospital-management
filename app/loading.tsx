'use client';

import { Spin } from 'antd';

const Loading = () => {
  return (
    <Spin
      spinning
      className="w-full h-screen overflow-hidden grid place-items-center"
    />
  );
};

export default Loading;
