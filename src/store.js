import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartItem/CartSlice';
 const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});
export default store