import type { IElementDefinition } from '../../DroppedElement/ElementDefintion'
import type { FC, ReactElement } from 'react'

export const TextareaDefinition: FC<IElementDefinition> = ({
    name,
    placeholder,
    value,
}): ReactElement => {
    return (
        <>
            <textarea
                name={name}
                placeholder={placeholder}
                defaultValue={value}
                className='DroppedElement__Textarea'
                onChange={() => 'temp variable'}
            />
        </>
    )
}
