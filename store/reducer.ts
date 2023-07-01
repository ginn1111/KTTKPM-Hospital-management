import templateReducer from '@/slices/templateSlice';
import employeeReducer from '@/slices/employeeSlice';
import departmentReducer from '@/slices/departmentSlice';
import scheduleReducer from '@/slices/scheduleSlice';

const rootReducer = {
  template: templateReducer,
  employee: employeeReducer,
  department: departmentReducer,
  schedule: scheduleReducer,
};

export default rootReducer;
