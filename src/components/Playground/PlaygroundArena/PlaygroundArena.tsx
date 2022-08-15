import React, {useCallback} from "react";
import {nanoid} from "@reduxjs/toolkit";
import {DropTargetMonitor, useDrop} from "react-dnd";
import {PLAYGROUNDCASES} from "./data/types";
import {ELEMENT_ADDRESS} from "../../../globalTypes/elementTypes";
import {setDropId} from "../../../helpers";
import { useAppSelector, useAppDispatch } from "../../../store/hooks";
import {addField} from "../../../store/slices/fields/fields";
import {DroppedElement} from "../../DroppedElements/DroppedElement/DroppedElement";
import "./PlaygroundArena.sass";

export const PlaygroundArena = React.memo(() => {

    const { fields } = useAppSelector((state) => state.fieldsSlices)

    const dispatch = useAppDispatch()

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

    const moveCard = useCallback((drag_id: number, drop_id: number) => {
        dispatch({
            type: PLAYGROUNDCASES.UPDATE_ELEMENTS,
            data: {
                drag_id: drag_id,
                drop_id: drop_id,
            }
        })}, [])


    const fieldsRender = fields.map((item: { elementType: string, id: string, dropid: number }, index: number) => {
        return (
            <DroppedElement
                key={item.id}
                elementType={item.elementType}
                id={item.id}
                dropid={item.dropid}
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
