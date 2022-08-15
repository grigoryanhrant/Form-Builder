import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../../store";
import {IElementPayloadData} from "./types";
import {moved} from "./helpers";

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

            let {drop_id, drag_id} = action.payload

            moved(state.fields, 4, 5)

        }
    },
})

export const { addField, updateFields } = fieldsSlice.actions

export const selectFields = (state: RootState) => state.fieldsSlices

export default fieldsSlice.reducer
