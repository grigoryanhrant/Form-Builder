import React, {useCallback, useState} from "react";
import {nanoid} from "@reduxjs/toolkit";
import {DropTargetMonitor, useDrop} from "react-dnd";
import {ELEMENT_ADDRESS} from "../../../globalTypes/elementTypes";
import {setDropId} from "../../../helpers";
import { useAppSelector, useAppDispatch } from "../../../store/hooks";
import {addField, updateFields} from "../../../store/slices/fields/fields";
import {DroppedElement} from "../../DroppedElements/DroppedElement/DroppedElement";
import "./PlaygroundArena.sass";
import update from 'immutability-helper'

export const PlaygroundArena = React.memo(() => {

    const { fields } = useAppSelector((state) => state.fieldsSlices)

    const dispatch = useAppDispatch()

    const [cards, setCards] = useState([
        {
            id: 1,
            text: 'Write a cool JS library',
        },
        {
            id: 2,
            text: 'Make it generic enough',
        },
        {
            id: 3,
            text: 'Write README',
        },
        {
            id: 4,
            text: 'Create some examples',
        },
        {
            id: 5,
            text: 'Spam in Twitter and IRC to promote it (note that this element is taller than the others)',
        },
        {
            id: 6,
            text: '???',
        },
        {
            id: 7,
            text: 'PROFIT',
        },
    ])

    const [{isOver}, drop] = useDrop(() => ({
        accept: 'element',
        drop: (item: { elementAddress: string, type: string }) => {
            if (item.elementAddress === ELEMENT_ADDRESS.FORM) {
                dispatch(addField({elementType: item.type, id: nanoid(), dropid: setDropId()}))
            }
            if (item.elementAddress === ELEMENT_ADDRESS.DROPPED) {
                // console.log(item)
            }
        },

        collect: (monitor: DropTargetMonitor) => ({
            isOver: monitor.isOver(),
            dropHere: monitor.isOver()
        }),
    }));

    const moveCard = useCallback((dragIndex: number, hoverIndex: number) => {
        setCards((prevCards: any[]) =>
            update(prevCards, {
                $splice: [
                    [dragIndex, 1],
                    [hoverIndex, 0, prevCards[dragIndex] as any],
                ],
            }),
        )
    }, [])

    const fieldsRender = cards.map((item: any, index: number) => {
        return (
            <DroppedElement
                key={item.id}
                id={item.id}
                index={index}
                moveCard={moveCard}
            />
        )
    })

    return (
        <div ref={drop} className='PlaygroundArena' style={{borderColor: isOver ? '#58cfef' : ''}}>

            {fieldsRender}

            {isOver && <div className='PlaygroundArena__DropHere'>DROP THE ELEMENT HERE</div>}

        </div>
    );
});
