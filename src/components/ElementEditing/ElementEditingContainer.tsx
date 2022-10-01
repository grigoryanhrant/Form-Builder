import "./ElementEditing.sass"
import React from "react";
import {ElementEditing} from "./ElementEditing";
import {useAppSelector} from "../../store/hooks";

export const ElementEditingContainer = () => {

    const {fields} = useAppSelector((state) => state.fieldsSlices)

    const editingItem = fields.filter(item => item.editMode)[0]

    if (!editingItem) return false

    return (
        <div className='ElementEditing'>
            <span className='ElementEditing__Name'>{editingItem.name}</span>

            <div className='ElementEditing__Group'>
                <ElementEditing
                    id={editingItem.id}
                    name={editingItem.name}
                    placeholder={editingItem.placeholder}
                    type={editingItem.type}/>
            </div>
        </div>
    );
};
