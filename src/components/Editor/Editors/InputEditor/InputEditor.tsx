import type { ChangeEvent, FC, ReactElement } from 'react'
import type { EditorDefiningProps } from '@components/Editor/ElementEditing/EditorDefining'
import { useAppDispatch } from '@store/hooks'
import { placeholderChange, placeholderRemove } from '@store/slices/fields/fields'
import { FaRemoveFormat } from '@static/icons'
import {
  FieldRemove,
  Input,
  InputWrapper,
  Label,
} from '@components/Editor/ElementEditing/ElementEditing.styled'
import { nanoid } from '@reduxjs/toolkit'

type InputEditorProps = Pick<EditorDefiningProps, 'id' | 'placeholder'>

export const InputEditor: FC<InputEditorProps> = ({ id, placeholder }): ReactElement => {
  const dispatch = useAppDispatch()

  const placeholderChangeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    dispatch(placeholderChange({ id, inputPlaceholder: evt.target.value }))
  }

  const placeholderRemoveHandler = () => dispatch(placeholderRemove({ id }))

  const nanoId = nanoid()

  if (placeholder === undefined) {
    return <></>
  }

  return (
    <>
      <Label htmlFor={id + nanoId}>Placeholder</Label>
      <InputWrapper>
        <Input id={id + nanoId} value={placeholder} onChange={placeholderChangeHandler} />
        <FieldRemove onClick={placeholderRemoveHandler}>
          <FaRemoveFormat />
        </FieldRemove>
      </InputWrapper>
    </>
  )
}
