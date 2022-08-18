export interface IDroppedElement {
    description?: string
    placeholder?: string
    value?: string

    elementType?: string
    elementAddress?: string
    id: string

    index: number

    moveCard: (dragIndex: number, hoverIndex: number) => void
}

export type TDragObject = {
    id: string | undefined
    index: number
    elementAddress?: string
}

export type TDroppedRef = {
    current: HTMLDivElement | null
}