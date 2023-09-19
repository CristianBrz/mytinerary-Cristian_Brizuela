import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loadCitiesAsync = createAsyncThunk("loadCitiesAsync", async () => {
  try {
    const res = await axios("http://localhost:3000/api/cities/");
    return res.data.response;
  } catch (err) {
    console.log(err);
  }
});

export const loadCityAsync = createAsyncThunk("loadCityAsync", async ( id ) => {
  try {
    const res = await axios("http://localhost:3000/api/cities/" + id);
    return res.data.response;
  } catch (err) {
    console.log(err);
  }
});

export const filterByCity = createAction("filterByCity", (searchValue) => {
  return {
    payload: {
      searchValue: searchValue,
    },
  };
});
