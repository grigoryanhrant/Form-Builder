import type { Identifier } from "dnd-core";
import {useRef, FC, memo} from "react";
import {DragSourceMonitor, DropTargetMonitor, useDrag, useDrop} from "react-dnd";
import {IDroppedElementContainer, TDragObject} from "./types/types";
import {DragDropCounting} from "./utility/DragDropCounting";
import {DroppedElement} from "./DroppedElement/DroppedElement";

export const DroppedElementContainer: FC<IDroppedElementContainer> = memo( (
    {
        type,
        name,
        description,
        placeholder,

        value,

        elementAddress,
        id,

        index,
        moveCard
    }) => {

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

        drop() {}
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
            placeholder={placeholder}
            value={value}
        />
    )
})
