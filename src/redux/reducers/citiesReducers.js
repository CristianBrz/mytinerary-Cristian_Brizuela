import { createReducer } from "@reduxjs/toolkit";
import {
  filterByCity,
  loadCitiesAsync,
  loadCityAsync,
} from "../actions/citiesAction.js";

const initialState = {
  allCities: [],
  filteredCities: [],
  cityDetail: null,
};

export const citiesReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadCitiesAsync.fulfilled, (actualState, action) => {
      return {
        ...actualState,
        allCities: action.payload,
        filteredCities: action.payload,
      };
    })
    .addCase(filterByCity, (actualState, action) => {

      const filteredCities = actualState.allCities.filter((city) =>
        city.city.toLowerCase().trim().startsWith(action.payload.searchValue)
      );

      return {
        ...actualState,
        filteredCities,
      };
      
    })
    .addCase(loadCityAsync.fulfilled, (actualState, action) => {
      return {
        ...actualState,
        cityDetail: action.payload,
      };
    });
});
