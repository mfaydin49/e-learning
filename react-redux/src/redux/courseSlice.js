import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import courseData from '../data/coursesData.json'

const initialState = courseData

export const getCourseItems = createAsyncThunk(
    'course/getCourseItems',
    async (name, thunkAPI) => {
        try {
            return courseData.data
        } catch (error) {
            return thunkAPI.rejectWithValue('something went wrong');
        }
    }
);

const courseSlice = createSlice({
    name: 'courses',
    initialState,
    reducers: {
        clearCourse: (state) => {
            state.data = [];
        },
        removeItem: (state, action) => {
            const itemId = action.payload;
            state.data = state.data.filter((item) => item.id !== itemId);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCourseItems.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getCourseItems.fulfilled, (state, action) => {
                // console.log(action);
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(getCourseItems.rejected, (state, action) => {
                console.log(action);
                state.isLoading = false;
            });
    },
});

export const {clearCourse, removeItem} =
    courseSlice.actions;

export default courseSlice.reducer;