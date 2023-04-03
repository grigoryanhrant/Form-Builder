import type { IElementDefinition } from '../../DroppedElement/ElementDefintion'
import type { FC, ReactElement } from 'react'
import { getCurrentDate } from '@helpers/getCurrentDate'
import { Main, DefInput, Label } from './InputDefinition.styled'
import { nanoid } from '@reduxjs/toolkit'

export const InputDefinition: FC<IElementDefinition> = ({
    type,
    name,
    placeholder,
    value,
    descriptionForInput,
}): ReactElement => {
    return (
        <Main>
            <DefInput
                descriptionForInput={!!descriptionForInput}
                id={descriptionForInput && nanoid()}
                name={name}
                placeholder={placeholder}
                value={type === 'date' ? getCurrentDate() : value}
                type={type}
                onChange={() => 'temp variable'}
            />
            {descriptionForInput && <Label htmlFor={nanoid()}>{descriptionForInput}</Label>}
        </Main>
    )
}
