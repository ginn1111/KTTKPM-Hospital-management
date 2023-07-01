import { getAllDepartment } from '@/libs/department/getAllDepartment';
import { createDepartment } from '@/libs/department/createDepartment';
import {
  PayloadAction,
  createAsyncThunk,
  createSlice,
  isPending,
} from '@reduxjs/toolkit';
import { notification } from 'antd';

interface IDepartment {
  loading: boolean;
  departmentList: Partial<Department>[];
}
const INITIAL_STATE: IDepartment = {
  departmentList: [],
  loading: false,
};

export const getAllDepartmentThunk = createAsyncThunk(
  'department-get-all-thunk',
  async (_, thunkAPI) => {
    try {
      const departmentList = await getAllDepartment();
      return {
        departmentList,
      };
    } catch (error) {
      thunkAPI.rejectWithValue((error as Error).message);
    }
  }
);

export const addNewDepartmentThunk = createAsyncThunk(
  'department-add-thunk',
  async (department: Partial<Department>, thunkAPI) => {
    try {
      const _department = await createDepartment(department);
      return {
        department: _department,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue((error as Error).message);
    }
  }
);

const departmentSlice = createSlice({
  name: 'department',
  initialState: INITIAL_STATE,
  reducers: {
    setDepartmentList: (
      state,
      action: PayloadAction<{ departmentList: Department[] }>
    ) => {
      state.departmentList = action.payload.departmentList;
    },
  },
  extraReducers: (_builder) => {
    _builder.addCase(
      addNewDepartmentThunk.fulfilled,
      (state, action: PayloadAction<{ department: Department }>) => {
        state.loading = false;
        state.departmentList.push(action.payload.department);
      }
    );
    _builder.addCase(addNewDepartmentThunk.rejected, (state) => {
      state.loading = false;
      notification.error({
        message: 'Thêm nhân viên không thành công!',
      });
    });
    _builder.addMatcher(
      isPending(getAllDepartmentThunk, addNewDepartmentThunk),
      (state) => {
        state.loading = true;
      }
    );
  },
});

export default departmentSlice.reducer;
export const actions = { ...departmentSlice.actions };
