export enum PLAYGROUNDCASES {
    ADD_ELEMENT = 'ADD_ELEMENT',
    UPDATE_ELEMENTS = 'UPDATE_ELEMENTS'
}

export type TElementPayloadType =
    PLAYGROUNDCASES.ADD_ELEMENT |
    PLAYGROUNDCASES.UPDATE_ELEMENTS

export type IElementsList = {
    elementType: string
    dropid: number
    id: string
}

export interface IElementPayloadData {
    elementType: string
    dropid: number
    id: string
    drag_id: number
    drop_id: number
}

export interface IElementPayload {
    type: TElementPayloadType
    data: Partial<IElementPayloadData>
}
