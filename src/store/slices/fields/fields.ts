import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../../store";
import {IElementPayloadData} from "./types";

const initialState: any = {
    fields: []
}

export const fieldsSlice = createSlice({
    name: 'fields',
    initialState,
    reducers: {
        addField: (state, action: IElementPayloadData) => {
            state.fields.push(action.payload)
        },

        updateFields: (state, action: any) => {
            state.fields = action.payload
        }
    },
})

export const { addField, updateFields } = fieldsSlice.actions

// export const selectFields = (state: RootState) => state.fieldsSlices

export default fieldsSlice.reducer
