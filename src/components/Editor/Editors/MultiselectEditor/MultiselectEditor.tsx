import { EditorDefiningProps } from '@components/Editor/ElementEditing/EditorDefining'
import { FC } from 'react'
import { Main } from '@components/Editor/Editors/MultiselectEditor/MultiselectEditor.styled'

type MultiselectEditorProps = Pick<EditorDefiningProps, 'id'>

export const MultiselectEditor: FC<MultiselectEditorProps> = ({ id }) => {
  return (
    <Main>
      <div>Options List</div>+
    </Main>
  )
}
