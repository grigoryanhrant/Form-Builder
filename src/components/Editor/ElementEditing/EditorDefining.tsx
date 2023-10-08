import type { ReactElement } from 'react'
import type { ElementFullProps } from '@common/types'
import { Details } from '@components/Editor/ElementEditing/ElementEditing.styled'
import { getEditor } from '@components/Editor/ElementEditing/utils/getEditor'

export type EditorDefiningProps = Pick<ElementFullProps, 'id' | 'type' | 'placeholder'>

type EditorDefiningType = ({ id, type, placeholder }: EditorDefiningProps) => ReactElement

export const EditorDefining: EditorDefiningType = ({ id, type, placeholder }) => {
  const editor = getEditor(type, id, placeholder)

  if (editor) {
    return <Details>{editor}</Details>
  }

  return <></>
}
