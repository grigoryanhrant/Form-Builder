import type { Identifier } from "dnd-core";
import {useRef, FC, memo, useState} from "react";
import {DragSourceMonitor, DropTargetMonitor, useDrag, useDrop} from "react-dnd";
import {IDroppedElement, TDragObject} from "./types/types";
import {DragDropCounting} from "./utility/DragDropCounting";
import {DroppedElementTools} from "./DroppedElementTools/DroppedElementTools";
import "./DroppedElement.sass";
import {useOnClickOutside} from "../../../hooks/useOnClickOutside";

export const DroppedElement: FC<IDroppedElement> = memo( (
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

    const [{ isDragging }, drag, preview] = useDrag({
        type: "element",
        item: { id, index, elementAddress },
        collect: (monitor: DragSourceMonitor<TDragObject, TDragObject>) => ({
            isDragging: monitor.isDragging(),
        }),
    })

    drag(drop(DroppedRef))

    const [droppedElementTools, setDroppedElementTools] = useState(false)

    const showDroppedElementTools = () => {
        setDroppedElementTools(true);
    }

    const droppedElementToolsRender = droppedElementTools && <DroppedElementTools />

    const outSideRef = useRef<HTMLDivElement>(null);

    useOnClickOutside(outSideRef, () => setDroppedElementTools(false));

    return (
        <div className="DroppedElement" ref={outSideRef}>
            <div
                className=''
                ref={preview}
                data-handler-id={handlerId}
                style={{opacity: isDragging ? 0 : 1}}
                onClick={showDroppedElementTools}>

                <div ref={DroppedRef} className="DroppedElement__Move">Move</div>

                {droppedElementToolsRender}

                <span className='DroppedElement__Description'>{description}</span>

                <input
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    className='DroppedElement__Input'
                    type={type === 'NUMBERINPUT' ? 'number' : 'text'}
                    onChange={() => {}} />
            </div>
        </div>
    )
})
