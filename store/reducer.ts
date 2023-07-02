import departmentReducer from '@/slices/departmentSlice';
import employeeReducer from '@/slices/employeeSlice';
import scheduleReducer from '@/slices/scheduleSlice';

const rootReducer = {
  employee: employeeReducer,
  department: departmentReducer,
  schedule: scheduleReducer,
};

export default rootReducer;
