import templateReducer from '@/slices/templateSlice';
import employeeReducer from '@/slices/employeeSlice';
import departmentReducer from '@/slices/departmentSlice';

const rootReducer = {
  template: templateReducer,
  employee: employeeReducer,
  department: departmentReducer,
};

export default rootReducer;
