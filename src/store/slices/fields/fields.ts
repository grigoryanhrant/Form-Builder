import {createSlice, nanoid} from "@reduxjs/toolkit";
import {
    IAddFieldPayload,
    IChangePlaceholderPayload,
    IFieldInitialState,
    IRemoveFieldPayload,
    IUpdateFieldPayload
} from "./types";
import {RootState} from "../../store";
import {dropId} from "./helpers";

const initialState: IFieldInitialState = {
    fields: []
}


export const fieldsSlice = createSlice({
    name: 'fields',
    initialState,
    reducers: {
        addField: (draft, action: IAddFieldPayload) => {
            action.payload.dropid = dropId();

            action.payload.id = nanoid();

            draft.fields.push(action.payload)
        },

        updateFields: (draft, action: IUpdateFieldPayload) => {
            draft.fields = action.payload
        },

        removeField: (draft, action: IRemoveFieldPayload) => {
            draft.fields = draft.fields.filter(item => item.id !== action.payload)
        },


        placeholderChange: (draft, action: IChangePlaceholderPayload) => {

            console.log(action.payload)

            draft.fields.map(item => {
                if(item.id === action.payload.id) {
                    item.placeholder = action.payload.inputPlaceholder
                }
            })
        },
    },
})

export const { addField, updateFields, removeField, placeholderChange } = fieldsSlice.actions

export const selectFields = (state: RootState) => state.fieldsSlices

export default fieldsSlice.reducer
