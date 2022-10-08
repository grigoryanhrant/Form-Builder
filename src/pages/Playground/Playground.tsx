import {FormElements} from "../../components/FormElements/FormElements";
import {PlaygroundArena} from "../../components/PlaygroundArena/PlaygroundArena";
import {ElementEditingContainer} from "../../components/ElementEditing/ElementEditingContainer";
import "./Playground.sass";
import {useAppSelector} from "../../store/hooks";

export const Playground = () => {

    const {fields} = useAppSelector((state) => state.fieldsSlices)

    const editingItem = fields.find(item => item.editMode === true);

    const elementEditor = editingItem && <ElementEditingContainer element={editingItem}/>

    return (
        <div className='Playground'>
            <FormElements />
            <PlaygroundArena />
            {elementEditor}
        </div>
    );
};
