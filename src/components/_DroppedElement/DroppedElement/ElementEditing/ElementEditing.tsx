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
import {TextareaEditing} from "./elements/TextareaEditing";
import {SelectEditing} from "./elements/SelectEditing";
import {MultiselectEditing} from "./elements/MultiselectEditing";
import {FileUploadEditing} from "./elements/FileUploadEditing";

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
                <TextareaEditing />
            )

        case SELECT:

            return (
                <SelectEditing />
            )

        case MULTISELECT:

            return (
                <MultiselectEditing />
            )

        case UPLOAD:

            return (
                <FileUploadEditing />
            )
    }


    return null
};
