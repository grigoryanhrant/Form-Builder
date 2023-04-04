import type { ChangeEvent, FC, ReactElement } from 'react'
import type { IElement } from '@store/slices/fields/types'
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
import { NO_EDITABLE_ELEMENT } from '@global/constants'

export const ElementEditingMain: FC = memo((): ReactElement => {
  const dispatch = useAppDispatch()

  const { fields } = useAppSelector((state) => state.fieldsSlices)

  const editableElement = fields.find((item) => item.editMode === true)

  if (editableElement === NO_EDITABLE_ELEMENT) {
    return <></>
  }

  const { id, name, placeholder, type, description } = editableElement as IElement

  const editModeOffHandler = () => dispatch(editModeOff())

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

      <Details>{EditorDefining({ id, name, placeholder, type })}</Details>
    </EditableElement>
  )
})

ElementEditingMain.displayName = 'ElementEditingMain'
