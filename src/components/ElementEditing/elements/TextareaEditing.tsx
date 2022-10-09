import React from 'react';
import {placeholderChange, placeholderRemove} from "../../../store/slices/fields/fields";
import {useAppDispatch} from "../../../store/hooks";
import {FaRemoveFormat} from "../../../common/Icons";

export interface ITextareaEditing {
    id: string | undefined
    name: string | undefined
    placeholder: string | undefined
}

export const TextareaEditing = ({id, name, placeholder}: ITextareaEditing) => {

    const dispatch = useAppDispatch()

    const placeholderChangeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(placeholderChange({id, inputPlaceholder: evt.target.value}))
    }

    const placeholderRemoveHandler = () => dispatch(placeholderRemove({id}))

    const fieldRemove = placeholder && (
        <div className='ElementEditing__FieldRemove' onClick={placeholderRemoveHandler}>
            <FaRemoveFormat />
        </div>
    )

    return (
        <div className='ElementEditing__Block'>
            <label className='ElementEditing__Label' htmlFor={id}>Placeholder</label>
            <div className='ElementEditing__InputWrapper'>
                <input
                    id={id}
                    className='ElementEditing__Input'
                    value={placeholder}
                    onChange={placeholderChangeHandler}/>
                {fieldRemove}
            </div>
        </div>
    );
};
