import "./ElementEditing.sass"
import React from "react";
import {ElementEditing} from "./ElementEditing";
import {AiFillCloseSquare, FaRemoveFormat} from "../../common/Icons/index"
import {useAppDispatch} from "../../store/hooks";
import {descriptionChange, descriptionRemove, editModeOff} from "../../store/slices/fields/fields";

interface IElementEditingContainer {
    element: any
}

export const ElementEditingContainer = ({element}: IElementEditingContainer) => {

    const dispatch = useAppDispatch()

    const editModeOffHandler = () => {
        dispatch(editModeOff())
    }

    const descriptionChangeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(descriptionChange({id: element.id, description: evt.target.value}))
    }

    const descriptionRemoveHandler = () => {
        dispatch(descriptionRemove({id: element.id}))
    }

    const fieldRemove = element.description && (
        <div className='ElementEditing__FieldRemove' onClick={descriptionRemoveHandler}>
            <FaRemoveFormat/>
        </div>
    )

    return (
        <div className='ElementEditing'>
            <span className='ElementEditing__Close' onClick={editModeOffHandler}>
                <AiFillCloseSquare/>
            </span>
            <span className='ElementEditing__Name'>{element?.name}</span>

            <div className="ElementEditing__Group">
                <label className="ElementEditing__Label" htmlFor="description">Description</label>
                <div className='ElementEditing__InputWrapper'>
                    <input
                        id="description"
                        className="ElementEditing__Input"
                        value={element?.description}
                        onChange={descriptionChangeHandler}
                    />
                    {fieldRemove}
                </div>
            </div>

            <div className='ElementEditing__Group'>
                <ElementEditing
                    id={element?.id}
                    name={element?.name}
                    placeholder={element?.placeholder}
                    type={element?.type}/>
            </div>
        </div>
    );
};
