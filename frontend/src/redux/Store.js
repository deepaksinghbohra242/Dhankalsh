import {configureStore} from '@reduxjs/toolkit';
import memberSlice from './slices/memberSlice';
const store = configureStore({
    reducer : {
        member : memberSlice
    }
})

export default store;