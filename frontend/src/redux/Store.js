import {configureStore} from '@reduxjs/toolkit';
import userSlices from './slices/userSlices';
import contribution from './slices/contributionSlice';
import member from './slices/memberSlices';
const store = configureStore({
    reducer : {
        user : userSlices,
        contribution,
        member
    }
})

export default store;