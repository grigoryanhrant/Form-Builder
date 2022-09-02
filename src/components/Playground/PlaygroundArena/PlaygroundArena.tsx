import React, {useCallback, useEffect, useRef, useState} from "react";
import {nanoid} from "@reduxjs/toolkit";
import {DropTargetMonitor, useDrop} from "react-dnd";
import {ELEMENT_ADDRESS} from "../../../globalTypes/elementTypes";
import {setDropId} from "../../../helpers";
import { useAppSelector, useAppDispatch } from "../../../store/hooks";
import {addField, updateFields} from "../../../store/slices/fields/fields";
import update from 'immutability-helper';
import {IElement} from "../../../store/slices/fields/types";
import {DroppedElementContainer} from "../../_DroppedElement/DroppedElementContainer";
import "./PlaygroundArena.sass";
import _ from "lodash";

export const PlaygroundArena = () => {

    const dispatch = useAppDispatch()

    const { fields } = useAppSelector((state) => state.fieldsSlices)

    const [cards, setCards] = useState(fields);

    useEffect(() => {
        setCards(fields)
    }, [fields])

    useEffect(() => {
        myElement.current.addEventListener('mouseleave', mouseLeaveUpdateHandler, false)

        return () => {
            myElement.current.removeEventListener('mouseleave', mouseLeaveUpdateHandler, false)
        }
    }, [cards, fields])

    const mouseLeaveUpdateHandler = () => {
        if(!_.isEqual(cards, fields)) {
            dispatch(updateFields(cards))
        }
    }

    const myElement = useRef<any>(null);

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
                <DroppedElementContainer
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
        }, [],
    )

    return (
        <div ref={myElement} className='PlaygroundArenaWrapper'>
            <div ref={drop} className='PlaygroundArena' style={{borderColor: isOver ? '#58cfef' : ''}}>

                {cards.map((card, i) => fieldsRenderCallback(card, i))}

                {isOver && <div className='PlaygroundArena__DropHere'>DROP THE ELEMENT HERE</div>}
            </div>
        </div>
    );
};
