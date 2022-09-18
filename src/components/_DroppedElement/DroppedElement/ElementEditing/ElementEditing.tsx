import React from "react";
import "./ElementEditing.sass"

import {
    CHECKBOX,
    DATEPICKER,
    EMAIL_INPUT,
    LONG_TEXT, MULTISELECT,
    PHONE_INPUT, SELECT,
    SHORT_TEXT,
    TEXT_INPUT, UPLOAD
} from "../../../../global/constants";
import {InputEditing} from "./elements/InputEditing";

export interface IElementEditing {
    id: string
    name: string | undefined
    placeholder: string | undefined
    type?: string | undefined
}

export const ElementEditing = ({ id, name, placeholder, type }: IElementEditing) => {

    switch(type) {
        case TEXT_INPUT:
        case EMAIL_INPUT:
        case PHONE_INPUT:
        case SHORT_TEXT:
        case CHECKBOX:
        case DATEPICKER:

            return (
                <InputEditing id={id} name={name} placeholder={placeholder}/>
            )

        case LONG_TEXT:

            return (
                <div className='ElementEditing'>
                    LONG_TEXT editing
                </div>
            )

        case SELECT:

            return (
                <div className='ElementEditing'>
                    SELECT editing
                </div>
            )

        case MULTISELECT:

            return (
                <div className='ElementEditing'>
                    MULTISELECT editing
                </div>
            )

        case UPLOAD:

            return (
                <div className='ElementEditing'>
                    UPLOAD editing
                </div>
            )
    }


    return null
};
