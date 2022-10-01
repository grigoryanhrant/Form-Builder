import React from 'react';
import {useAppDispatch} from "../../../store/hooks";
import {placeholderChange} from "../../../store/slices/fields/fields";

export interface IEditingInput {
    id: string | undefined
    name: string | undefined
    placeholder: string | undefined
}

export const InputEditing = ({ id, placeholder, name }: IEditingInput) => {

    const dispatch = useAppDispatch()
    const placeholderChangeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(placeholderChange({id, inputPlaceholder: evt.target.value}))
    }

    return (
        <div className='ElementEditing__Block'>
            <label className='ElementEditing__Label' htmlFor={id}>Placeholder</label>
            <input
                id={id}
                className='ElementEditing__Input'
                value={placeholder}
                onChange={placeholderChangeHandler}/>
        </div>
    );
};
