import { createSlice } from '@reduxjs/toolkit';

interface ITemplateSlice {
  templateMsg: string;
}

const INITIAL_STATE: ITemplateSlice = {
  templateMsg: 'TemplateSlice',
};

const templateSlice = createSlice({
  name: 'template',
  initialState: INITIAL_STATE,
  reducers: {
    templateAction: (state, action) => {
      console.log(action.payload);
      state.templateMsg = action.payload;
    },
  },
});

export default templateSlice.reducer;
export const actions = { ...templateSlice.actions };
