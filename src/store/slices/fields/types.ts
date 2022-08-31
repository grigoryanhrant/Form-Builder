export interface IElement {
    dropid: number
    id: string

    type: string
    name: string
    description: string
    placeholder: string
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
