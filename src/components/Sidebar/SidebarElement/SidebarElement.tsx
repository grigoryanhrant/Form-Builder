import type { FC, ReactElement } from 'react'
import type { DragSourceMonitor } from 'react-dnd'
import type { ElementMostBasicProps } from '../../../common/types'
import type { ElementAdditionalProps } from '../../../common/types'
import { useDrag } from 'react-dnd'
import { addField } from '@store/slices/fields/fields'
import { useAppDispatch } from '@store/hooks'
import { memo } from 'react'
import { ELEMENT_ADDRESS_FORM } from '../../../common/constants'
import { Icon, Main, Title } from './SidebarElement.styled'

interface SidebarElementProps extends ElementMostBasicProps {
  icon: ReactElement
}

type SidebarElementType = SidebarElementProps & ElementAdditionalProps

export const SidebarElement: FC<Readonly<SidebarElementType>> = memo(
  ({
    icon,
    elementAddress = ELEMENT_ADDRESS_FORM,
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
        }),
      )
    }

    return (
      <Main ref={drag} onClick={addFieldHandler}>
        <Icon>{icon}</Icon>
        <Title>{name}</Title>
      </Main>
    )
  },
)

SidebarElement.displayName = 'SidebarElement'
