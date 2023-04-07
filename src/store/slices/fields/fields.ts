import { createSlice, nanoid } from '@reduxjs/toolkit'
import type {
  StoreInitialProps,
  AdvanceActionProps,
  AdvanceActionArrayProps,
  BasicPayloadProps,
  DescriptionChangeProps,
  PlaceholderChangeProps,
} from './types'
import { dropId } from './helpers'

const initialState: StoreInitialProps = {
  fields: [],
}

export const fieldsSlice = createSlice({
  name: 'fields',
  initialState,
  reducers: {
    addField: (draft, action: AdvanceActionProps) => {
      action.payload.drop_id = dropId()

      action.payload.id = nanoid()

      action.payload.editMode = false

      if (action.payload.type === 'SELECT') {
        draft.fields.push({
          ...action.payload,
          selectFields: [
            { value: 'ocean', label: 'Ocean', color: '#00B8D9' },
            { value: 'blue', label: 'Blue', color: '#0052CC' },
            { value: 'purple', label: 'Purple', color: '#5243AA' },
            { value: 'red', label: 'Red', color: '#FF5630' },
            { value: 'orange', label: 'Orange', color: '#FF8B00' },
          ],
        })
      } else if (action.payload.type !== 'SELECT') {
        draft.fields.push(action.payload)
      }
    },

    updateFields: (draft, action: AdvanceActionArrayProps) => {
      draft.fields = action.payload
    },

    removeField: (draft, action: BasicPayloadProps) => {
      draft.fields = draft.fields.filter((field) => field.id !== action.payload.id)
    },

    descriptionChange: (draft, action: DescriptionChangeProps) => {
      draft.fields.map((field) =>
        field.id === action.payload.id
          ? (field.description = action.payload.description)
          : field.description,
      )
    },

    placeholderChange: (draft, action: PlaceholderChangeProps) => {
      draft.fields.map((field) =>
        field.id === action.payload.id
          ? (field.placeholder = action.payload.inputPlaceholder)
          : field.placeholder,
      )
    },

    placeholderRemove: (draft, action: BasicPayloadProps) => {
      draft.fields.map((field) =>
        field.id === action.payload.id ? (field.placeholder = '') : field.placeholder,
      )
    },

    descriptionRemove: (draft, action: BasicPayloadProps) => {
      draft.fields.map((field) =>
        field.id === action.payload.id ? (field.description = '') : field.description,
      )
    },

    editModeOn: (draft, action: BasicPayloadProps) => {
      draft.fields.map((field) => {
        field.editMode = field.id === action.payload.id
      })
    },

    editModeOff: (draft, action: BasicPayloadProps) => {
      draft.fields.find((field) => {
        if (field.id === action.payload.id) {
          field.editMode = false
        }
      })
    },
  },
})

export const {
  addField,
  updateFields,
  removeField,
  placeholderChange,
  editModeOn,
  descriptionChange,
  placeholderRemove,
  descriptionRemove,
  editModeOff,
} = fieldsSlice.actions

export default fieldsSlice.reducer
