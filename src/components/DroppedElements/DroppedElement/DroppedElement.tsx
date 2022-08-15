import React, {FC, memo, useRef} from "react";
import {IDroppedElement, TDragItem} from "./types/types";
import {DragSourceMonitor, DropTargetMonitor, useDrag, useDrop} from "react-dnd";
import {ELEMENT_ADDRESS} from "../../../globalTypes/elementTypes";
import {nanoid} from "@reduxjs/toolkit";
import {Identifier, XYCoord} from "dnd-core";
import "./DroppedElement.sass";

export const DroppedElement: FC<IDroppedElement> = memo (
    ({
         description = 'Ask for a number here. What number do you want to know?',
         placeholder = 'e.g. 42',
         value = '',
         elementType,
         elementAddress = ELEMENT_ADDRESS.DROPPED,
         dropid,
         index,
         moveCard,
     }) => {

    const droppedElementRef = useRef<HTMLDivElement>(null);

    // console.log(`render check`);

    const [{ handlerId }, drop] = useDrop<TDragItem, void, { handlerId: Identifier | null }>({
        accept: 'element',
        collect(monitor: DropTargetMonitor<TDragItem, void>) {
            return {
                handlerId: monitor.getHandlerId(),
            }
        },

        hover(item: TDragItem, monitor: DropTargetMonitor) {

            if (item.elementAddress !== 'DROPPED') return;

            if (!droppedElementRef.current) return;

            const dragIndex = item.index;

            const hoverIndex: number | undefined = index;

            // if (dragIndex === hoverIndex) return;

            const hoverBoundingRect = droppedElementRef.current?.getBoundingClientRect();

            const middleY = hoverBoundingRect.bottom - hoverBoundingRect.top;

            const hoverMiddleY = middleY / 2;

            const clientOffset = monitor.getClientOffset();

            const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;

            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) return;

            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) return;

            moveCard(item.dropid, dropid);
        },
    })

    const [{ isDragging }, drag] = useDrag({
        type: 'element',
        item: { dropid, index, elementAddress, id: nanoid() },

        collect: (monitor: DragSourceMonitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    drag(drop(droppedElementRef));

    return (
        <div className='DroppedElement' ref={droppedElementRef} data-handler-id={handlerId} style={{opacity: isDragging ? 0  : 1}}>
            dropid: {dropid}
            {/*<span className='DroppedElement__Description'>{description}</span>*/}
            {/*<input*/}
            {/*    className='DroppedElement__Input'*/}
            {/*    placeholder={placeholder}*/}
            {/*    value={value}*/}
            {/*    type={elementType === 'NUMBERINPUT' ? 'number' : 'text'}*/}
            {/*    onChange={() => {}}*/}
            {/*/>*/}
        </div>
    )}
)
