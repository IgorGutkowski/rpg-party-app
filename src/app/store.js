// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import partyReducer from '../partySlice';

const store = configureStore({
    reducer: {
        party: partyReducer,
    },
});

export default store;