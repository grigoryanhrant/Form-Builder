import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../../store";

const initialState: any = {
    fields: []
}

export const fieldsSlice = createSlice({
    name: 'fields',
    initialState,
    reducers: {
        addField: (state, action: any) => {
            state.fields.push(action.payload)
        },
    },
})

export const { addField } = fieldsSlice.actions

export const selectFields = (state: RootState) => state.fieldsSlices

export default fieldsSlice.reducer
