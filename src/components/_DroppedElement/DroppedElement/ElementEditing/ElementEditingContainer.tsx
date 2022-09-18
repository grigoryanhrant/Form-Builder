import "./ElementEditing.sass"
import React from "react";
import {ElementEditing} from "./ElementEditing";

export interface IElementEditingContainer {
    id: string
    name: string | undefined
    placeholder: string | undefined
    type?: string | undefined
}

export const ElementEditingContainer = ({ name, id, placeholder, type }: IElementEditingContainer) => {
    return (
        <div className='ElementEditing'>
            <span className='ElementEditing__Name'>{ name }</span>

            <div className='ElementEditing__Group'>
                <ElementEditing id={id} name={name} placeholder={placeholder} type={type}/>
            </div>
        </div>
    );
};
