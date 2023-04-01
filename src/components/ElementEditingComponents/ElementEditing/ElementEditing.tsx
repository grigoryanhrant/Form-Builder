import {
    CHECKBOX,
    DATEPICKER,
    EMAIL_INPUT,
    LONG_TEXT, MULTISELECT,
    PHONE_INPUT, SELECT,
    SHORT_TEXT,
    TEXT_INPUT, UPLOAD
} from "../../../global/constants";
import {InputEditing} from "../elements/InputEditor/InputEditing";
import {TextareaEditing} from "../elements/TextareaEditor/TextareaEditing";
import {SelectEditing} from "../elements/SelectEditor/SelectEditing";
import {MultiselectEditing} from "../elements/MultiselectEditor/MultiselectEditing";
import {FileUploadEditing} from "../elements/UploadEditor/FileUploadEditing";

export interface IElementEditing {
    id?: string
    name?: string
    placeholder?: string
    type?: string
}

export const ElementEditing = ({id, name, placeholder, type}: IElementEditing) => {

    switch (type) {
        case TEXT_INPUT:
        case EMAIL_INPUT:
        case PHONE_INPUT:
        case SHORT_TEXT:
        case CHECKBOX:
        case DATEPICKER:

            return (
                <InputEditing id={id} placeholder={placeholder}/>
            )

        case LONG_TEXT:

            return (
                <TextareaEditing id={id} placeholder={placeholder}/>
            )

        case SELECT:

            return (
                <SelectEditing id={id} name={name}/>
            )

        case MULTISELECT:

            return (
                <MultiselectEditing/>
            )

        case UPLOAD:

            return (
                <FileUploadEditing/>
            )
    }

    return null
};
