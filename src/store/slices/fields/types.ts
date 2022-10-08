export interface IElement {
    dropid?: number
    id?: string

    type: string
    name: string
    description: string
    descriptionForInput?: string
    placeholder: string
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
    payload: string
}

export interface IChangeDescriptionPayload {
    payload: {
        id: string | undefined
        description: string
    }
}

export interface IChangePlaceholderPayload {
    payload: {
        id: string | undefined
        inputPlaceholder: string
    }
}

export interface IValueRemovePayload {
    payload: {
        id: string | undefined
    }
}

export interface IEditModePayload {
    payload: string | undefined
}
