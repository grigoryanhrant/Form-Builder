import React from 'react';
import {setInputType} from "./helpers";
import {FileUpload, Input, MySelect, Textarea} from "./elements";

import {
    CHECKBOX,
    DATEPICKER,
    EMAIL_INPUT, LONG_TEXT, MULTISELECT,
    PHONE_INPUT, SELECT,
    SHORT_TEXT,
    TEXT_INPUT, UPLOAD
} from "../../../../global/constants";

export interface IElementDefinition {
    id: string | undefined
    type?: string
    name?: string
    placeholder?: string
    descriptionForInput?: string
    value?: string
    required?: boolean
}


export const ElementDefinition = ({id, type, name, placeholder, value, descriptionForInput, required}: IElementDefinition) => {

    switch(type) {
        case TEXT_INPUT:
        case EMAIL_INPUT:
        case PHONE_INPUT:
        case SHORT_TEXT:
        case CHECKBOX:
        case DATEPICKER:

            return (
                <Input
                    id={id}
                    name={name}
                    placeholder={placeholder}
                    descriptionForInput={descriptionForInput}
                    value={value}
                    required={required}
                    type={setInputType(type)}/>
            )

        case LONG_TEXT:
            return (
                <Textarea
                    id={id}
                    name={name}
                    placeholder={placeholder}
                    value={value}/>
            )

        case SELECT:
            return (
                <MySelect id={id}/>
            )

        case MULTISELECT:
            return (
                <MySelect multiselect={true} id={id}/>
            )

        case UPLOAD:
            return (
                <FileUpload />
            )
        default:
    }

    return null
};
