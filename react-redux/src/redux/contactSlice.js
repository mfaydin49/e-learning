import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import contactData from "../data/contactData.json";

const initialState = contactData

export const getContactItems = createAsyncThunk(
    'contact/getContactItems',
    async (name, thunkAPI) => {
        try {
            return contactData.data
        } catch (error) {
            return thunkAPI.rejectWithValue('something went wrong');
        }
    }
);


const contactSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        clearContact: (state) => {
            state.data = [];
        },
        removeItem: (state, action) => {
            const itemId = action.payload;
            state.data = state.data.filter((item) => item.id !== itemId);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getContactItems.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getContactItems.fulfilled, (state, action) => {
                // console.log(action);
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(getContactItems.rejected, (state, action) => {
                console.log(action);
                state.isLoading = false;
            });
    },
});

export const {clearContact, removeItem} = contactSlice.actions;

export default contactSlice.reducer;