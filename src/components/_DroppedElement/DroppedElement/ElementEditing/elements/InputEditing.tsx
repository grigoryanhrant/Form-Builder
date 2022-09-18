import React, {useState} from 'react';
import {useAppDispatch} from "../../../../../store/hooks";
import {placeholderChange} from "../../../../../store/slices/fields/fields";

export interface IEditingInput {
    id: string
    name: string | undefined
    placeholder: string | undefined
}

export const InputEditing = ({ id, placeholder, name }: IEditingInput) => {

    const dispatch = useAppDispatch()

    const [inputPlaceholder, setInputPlaceholder] = useState(placeholder)

    const placeholderChangeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setInputPlaceholder(evt.target.value)
        dispatch(placeholderChange({id, inputPlaceholder: evt.target.value}))
    }

    const [blockDescription, setBlockDescription] = useState(placeholder)

    return (
        <div className='ElementEditing__Block'>
            <label className='ElementEditing__Label' htmlFor={id}>Placeholder</label>
            <input id={id} className='ElementEditing__Input' value={inputPlaceholder} onChange={placeholderChangeHandler}/>
        </div>
    );
};
