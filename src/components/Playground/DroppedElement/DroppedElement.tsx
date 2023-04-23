import type { FC, ReactElement, RefObject } from 'react'
import type { ElementMostBasicProps } from '@common/types'
import type { Identifier } from 'dnd-core'
import type { DroppedElementMainProps } from './DroppedElementMain'
import { useAppDispatch } from '@store/hooks'
import { editModeOn, removeField } from '@store/slices/fields/fields'
import { ElementDefinition } from './ElementDefintion'
import { BsArrowsMove, BsTrash, GrDocumentConfig } from '@static/icons'
import {
  Main,
  Wrapper,
  Tools,
  ToolsIcon,
  ToolsMoveIcon,
  Details,
  Description,
} from './DroppedElement.styled'

export type DroppedElementPropsPart = ElementMostBasicProps &
  Pick<DroppedElementMainProps, 'value' | 'editMode'>

export type DroppedElementProps = DroppedElementPropsPart & {
  isDragging: boolean
  DroppedRef: RefObject<HTMLDivElement>
  handlerId: Identifier | null
  id: DroppedElementMainProps['id']
}

export const DroppedElement: FC<DroppedElementProps> = ({
  isDragging,
  DroppedRef,
  handlerId,
  id,
  type,
  name,
  description,
  descriptionForInput,
  placeholder,
  required,
  value,
  editMode,
}): ReactElement => {
  const dispatch = useAppDispatch()

  const cardRemoveHandler = () => dispatch(removeField({ id }))

  const setEditing = () => {
    if (!editMode) {
      dispatch(editModeOn({ id }))
    }
  }

  return (
    <Main onClick={setEditing}>
      <Wrapper isDragging={isDragging} ref={DroppedRef} data-handler-id={handlerId}>
        <Tools>
          <ToolsIcon onClick={cardRemoveHandler}>
            <BsTrash />
          </ToolsIcon>

          <ToolsIcon>
            <GrDocumentConfig />
          </ToolsIcon>
        </Tools>

        <ToolsMoveIcon>
          <BsArrowsMove />
        </ToolsMoveIcon>

        <Details>
          <Description>{description}</Description>

          {ElementDefinition({
            id,
            type,
            name,
            placeholder,
            value,
            descriptionForInput,
            required,
          })}
        </Details>
      </Wrapper>
    </Main>
  )
}
