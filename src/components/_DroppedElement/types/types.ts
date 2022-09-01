export interface IDroppedElementContainer {
    index: number
    moveCard: (dragIndex: number, hoverIndex: number) => void
    elementAddress?: string
    id: string

    type?: string
    name?: string
    description?: string
    placeholder?: string

    value?: string
}

export type TDragObject = {
    id: string | undefined
    index: number
    elementAddress?: string
}

export type TDroppedRef = {
    current: HTMLDivElement | null
}