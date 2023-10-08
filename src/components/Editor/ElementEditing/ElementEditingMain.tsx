import type { ChangeEvent, FC, ReactElement } from 'react'
import { EditorDefining } from './EditorDefining'
import { AiFillCloseSquare, FaRemoveFormat } from '@static/icons'
import { useAppDispatch, useAppSelector } from '@store/hooks'
import { descriptionChange, descriptionRemove, editModeOff } from '@store/slices/fields/fields'
import { memo } from 'react'
import {
  Close,
  Details,
  EditableElement,
  FieldRemove,
  Input,
  InputWrapper,
  Label,
  Title,
} from './ElementEditing.styled'
import { NO_EDITABLE_ELEMENT } from '@common/constants'

export const ElementEditingMain: FC = memo((): ReactElement => {
  const dispatch = useAppDispatch()

  const { fields } = useAppSelector((state) => state.fieldsSlices)

  const fieldIsEditing = fields.find(({ editMode }) => editMode)

  if (fieldIsEditing === NO_EDITABLE_ELEMENT) {
    return <></>
  }

  const { id, name, placeholder, type, description } = fieldIsEditing

  const editModeOffHandler = () => {
    dispatch(editModeOff({ id }))
  }

  const descriptionChangeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    dispatch(descriptionChange({ id, description: evt.target.value }))
  }

  const descriptionRemoveHandler = () => dispatch(descriptionRemove({ id }))

  return (
    <EditableElement>
      <Close onClick={editModeOffHandler}>
        <AiFillCloseSquare />
      </Close>

      <Title>{name}</Title>

      <Details>
        <Label htmlFor='description'>Description</Label>
        <InputWrapper>
          <Input id='description' value={description} onChange={descriptionChangeHandler} />
          {description && (
            <FieldRemove onClick={descriptionRemoveHandler}>
              <FaRemoveFormat />
            </FieldRemove>
          )}
        </InputWrapper>
      </Details>

      {EditorDefining({ id, type, placeholder })}
    </EditableElement>
  )
})

ElementEditingMain.displayName = 'ElementEditingMain'
