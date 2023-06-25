import templateReducer from '@/slices/templateSlice';
import employeeReducer from '@/slices/employeeSlice';

const rootReducer = {
  template: templateReducer,
  employee: employeeReducer,
};

export default rootReducer;
