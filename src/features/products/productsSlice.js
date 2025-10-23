import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    { id: 1, name: "Aloe Vera", price: 199, image: "https://via.placeholder.com/150" },
    { id: 2, name: "Snake Plant", price: 249, image: "https://via.placeholder.com/150" },
    { id: 3, name: "Peace Lily", price: 299, image: "https://via.placeholder.com/150" },
  ],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export default productsSlice.reducer;
