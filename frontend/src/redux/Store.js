import {configureStore} from '@reduxjs/toolkit';
import memberSlice from './slices/memberSlice';
import contributionSlice from './slices/contributionSlice';
const store = configureStore({
    reducer : {
        member : memberSlice,
        contribution : contributionSlice
    }
})

export default store;