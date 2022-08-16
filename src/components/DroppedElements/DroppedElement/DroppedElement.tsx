// import type {Identifier, XYCoord} from 'dnd-core'
// import type {FC} from 'react'
// import React, {useRef} from 'react'
// import {useDrag, useDrop} from 'react-dnd'
// import {IDroppedElement, TDragItem} from "./types/types";
// import "./DroppedElement.sass";
//
// export const DroppedElement: FC<IDroppedElement> = ({id, index, moveCard, description, placeholder, value, elementType}) => {
//     const ref = useRef<HTMLDivElement>(null)
//     const [{handlerId}, drop] = useDrop<TDragItem,
//         void,
//         { handlerId: Identifier | null }>({
//         accept: "CARD",
//         collect(monitor) {
//             return {
//                 handlerId: monitor.getHandlerId(),
//             }
//         },
//         hover(item: TDragItem, monitor) {
//
//             console.log(item)
//
//             if (!ref.current) {
//                 return
//             }
//             const dragIndex = item.index
//             const hoverIndex = index
//
//             if (dragIndex === hoverIndex) {
//                 return
//             }
//
//             const hoverBoundingRect = ref.current?.getBoundingClientRect()
//
//             const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
//
//             const clientOffset = monitor.getClientOffset()
//
//             const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top
//
//             if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
//                 return
//             }
//
//             if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
//                 return
//             }
//
//             moveCard(dragIndex, hoverIndex)
//
//             item.index = hoverIndex
//         },
//     })
//
//     const [{isDragging}, drag] = useDrag({
//         type: "CARD",
//         item: () => {
//             return {id, index}
//         },
//         collect: (monitor: any) => ({
//             isDragging: monitor.isDragging(),
//         }),
//     })
//
//     drag(drop(ref))
//
//     return (
//
//         <div className='DroppedElement' ref={ref} data-handler-id={handlerId} style={{opacity: isDragging ? 0 : 1}}>
//
//             <span className='DroppedElement__Description'>{description}</span>
//             <input
//                 className='DroppedElement__Input'
//                 placeholder={placeholder}
//                 value={value}
//                 type={elementType === 'NUMBERINPUT' ? 'number' : 'text'}
//                 onChange={() => {}} />
//         </div>
//     )
// }

import type { Identifier, XYCoord } from 'dnd-core'
import type { FC } from 'react'
import { useRef } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import "./DroppedElement.sass";

export const DroppedElement: FC<any> = ({ id, text, index, moveCard, description, placeholder, value, elementType }) => {
    const ref = useRef<HTMLDivElement>(null)
    const [{ handlerId }, drop] = useDrop<
        any,
        void,
        { handlerId: Identifier | null }
        >({
        accept: 'CARD',
        collect(monitor) {
            return {
                handlerId: monitor.getHandlerId(),
            }
        },
        hover(item: any, monitor) {
            if (!ref.current) {
                return
            }
            const dragIndex = item.index
            const hoverIndex = index

            if (dragIndex === hoverIndex) {
                return
            }

            const hoverBoundingRect = ref.current?.getBoundingClientRect()

            const hoverMiddleY =
                (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2


            const clientOffset = monitor.getClientOffset()

            const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top

            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return
            }

            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return
            }

            moveCard(dragIndex, hoverIndex)

            item.index = hoverIndex
        },
    })

    const [{ isDragging }, drag] = useDrag({
        type: "CARD",
        item: () => {
            return { id, index }
        },
        collect: (monitor: any) => ({
            isDragging: monitor.isDragging(),
        }),
    })

    const opacity = isDragging ? 0 : 1
    drag(drop(ref))
    return (
        <div className='DroppedElement' ref={ref} data-handler-id={handlerId} style={{opacity: isDragging ? 0 : 1}}>

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
