import { createSlice } from "@reduxjs/toolkit";
import ISliderItem from "../types/SliderItem";

export const initialState: {
  email: string | null;
  basket: ISliderItem[] | [];
  id: string | null;
} = {
  email: null,
  basket: [],
  id: null,
};
type stateUser = {
  email: string | null;
  basket: ISliderItem[];
  id: string | null;
};
export type RootState = ReturnType<typeof userSlice.reducer>;

export const getBasketTotal = (basket: ISliderItem[]) => {
  var total = 0;
  basket.map((item) => (total += item.price));
  return total.toFixed(2);
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setEmailAction: (state: stateUser, action) => {
      state.email = action.payload;
    },
    setBasketAction: (state: stateUser, action: any) => {
      state.basket = action.payload;
    },
    initializeTokenAction: (state: stateUser, action: any) => {
      state = action.payload;
    },
    logoutAction: (state: stateUser) => {
      state.email = null;
      state.basket = [];
      state.id = null;
    },
    addToBasketAction: (state: stateUser, action: any) => {
      state.basket.unshift(action.payload);
    },
    removeFromBasketAction: (state: stateUser, action: any) => {
      state.basket = state.basket.filter((item) => item.id !== action.payload);
    },
    addAllItemsToBasket: (state: stateUser, action: any) => {
      state.basket = action.payload;
    },
  },
});

export const {
  setEmailAction,
  setBasketAction,
  initializeTokenAction,
  logoutAction,
  addToBasketAction,
  addAllItemsToBasket,
  removeFromBasketAction,
} = userSlice.actions;

export default userSlice;
