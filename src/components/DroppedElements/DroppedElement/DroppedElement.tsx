import type { Identifier } from "dnd-core";
import {useRef, FC, memo} from "react";
import {DragSourceMonitor, DropTargetMonitor, useDrag, useDrop} from "react-dnd";
import {IDroppedElement, TDragObject} from "./types/types";
import {DragDropCounting} from "./utility/DragDropCounting";
import "./DroppedElement.sass";

export const DroppedElement: FC<IDroppedElement> = memo( (
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
            DragDropCounting(item, monitor, DroppedRef, index, moveCard)
        },

        drop() {}

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
})
