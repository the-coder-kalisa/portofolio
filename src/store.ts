import {
    CaseReducerActions,
  configureStore,
  createSlice,
  SliceCaseReducers,
} from "@reduxjs/toolkit";
const mode = createSlice<boolean, SliceCaseReducers<boolean>>({
  name: "mode",
  initialState: false,
  reducers: {
    changeMode(state) {
      state = !state;
    },
  },
});
const store = configureStore({
  reducer: {
    mode: mode.reducer,
  },
});
export const actions : CaseReducerActions<SliceCaseReducers<boolean>> = mode.actions
export default store;