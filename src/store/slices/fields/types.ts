export interface IElement {
    elementType: string
    dropid: number
    id: string
}

export interface IFieldInitialState {
    fields: IElement[]
}

export interface IElementPayloadData {
    payload: IElement
}
