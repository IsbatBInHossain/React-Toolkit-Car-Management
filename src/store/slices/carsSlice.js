import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    searchTerm: "",
    list: [],
  },
  reducers: {
    changeTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    addCar: (state, action) => {
      const { name, cost } = action.payload;
      const car = {
        id: nanoid(),
        name,
        cost,
      };
      state.list.push(car);
    },
    deleteCar: (state, action) => {
      state.list = state.list.filter((data) => data.id != action.payload);
    },
  },
});

export const { changeTerm, addCar, deleteCar } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
