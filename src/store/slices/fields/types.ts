export interface IElement {
    dropid?: number
    id?: string

    type: string
    name: string
    description: string
    descriptionForInput?: string
    placeholder: string
    required?: boolean
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

export interface IChangePlaceholderPayload {
    payload: {
        id: string
        inputPlaceholder: string
    }
}
