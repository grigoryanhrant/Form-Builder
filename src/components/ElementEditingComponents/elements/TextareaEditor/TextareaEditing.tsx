import React from 'react';
import {placeholderChange, placeholderRemove} from "../../../../store/slices/fields/fields";
import {useAppDispatch} from "../../../../store/hooks";
import {FaRemoveFormat} from "../../../../static/icons";
import {FieldRemove, Input, InputWrapper, Label} from "../../ElementEditing/ElementEditing.styled";

export interface ITextareaEditing {
    id: string | undefined
    placeholder: string | undefined
}

export const TextareaEditing = ({id, placeholder}: ITextareaEditing) => {

    const dispatch = useAppDispatch()

    const placeholderChangeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(placeholderChange({id, inputPlaceholder: evt.target.value}))
    }

    const placeholderRemoveHandler = () => dispatch(placeholderRemove({id}))

    return (
        <>
            <Label htmlFor={id}>Placeholder</Label>
            <InputWrapper>
                <Input
                    id={id}
                    value={placeholder}
                    onChange={placeholderChangeHandler}/>
                {placeholder &&
                    <FieldRemove onClick={placeholderRemoveHandler}>
                        <FaRemoveFormat/>
                    </FieldRemove>
                }
            </InputWrapper>
        </>
    );
};
