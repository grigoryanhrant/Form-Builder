import "./ElementEditing.sass"
import React from "react";
import {ElementEditing} from "./ElementEditing";
import {getEditingItem} from "../../store/selectors";

interface IEditingItem {
    description: string
    descriptionForInput: string | undefined
    dropid: number
    editMode: boolean
    id: string
    name: string
    placeholder: string
    required: boolean
    type: string
}

export const ElementEditingContainer = () => {

    const editingItem: any = getEditingItem()

    return (
        <div className='ElementEditing'>
            <span className='ElementEditing__Name'>{ editingItem.name }</span>

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
