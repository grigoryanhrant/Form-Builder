import React, {memo, useCallback, useEffect, useState} from "react";
import {nanoid} from "@reduxjs/toolkit";
import {DropTargetMonitor, useDrop} from "react-dnd";
import {ELEMENT_ADDRESS, TCardLocal} from "../../../globalTypes/elementTypes";
import {setDropId} from "../../../helpers";
import { useAppSelector, useAppDispatch } from "../../../store/hooks";
import {DroppedElement} from "../../DroppedElements/DroppedElement/DroppedElement";
import {addField, updateFields} from "../../../store/slices/fields/fields";
import update from 'immutability-helper';
import "./PlaygroundArena.sass";

export const PlaygroundArena = () => {
    const { fields } = useAppSelector((state) => state.fieldsSlices)

    const dispatch = useAppDispatch()

    const [cards, setCards] = useState(fields);

    useEffect(() => {
        setCards(fields)
    }, [fields])

    useEffect(() => {
        dispatch(updateFields(cards))
    }, [cards])

    const [{isOver}, drop] = useDrop(() => ({
        accept: 'element',
        drop: (item: { elementAddress: string, type: string }) => {
            if (item.elementAddress !== ELEMENT_ADDRESS.FORM) return
            dispatch(addField({elementType: item.type, id: nanoid(), dropid: setDropId()}))
        },

        collect: (monitor: DropTargetMonitor) => ({
            isOver: monitor.isOver(),
            dropHere: monitor.isOver()
        }),
    }));

    const moveCard = useCallback((dragIndex: number, hoverIndex: number) => {
        setCards((prevCards: TCardLocal[]) =>
            update(prevCards, {
                $splice: [
                    [dragIndex, 1],
                    [hoverIndex, 0, prevCards[dragIndex] as TCardLocal],
                ],
            })
        )
    }, [cards])

    const fieldsRenderCallback = useCallback(
        (item: TCardLocal, index: number) => {
            return (
                <DroppedElement
                    key={item.id}
                    id={item.id}
                    index={index}
                    moveCard={moveCard}
                    elementAddress={ELEMENT_ADDRESS.DROPPED}
                />
            )
        },
        [],
    )

    return (
        <div ref={drop} className='PlaygroundArena' style={{borderColor: isOver ? '#58cfef' : ''}}>
            {cards.map((card, i) => fieldsRenderCallback(card, i))}

            {isOver && <div className='PlaygroundArena__DropHere'>DROP THE ELEMENT HERE</div>}
        </div>
    );
};
