import type { Identifier } from "dnd-core";
import {useRef, FC, memo} from "react";
import {DragSourceMonitor, DropTargetMonitor, useDrag, useDrop} from "react-dnd";
import {IDroppedElement, TDragObject} from "./types/types";
import {DragDropCounting} from "./utility/DragDropCounting";
import {MovingIcon} from "../../Common/Icons/MoveIcon";
import {BsTrash} from "@react-icons/all-files/bs/BsTrash";
import {GrDocumentConfig} from "@react-icons/all-files/gr/GrDocumentConfig";
import {useAppDispatch} from "../../../store/hooks";
import {removeField} from "../../../store/slices/fields/fields";
import "./DroppedElement.sass";

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

    const dispatch = useAppDispatch()

    const cardRemoveHandler = () => {
        dispatch(removeField(id))
    }

    return (
        <div
            className={'DroppedElement'}
            style={{opacity: isDragging ? 1 : 1,}}>

            <div
                className={isDragging ? 'DroppedElement__Drop' : 'DroppedElement__Card'}
                ref={DroppedRef}
                data-handler-id={handlerId}>

                <div className='DroppedElementTools'>
                    <div
                        className='DroppedElementTools__Icon DroppedElementTools__RemoveIcon'
                        onClick={cardRemoveHandler}>
                        <BsTrash />
                    </div>

                    <div className='DroppedElementTools__Icon DroppedElementTools__ConfigIcon'>
                        <GrDocumentConfig />
                    </div>
                </div>

                <div className='DroppedElement__Move'>
                    <MovingIcon/>
                </div>

                <div className='DroppedElement__Details'>
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
        </div>
    )
})
