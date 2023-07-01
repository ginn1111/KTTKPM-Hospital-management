import {
  PayloadAction,
  createAsyncThunk,
  createSlice,
  isPending,
} from '@reduxjs/toolkit';
import { getAllSchedule } from '@/libs/schedule/getAllSchedule';

interface IScheduleSlice {
  loading: boolean;
  scheduleList: ScheduleItem[];
}
const INITIAL_STATE: IScheduleSlice = {
  scheduleList: [],
  loading: false,
};

export const getAllScheduleThunk = createAsyncThunk(
  'schedule-get-all-thunk',
  async (_, thunkAPI) => {
    try {
      const scheduleList = await getAllSchedule();
      return {
        scheduleList,
      };
    } catch (error) {
      thunkAPI.rejectWithValue((error as Error).message);
    }
  }
);

const scheduleSlice = createSlice({
  name: 'schedule',
  initialState: INITIAL_STATE,
  reducers: {
    setScheduleList: (
      state,
      action: PayloadAction<{ scheduleList: ScheduleItem[] }>
    ) => {
      state.scheduleList = action.payload.scheduleList;
    },
  },
  extraReducers: (_builder) => {
    _builder.addMatcher(isPending(getAllScheduleThunk), (state) => {
      state.loading = true;
    });
  },
});

export default scheduleSlice.reducer;
export const actions = { ...scheduleSlice.actions };
