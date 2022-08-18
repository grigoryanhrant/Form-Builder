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

export interface IElementPayloadData {
    payload: IElement
}
