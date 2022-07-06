import {
  configureStore,
  createSlice,
  SliceCaseReducers,
} from "@reduxjs/toolkit";
export interface State {
  mode: boolean;
  windowHeight: number;
}
const sitedata = createSlice<State, SliceCaseReducers<State>>({
  name: "mode",
  initialState: { mode: false, windowHeight: 0 },
  reducers: {
    changeMode(state, action) {
      state.mode = action.payload;
    },
    changeHeight(state, action){
      state.windowHeight = action.payload
    }
  },
});
const store = configureStore({
  reducer: sitedata.reducer,
});
export const transition = "transition-all duration-1000"
export const actions = sitedata.actions;
export default store;
