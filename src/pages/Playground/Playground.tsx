import {FormElements} from "../../components/FormElements/FormElements";
import {PlaygroundArena} from "../../components/PlaygroundArena/PlaygroundArena";
import {ElementEditingMain} from "../../components/ElementEditingComponents/ElementEditing/ElementEditingMain";
import {useAppSelector} from "../../store/hooks";
import {Main} from "./Playground.styled";

export const Playground = () => {

    const {fields} = useAppSelector((state) => state.fieldsSlices)

    const editingItem = fields.find(item => item.editMode === true);

    return (
        <Main>
            <FormElements />
            <PlaygroundArena />
            {editingItem && <ElementEditingMain {...editingItem}/>}
        </Main>
    );
};
