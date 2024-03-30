import {configureStore} from '@reduxjs/toolkit';
import memberSlice from './slices/memberSlice';
import contribution from './slices/contributionSlice';
const store = configureStore({
    reducer : {
        member : memberSlice,
        contribution
    }
})

export default store;