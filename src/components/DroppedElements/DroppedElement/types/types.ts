export interface IDroppedElement {
    description?: string
    placeholder?: string
    value?: string
    elementType: string
    elementAddress?: string
    id: string
    dropid: number
    index: number
    key: string
    moveCard: (dragIndex: number, hoverIndex: number) => void
}

export type TDragItem = {
    dropid: number
    index: number
    elementAddress: string
    id: string
}
