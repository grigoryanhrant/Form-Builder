import { SidebarForm } from '@components/Sidebar/SidebarForm/SidebarForm'
import { PlaygroundArena } from '@components/Playground/PlaygroundArena/PlaygroundArena'
import { ElementEditingMain } from '@components/Editor/ElementEditing/ElementEditingMain'
import { Main } from './Playground.styled'

export const Playground = () => {
    return (
        <Main>
            <SidebarForm />
            <PlaygroundArena />
            <ElementEditingMain />
        </Main>
    )
}
