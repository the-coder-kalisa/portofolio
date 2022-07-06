import {
  configureStore,
  createSlice,
  SliceCaseReducers,
} from "@reduxjs/toolkit";
export interface State {
  mode: boolean;
}
const mode = createSlice<State, SliceCaseReducers<State>>({
  name: "mode",
  initialState: { mode: false },
  reducers: {
    changeMode(state, action) {
      state.mode = action.payload
    },
  },
});
const store = configureStore({
  reducer: mode.reducer,
});
export const actions = mode.actions;
export default store;
