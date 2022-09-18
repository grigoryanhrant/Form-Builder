import {useAppSelector} from "../hooks";

export const getEditingItem = () => {

    const { fields } = useAppSelector((state) => state.fieldsSlices)

    const editingItem = fields.filter(item => item.editMode)[0]

    if(!editingItem) return false

    return {
        id: editingItem.id,
        name: editingItem.name,
        placeholder: editingItem.placeholder,
        type: editingItem.type
    }
}
