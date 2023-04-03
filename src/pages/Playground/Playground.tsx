import {SidebarForm} from "@components/Sidebar/SidebarForm/SidebarForm";
import {PlaygroundArena} from "@components/Playground/PlaygroundArena/PlaygroundArena";
import {ElementEditingMain} from "@components/Editor/ElementEditing/ElementEditingMain";
import {useAppSelector} from "@store/hooks";
import {Main} from "./Playground.styled";

export const Playground = () => {

    const {fields} = useAppSelector((state) => state.fieldsSlices)

    const editableElement = fields.find(item => item.editMode === true);

    return (
        <Main>
            <SidebarForm/>
            <PlaygroundArena/>
            {editableElement && <ElementEditingMain {...editableElement}/>}
        </Main>
    );
};
