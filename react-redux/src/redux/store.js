import {configureStore} from '@reduxjs/toolkit';
import courseReducer from './courseSlice.js';
import contactReducer from './contactSlice.js';

export const store = configureStore({
    reducer: {
        courses: courseReducer,
        contacts: contactReducer,
    },
});