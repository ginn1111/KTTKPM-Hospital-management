'use client';
import store from '@/store';
import { ConfigProvider } from 'antd';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';

const defaultData = {
  borderRadius: 4,
  colorPrimary: '#54d463',
  colorText: '#09250c',
  colorBackground: '#effbf0',
  accent: '#d7feec',
};

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: defaultData.colorPrimary,
          colorBgBase: defaultData.colorBackground,
          colorBorder: defaultData.colorPrimary,
          controlItemBgActive: defaultData.accent,
          borderRadius: defaultData.borderRadius,
        },
      }}
    >
      <Provider store={store}>{children}</Provider>
    </ConfigProvider>
  );
};

export default Providers;
