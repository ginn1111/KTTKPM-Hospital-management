'use client';

import { Alert } from 'antd';
import { useEffect } from 'react';

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return <Alert message={error.message} onClick={reset} />;
};

export default Error;
