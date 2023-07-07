import React from 'react'
import {render} from '@testing-library/react'
import {configureStore} from '@reduxjs/toolkit'
import {Provider} from 'react-redux'
import CourseReducer from '../redux/courseSlice.js'
import contactReducer from '../redux/contactSlice.js'

export function renderWithProviders(
    ui,
    {
        preloadedState = {},
        // Automatically create a store instance if no store was passed in
        store = configureStore({reducer: {courses: CourseReducer, contacts: contactReducer}, preloadedState}),
        ...renderOptions
    } = {}
) {
    function Wrapper({children}) {
        return <Provider store={store}>{children}</Provider>
    }

    // Return an object with the store and all of RTL's query functions
    return {store, ...render(ui, {wrapper: Wrapper, ...renderOptions})}
}