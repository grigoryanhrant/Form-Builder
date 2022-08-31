import React, {useCallback, useEffect, useLayoutEffect, useRef, useState} from "react";
import {nanoid} from "@reduxjs/toolkit";
import {DropTargetMonitor, useDrop} from "react-dnd";
import {ELEMENT_ADDRESS} from "../../../globalTypes/elementTypes";
import {setDropId} from "../../../helpers";
import { useAppSelector, useAppDispatch } from "../../../store/hooks";
import {DroppedElement} from "../../DroppedElements/DroppedElement/DroppedElement";
import {addField, updateFields} from "../../../store/slices/fields/fields";
import update from 'immutability-helper';
import {IElement} from "../../../store/slices/fields/types";
import "./PlaygroundArena.sass";

export const PlaygroundArena = () => {

    const dispatch = useAppDispatch()

    const myElement = useRef<any>(null);

    const { fields } = useAppSelector((state) => state.fieldsSlices)

    const [cards, setCards] = useState(fields);

    const cardsPrevStateRef: any = useRef()

    cardsPrevStateRef.current = cards


    const mouseLeaveUpdateHandler = () => {
        dispatch(updateFields(cards))
    }

    useEffect(() => {
        myElement.current.addEventListener('mouseleave', mouseLeaveUpdateHandler, false)

        return () => {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            myElement.current.removeEventListener('mouseleave', mouseLeaveUpdateHandler, false)
        }
    }, [cards])

    useEffect(() => {
        setCards(fields)
    }, [fields])

    const [{isOver}, drop] = useDrop(() => ({
        accept: 'element',
        drop: (item: { elementAddress: string, type: string, name: string, description: string, placeholder: string }) => {
            if (item.elementAddress !== ELEMENT_ADDRESS.FORM) return

            dispatch(addField({
                id: nanoid(),
                dropid: setDropId(),

                type: item.type,
                name: item.name,
                description: item.description,
                placeholder: item.placeholder,
            }))
        },

        collect: (monitor: DropTargetMonitor) => ({
            isOver: monitor.isOver(),
            dropHere: monitor.isOver()
        }),
    }));

    const moveCard = useCallback((dragIndex: number, hoverIndex: number) => {
        setCards((prevCards: IElement[]) =>
            update(prevCards, {
                $splice: [
                    [dragIndex, 1],
                    [hoverIndex, 0, prevCards[dragIndex] as IElement],
                ],
            })
        )
    }, [cards])

    const fieldsRenderCallback = useCallback(
        (item: IElement, index: number) => {
            return (
                <DroppedElement
                    key={item.id}
                    id={item.id}
                    index={index}
                    moveCard={moveCard}
                    elementAddress={ELEMENT_ADDRESS.DROPPED}

                    type={item.type}
                    name={item.name}
                    description={item.description}
                    placeholder={item.placeholder}
                />
            )
        },
        [],
    )

    return (
        <div ref={myElement} style={{width: '100%'}}>
            <div ref={drop} className='PlaygroundArena' style={{borderColor: isOver ? '#58cfef' : ''}}>

                {cards.map((card, i) => fieldsRenderCallback(card, i))}

                <div onClick={() => console.log(cards)} style={{margin: 'auto auto'}}>dsfsdfsdfdsdfsf</div>

                {isOver && <div className='PlaygroundArena__DropHere'>DROP THE ELEMENT HERE</div>}
            </div>
        </div>
    );
};
