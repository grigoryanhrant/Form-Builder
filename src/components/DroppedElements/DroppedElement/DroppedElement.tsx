import type { Identifier, XYCoord } from "dnd-core";
import { useRef, FC } from "react";
import {DragSourceMonitor, DropTargetMonitor, useDrag, useDrop} from "react-dnd";
import "./DroppedElement.sass";
import {IDroppedElement, TDragObject} from "./types/types";
import {ELEMENT_ADDRESS} from "../../../globalTypes/elementTypes";

export const DroppedElement: FC<IDroppedElement> = (
    {
        description,
        placeholder,
        value,

        elementType,
        elementAddress,
        id,

        index,
        moveCard
    }) => {

    const DroppedRef = useRef<HTMLDivElement>(null)

    const [{ handlerId }, drop] = useDrop<TDragObject, void, { handlerId: Identifier | null }>({
        accept: 'element',

        collect(monitor) {
            return {
                handlerId: monitor.getHandlerId(),
            }
        },

        hover(item: TDragObject, monitor: DropTargetMonitor<TDragObject, void>) {

            if(item.elementAddress !== ELEMENT_ADDRESS.DROPPED) return

            if (!DroppedRef.current) return

            const dragIndex = item.index

            const hoverIndex = index

            if (dragIndex === hoverIndex) return

            const hoverBoundingRect = DroppedRef.current?.getBoundingClientRect()

            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

            const clientOffset = monitor.getClientOffset()

            const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top

            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) return

            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) return

            moveCard(dragIndex, hoverIndex)

            item.index = hoverIndex
        },
    })

    const [{ isDragging }, drag] = useDrag({
        type: "element",
        item: { id, index, elementAddress },
        collect: (monitor: DragSourceMonitor<TDragObject, TDragObject>) => ({
            isDragging: monitor.isDragging(),
        }),
    })

    drag(drop(DroppedRef))

    return (
        <div className='DroppedElement' ref={DroppedRef} data-handler-id={handlerId} style={{opacity: isDragging ? 0 : 1}}>

            <span className='DroppedElement__Description'>{description}</span>
            <input
                className='DroppedElement__Input'
                placeholder={placeholder}
                value={value}
                type={elementType === 'NUMBERINPUT' ? 'number' : 'text'}
                onChange={() => {}} />
        </div>
    )
}
