//importamos
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';


//variable principal
 const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});

//exportamos
export default store