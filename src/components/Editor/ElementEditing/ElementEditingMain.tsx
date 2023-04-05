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
import { NO_EDITABLE_ELEMENT } from '@global/constants'

export type FieldIsEditingProps = {
  id: string
  name: string
  description: string
  type: string
  placeholder: string
}

export const ElementEditingMain: FC = memo((): ReactElement => {
  const dispatch = useAppDispatch()

  const { fields } = useAppSelector((state) => state.fieldsSlices)

  const FieldIsEditing = fields.find(({editMode}) => editMode)

  if (FieldIsEditing === NO_EDITABLE_ELEMENT) {
    return <></>
  }

  const { id, name, placeholder, type, description } = FieldIsEditing as FieldIsEditingProps

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

      <Details>{EditorDefining({ id, type, placeholder })}</Details>
    </EditableElement>
  )
})

ElementEditingMain.displayName = 'ElementEditingMain'
