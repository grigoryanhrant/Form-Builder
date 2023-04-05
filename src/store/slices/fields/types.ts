export interface IElement {
  dropid?: number
  id?: string
  type: string
  name: string
  description: string
  descriptionForInput?: string
  placeholder?: string
  editMode?: boolean
  required?: boolean
  selectFields?: IElementSelects[]
}

interface IElementSelects {
  value: string
  label: string
  color: string
}

export interface IFieldInitialState {
  fields: IElement[]
}

export interface IAddFieldPayload {
  payload: IElement
}

export interface IUpdateFieldPayload {
  payload: IElement[]
}

export interface IRemoveFieldPayload {
  payload: {
    id?: string
  }
}

export interface IChangeDescriptionPayload {
  payload: {
    id?: string
    description: string
  }
}

export interface IChangePlaceholderPayload {
  payload: {
    id?: string
    inputPlaceholder: string
  }
}

export interface IValueRemovePayload {
  payload: {
    id?: string
  }
}

export interface IEditModePayload {
  payload: {
    id?: string
  }
}
