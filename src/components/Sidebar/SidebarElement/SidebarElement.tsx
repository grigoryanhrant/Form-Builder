import type { FC, ReactElement } from 'react'
import type { DragSourceMonitor } from 'react-dnd'
import { useDrag } from 'react-dnd'
import { addField } from '@store/slices/fields/fields'
import { useAppDispatch } from '@store/hooks'
import { ELEMENT_ADDRESS_FORM } from '@global/constants'
import { Icon, Main, Title } from './SidebarElement.styled'

interface IElement {
    elementAddress?: typeof ELEMENT_ADDRESS_FORM
    icon: ReactElement
    type: string
    name: string
    description: string
    descriptionForInput?: string
    placeholder?: string
    required?: boolean
}

export const SidebarElement: FC<Readonly<IElement>> = ({
    elementAddress = ELEMENT_ADDRESS_FORM,
    icon,
    type,
    name,
    description,
    descriptionForInput,
    placeholder,
    required,
}): ReactElement => {
    const [, drag] = useDrag(() => ({
        type: 'element',
        item: {
            elementAddress,
            type,
            name,
            description,
            descriptionForInput,
            placeholder,
            required,
        },

        collect: (monitor: DragSourceMonitor) => ({
            isDragging: monitor.isDragging(),
        }),
    }))

    const dispatch = useAppDispatch()

    const addFieldHandler = () => {
        dispatch(
            addField({
                type: type,
                name: name,
                description: description,
                descriptionForInput: descriptionForInput,
                placeholder: placeholder,
                required: required,
                editMode: false,
            }),
        )
    }

    return (
        <Main ref={drag} onClick={addFieldHandler}>
            <Icon>{icon}</Icon>
            <Title>{name}</Title>
        </Main>
    )
}
