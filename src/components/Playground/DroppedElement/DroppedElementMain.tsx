import type { Identifier } from 'dnd-core'
import type { DragSourceMonitor, DropTargetMonitor } from 'react-dnd'
import type { TDragObject } from '@global/types/types'
import type { FC, ReactElement } from 'react'
import { useRef, memo } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import { DroppedElement } from './DroppedElement'
import { DragDropCounting } from '@helpers/dragDropCounting'

interface IDroppedElementParent {
    index: number
    moveCard: (dragIndex: number, hoverIndex: number) => void
    elementAddress?: string
    id?: string
    type?: string
    name?: string
    description?: string
    descriptionForInput?: string
    placeholder?: string
    required?: boolean
    value?: string
    editMode?: boolean
}

export const DroppedElementMain: FC<IDroppedElementParent> = memo(
    ({
        type,
        name,
        description,
        descriptionForInput,
        placeholder,
        required,
        value,
        elementAddress,
        id,
        index,
        moveCard,
        editMode,
    }): ReactElement => {
        const DroppedRef = useRef<HTMLDivElement>(null)

        const [{ handlerId }, drop] = useDrop<TDragObject, void, { handlerId: Identifier | null }>({
            accept: 'dropped_element',

            collect(monitor) {
                return {
                    handlerId: monitor.getHandlerId(),
                }
            },

            hover(item: TDragObject, monitor: DropTargetMonitor<TDragObject, void>) {
                DragDropCounting(item, monitor, DroppedRef, index, moveCard)
            },
        })

        const [{ isDragging }, drag] = useDrag({
            type: 'dropped_element',
            item: { id, index, elementAddress },
            collect: (monitor: DragSourceMonitor<TDragObject, TDragObject>) => ({
                isDragging: monitor.isDragging(),
            }),
        })

        drag(drop(DroppedRef))

        return (
            <DroppedElement
                isDragging={isDragging}
                DroppedRef={DroppedRef}
                handlerId={handlerId}
                id={id}
                type={type}
                name={name}
                description={description}
                descriptionForInput={descriptionForInput}
                placeholder={placeholder}
                required={required}
                value={value}
                editMode={editMode}
            />
        )
    },
)

DroppedElementMain.displayName = 'DroppedElementMain'
