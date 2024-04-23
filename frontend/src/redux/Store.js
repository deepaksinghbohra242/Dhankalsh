import {configureStore} from '@reduxjs/toolkit';
import userSlices from './slices/userSlices';
import contribution from './slices/contributionSlice';
import member from './slices/memberSlices';
import loan from './slices/loanSlice';
const store = configureStore({
    reducer : {
        user : userSlices,
        contribution,
        member,
        loan
    }
})

export default store;