import type {ReactNode} from "react";
import {InputEditor, TextareaEditor, SelectEditor, MultiselectEditor, FileUploadEditor} from "../Editors";
import {
    CHECKBOX,
    DATEPICKER,
    EMAIL_INPUT,
    LONG_TEXT, MULTISELECT,
    PHONE_INPUT, SELECT,
    SHORT_TEXT,
    TEXT_INPUT, UPLOAD
} from "../../../global/constants";

export interface IElementEditing {
    id?: string
    name?: string
    placeholder?: string
    type?: string
}

export const EditorDefining = ({id, name, placeholder, type}: IElementEditing): ReactNode => {

    switch (type) {
        case TEXT_INPUT:
        case EMAIL_INPUT:
        case PHONE_INPUT:
        case SHORT_TEXT:
        case CHECKBOX:
        case DATEPICKER:

            return (
                <InputEditor id={id} placeholder={placeholder}/>
            )

        case LONG_TEXT:

            return (
                <TextareaEditor id={id} placeholder={placeholder}/>
            )

        case SELECT:

            return (
                <SelectEditor id={id} name={name}/>
            )

        case MULTISELECT:

            return (
                <MultiselectEditor/>
            )

        case UPLOAD:

            return (
                <FileUploadEditor/>
            )
    }

    return <></>
};
