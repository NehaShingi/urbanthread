import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//Helper function to lead cart from localStorage
const loadCartFromLocalStorage = () => {
  const storedCart = localStorage.getItem("cart");
  return storedCart ? JSON.parse(storedCart) : { products: [] };
};

//Helper function to save cart to localStorage
const saveCartToStorage = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

//Fetch cart for a user or guest
const fetchCart = createAsyncThunk(
  "cart/fetchCart",
  async ({ userId, guestId }, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/cart`,
        {
          params: { userId, guestId },
        },
      );
      return response.data;
    } catch (error) {
      console.error(error);
      return rejectWithValue(error.response.data);
    }
  },
);

//Add an item to the cart for a user or guest
export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async (
    { productId, quantity, size, color, guestId, userId },
    { rejectWithValue },
  ) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/cart/add`,
        { productId, quantity, size, color, guestId, userId },
      );
      return response.data;
    } catch (error) {
      console.error(error);
      return rejectWithValue(error.response.data);
    }
  },
);

//Update the quantity of an item in the cart
export const updateCartItemQuantity = createAsyncThunk(
  "cart/updateCartItemQuantity",
  async (
    { productId, quantity, guestId, userId, size, color },
    { rejectWithValue },
  ) => {
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_BACKEND_URL}/api/cart`,
        { productId, quantity, guestId, userId, size, color },
      );
      return response.data;
    } catch (error) {
      console.error(error);
      return rejectWithValue(error.response.data);
    }
  },
);

//Remove an item from the cart
export const removeFromCart = createAsyncThunk(
  "cart/removeFromCart",
  async ({ productId, guestId, userId, size, color }, { rejectWithValue }) => {
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_BACKEND_URL}/api/cart`,
        { data: { productId, guestId, userId, size, color } },
      );
      return response.data;
    } catch (error) {
      console.error(error);
      return rejectWithValue(error.response.data);
    }
  },
);

//Merge Guest Cart into user cart
export const mergeCart = createAsyncThunk(
  "cart/mergeCart",
  async ({ guestId, userId }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/cart/merge`,
        { guestId, userId },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userToken")}`,
          },
        },
      );
      return response.data;
    } catch (error) {
      console.error(error);
      return rejectWithValue(error.response.data);
    }
  },
);

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: loadCartFromLocalStorage(),
    loading: false,
    error: null,
  },
  reducers: {
    clearCart: (state) => {
      state.cart = { products: [] };
      localStorage.removeItem("cart");
    },
  },
  extraReducers: (builder) => {
    //handle fetching cart
    builder.addCase(fetchCart.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchCart.fulfilled, (state, action) => {
      state.loading = false;
      state.cart = action.payload;
      saveCartToStorage(action.payload);
      state.error = null;
    });
    builder.addCase(fetchCart.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Failed to fetch cart";
    });
    //handle add to cart
    builder.addCase(addToCart.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(addToCart.fulfilled, (state, action) => {
      state.loading = false;
      state.cart = action.payload;
      saveCartToStorage(action.payload);
      state.error = null;
    });
    builder.addCase(addToCart.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload?.message || "Failed to add to cart cart";
    });
    //handle updating cart Items
    builder.addCase(updateCartItemQuantity.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(updateCartItemQuantity.fulfilled, (state, action) => {
      state.loading = false;
      state.cart = action.payload;
      saveCartToStorage(action.payload);
      state.error = null;
    });
    builder.addCase(updateCartItemQuantity.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload?.message || "Failed to update item quantity";
    });
    //handle remove from cart
    builder.addCase(removeFromCart.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(removeFromCart.fulfilled, (state, action) => {
      state.loading = false;
      state.cart = action.payload;
      saveCartToStorage(action.payload);
      state.error = null;
    });
    builder.addCase(removeFromCart.rejected, (state, action) => {
      state.loading = false;
      state.error =
        action.payload?.message || "Failed to remove item from cart";
    });
    //handle merging cart
    builder.addCase(mergeCart.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(mergeCart.fulfilled, (state, action) => {
      state.loading = false;
      state.cart = action.payload;
      saveCartToStorage(action.payload);
      state.error = null;
    });
    builder.addCase(mergeCart.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload?.message || "Failed to merge cart";
    });
  },
});

export const { clearCart } = cartSlice.actions;
export default cartSlice.reducer;
