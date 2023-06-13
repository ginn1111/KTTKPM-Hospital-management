import { Provider } from 'react-redux';
import store from '@/store';
import { ReactNode } from 'react';

const RootProvider = ({ children }: { children: ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default RootProvider;
