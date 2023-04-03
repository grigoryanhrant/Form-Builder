import { configureStore } from '@reduxjs/toolkit'
import fieldsReducer from './slices/fields/fields'

export const store = configureStore({
    reducer: {
        fieldsSlices: fieldsReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
