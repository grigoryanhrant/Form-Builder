import type { ChangeEvent, FC, ReactElement } from 'react'
import { placeholderChange, placeholderRemove } from '@store/slices/fields/fields'
import { useAppDispatch } from '@store/hooks'
import { FaRemoveFormat } from '@static/icons'
import { FieldRemove, Input, InputWrapper, Label } from '../../ElementEditing/ElementEditing.styled'

export interface ITextareaEditing {
    id?: string
    placeholder?: string
}

export const TextareaEditor: FC<ITextareaEditing> = ({ id, placeholder }): ReactElement => {
    const dispatch = useAppDispatch()

    const placeholderChangeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
        dispatch(placeholderChange({ id, inputPlaceholder: evt.target.value }))
    }

    const placeholderRemoveHandler = () => dispatch(placeholderRemove({ id }))

    return (
        <>
            <Label htmlFor={id}>Placeholder</Label>
            <InputWrapper>
                <Input id={id} value={placeholder} onChange={placeholderChangeHandler} />
                {placeholder && (
                    <FieldRemove onClick={placeholderRemoveHandler}>
                        <FaRemoveFormat />
                    </FieldRemove>
                )}
            </InputWrapper>
        </>
    )
}
