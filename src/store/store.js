import { configureStore } from "@reduxjs/toolkit";
import { formReducer, changeName, changeCost } from "./slices/formSlice";
import { carsReducer, changeTerm, addCar, deleteCar } from "./slices/carsSlice";

const store = configureStore({
  reducer: { form: formReducer, cars: carsReducer },
});

export { store, changeName, changeCost, changeTerm, addCar, deleteCar };
