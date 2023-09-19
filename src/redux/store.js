import { configureStore } from "@reduxjs/toolkit";
import { citiesReducer } from "./reducers/citiesReducers.js";

const store = configureStore({
  reducer: {
		cities : citiesReducer,
	},
});

export default store;