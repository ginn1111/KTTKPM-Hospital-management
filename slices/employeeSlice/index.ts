import { createEmployee } from '@/libs/employee/createEmployee';
import { deleteEmployee } from '@/libs/employee/deleteEmployee';
import { getAllEmployee } from '@/libs/employee/getAllEmployee';
import { updateEmployee } from '@/libs/employee/updateEmployee';
import {
  PayloadAction,
  createAsyncThunk,
  createSlice,
  isFulfilled,
  isPending,
} from '@reduxjs/toolkit';
import { notification } from 'antd';

interface IEmployeeSlice {
  loading: boolean;
  employeeList: Partial<Employee>[];
  total?: number;
}
const INITIAL_STATE: IEmployeeSlice = {
  employeeList: [],
  loading: false,
};

export const deleteEmployeeThunk = createAsyncThunk(
  'delete-employee-thunk',
  async (employeeId: string, thunkAPI) => {
    try {
      const deleteEmployeeData = deleteEmployee(employeeId);
      const employeeListData = getAllEmployee();

      const [deleteResponse, employeeList] = await Promise.all([
        deleteEmployeeData,
        employeeListData,
      ]);

      console.log(deleteResponse);

      return { employeeList };
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue((error as Error).message);
    }
  }
);

export const getAllEmployeeThunk = createAsyncThunk(
  'employee-get-all-thunk',
  async (paging: Paging, thunkAPI) => {
    try {
      const employeeList = await getAllEmployee(paging);
      return {
        employeeList,
      };
    } catch (error) {
      thunkAPI.rejectWithValue((error as Error).message);
    }
  }
);

export const addNewEmployeeThunk = createAsyncThunk(
  'employee-add-thunk',
  async (employee: Partial<Employee>, thunkAPI) => {
    try {
      const _employee = await createEmployee(employee);
      return {
        employee: _employee,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue((error as Error).message);
    }
  }
);

export const updateEmployeeThunk = createAsyncThunk(
  'employee-update-thunk',
  async (employee: Partial<Employee>, thunkAPI) => {
    try {
      const _employee = await updateEmployee(employee);
      return {
        employee: _employee,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue((error as Error).message);
    }
  }
);

const employeeSlice = createSlice({
  name: 'employee',
  initialState: INITIAL_STATE,
  reducers: {
    setEmployeeList: (
      state,
      action: PayloadAction<{ employeeList: Employee[]; total: number }>
    ) => {
      state.employeeList = action.payload.employeeList;
      state.total = action.payload.total;
    },
  },
  extraReducers: (_builder) => {
    _builder.addCase(
      updateEmployeeThunk.fulfilled,
      (state, action: PayloadAction<{ employee: Employee }>) => {
        state.loading = false;
        const idxEmployee = state.employeeList.findIndex(
          (employee) => employee.id === action.payload.employee.id
        );
        if (idxEmployee !== -1) {
          state.employeeList[idxEmployee] = action.payload.employee;
        }
      }
    );
    _builder.addCase(getAllEmployeeThunk.fulfilled, (state, action) => {
      state.loading = false;
      Object.assign(state, {
        loading: false,
        total: action.payload?.employeeList.total,
        employeeList: action.payload?.employeeList?.data,
      });
    });
    _builder.addCase(updateEmployeeThunk.rejected, (state) => {
      state.loading = false;
      notification.error({
        message: 'Cập nhật nhân viên không thành công!',
      });
    });
    _builder.addCase(
      addNewEmployeeThunk.fulfilled,
      (state, action: PayloadAction<{ employee: Employee }>) => {
        state.loading = false;
        state.employeeList.push(action.payload.employee);
      }
    );
    _builder.addCase(addNewEmployeeThunk.rejected, (state) => {
      state.loading = false;
      notification.error({
        message: 'Thêm nhân viên không thành công!',
      });
    });
    _builder.addCase(deleteEmployeeThunk.rejected, (state) => {
      state.loading = false;
      notification.error({
        message: 'Xoá nhân viên không thành công!',
      });
    });
    _builder.addMatcher(
      isPending(
        deleteEmployeeThunk,
        getAllEmployeeThunk,
        addNewEmployeeThunk,
        updateEmployeeThunk
      ),
      (state) => {
        state.loading = true;
      }
    );
    _builder.addMatcher(
      isFulfilled(deleteEmployeeThunk, getAllEmployeeThunk),
      (state, action) => {
        state.loading = false;
        state.employeeList = action.payload?.employeeList.data ?? [];
      }
    );
  },
});

export default employeeSlice.reducer;
export const actions = { ...employeeSlice.actions };
