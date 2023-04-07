import type { FC } from 'react'
import { PlaygroundArena } from '@components/Playground/PlaygroundArena/PlaygroundArena'
import { useDrop } from 'react-dnd'
import { SidebarForm } from '@components/Sidebar/SidebarForm/SidebarForm'
import { ElementEditingMain } from '@components/Editor/ElementEditing/ElementEditingMain'
import { Main } from './Builder.styled'
import { DefaultContainer } from '@common/components/container/container.styled'

export const Builder: FC = () => {
  const [, dropZone] = useDrop(() => ({ accept: 'element' }))

  return (
    <DefaultContainer ref={dropZone}>
      <Main>
        <SidebarForm />
        <PlaygroundArena />
        <ElementEditingMain />
      </Main>
    </DefaultContainer>
  )
}
