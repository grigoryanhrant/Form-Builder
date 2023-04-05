import type { ChangeEvent, FC, ReactElement } from 'react'
import type { EditorDefiningProps } from './../../ElementEditing/EditorDefining'
import { useAppDispatch } from '@store/hooks'
import { placeholderChange, placeholderRemove } from '@store/slices/fields/fields'
import { FaRemoveFormat } from '@static/icons'
import { FieldRemove, Input, InputWrapper, Label } from '../../ElementEditing/ElementEditing.styled'

type InputEditorProps = Pick<EditorDefiningProps, 'id' | 'placeholder'>

export const InputEditor: FC<InputEditorProps> = ({ id, placeholder }): ReactElement => {
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
