import {useRef, FC, memo} from "react";
import type { Identifier } from "dnd-core";
import {DragSourceMonitor, DropTargetMonitor, useDrag, useDrop} from "react-dnd";
import {DragDropCounting} from "./helpers/DragDropCounting";
import {DroppedElement} from "./DroppedElement/DroppedElement";
import {IDroppedElementContainer, TDragObject} from "./types";

export const DroppedElementContainer: FC<IDroppedElementContainer> = memo( (
    {
        type,
        name,
        description,
        descriptionForInput,
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
            descriptionForInput={descriptionForInput}
            placeholder={placeholder}
            value={value}
        />
    )
})
