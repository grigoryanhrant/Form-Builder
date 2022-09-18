import {createSlice, nanoid} from "@reduxjs/toolkit";
import {
    IAddFieldPayload,
    IChangePlaceholderPayload, IEditModePayload,
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

            action.payload.editMode = false;

            draft.fields.push(action.payload)
        },

        updateFields: (draft, action: IUpdateFieldPayload) => {
            draft.fields = action.payload
        },

        removeField: (draft, action: IRemoveFieldPayload) => {
            draft.fields = draft.fields.filter(item => item.id !== action.payload)
        },

        placeholderChange: (draft, action: IChangePlaceholderPayload) => {
            draft.fields.map(item => {
                if(item.id === action.payload.id) {
                    item.placeholder = action.payload.inputPlaceholder
                }
            })
        },

        editMode: (draft, action: IEditModePayload) => {
            draft.fields.map(item => item.editMode = item.id === action.payload)
        }
    },
})

export const { addField, updateFields, removeField, placeholderChange, editMode } = fieldsSlice.actions

export const selectFields = (state: RootState) => state.fieldsSlices

export default fieldsSlice.reducer
