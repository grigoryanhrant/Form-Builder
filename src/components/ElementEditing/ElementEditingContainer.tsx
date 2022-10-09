import "./ElementEditing.sass"
import React from "react";
import {ElementEditing} from "./ElementEditing";
import {AiFillCloseSquare, FaRemoveFormat} from "../../common/Icons/index"
import {useAppDispatch} from "../../store/hooks";
import {descriptionChange, descriptionRemove, editModeOff} from "../../store/slices/fields/fields";
import {IElement} from "../../store/slices/fields/types";

export const ElementEditingContainer = ({ ...rest }: Omit<IElement, "dropid">) => {

    const dispatch = useAppDispatch()

    const editModeOffHandler = () => dispatch(editModeOff())

    const descriptionChangeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(descriptionChange({id: rest.id, description: evt.target.value}))
    }

    const descriptionRemoveHandler = () => dispatch(descriptionRemove({id: rest.id}))

    const fieldRemove = rest.description && (
        <div className='ElementEditing__FieldRemove' onClick={descriptionRemoveHandler}>
            <FaRemoveFormat/>
        </div>
    )

    return (
        <div className='ElementEditing'>
            <span className='ElementEditing__Close' onClick={editModeOffHandler}>
                <AiFillCloseSquare/>
            </span>
            <span className='ElementEditing__Name'>{rest?.name}</span>

            <div className="ElementEditing__Group">
                <label className="ElementEditing__Label" htmlFor="description">Description</label>
                <div className='ElementEditing__InputWrapper'>
                    <input
                        id="description"
                        className="ElementEditing__Input"
                        value={rest?.description}
                        onChange={descriptionChangeHandler}
                    />
                    {fieldRemove}
                </div>
            </div>

            <div className='ElementEditing__Group'>
                <ElementEditing
                    id={rest?.id}
                    name={rest?.name}
                    placeholder={rest?.placeholder}
                    type={rest?.type}/>
            </div>
        </div>
    );
};
