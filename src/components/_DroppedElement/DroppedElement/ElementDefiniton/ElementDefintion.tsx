import React from 'react';
import {setInputType} from "./helpers";
import {FileUpload, Input, MySelect, Textarea} from "./elements";
import {IElementDefinition} from "./types/types";

export const ElementDefinition = ({id, type, name, placeholder, value, descriptionForInput}: IElementDefinition) => {

    switch(type) {
        case 'TEXT_INPUT':
        case 'EMAIL_INPUT':
        case 'PHONE_INPUT':
        case 'SHORT_TEXT':
        case 'CHECKBOX':
        case 'DATEPICKER':
            const $type = setInputType(type);

            return (
                <Input
                    id={id}
                    name={name}
                    placeholder={placeholder}
                    descriptionForInput={descriptionForInput}
                    value={value}
                    type={$type}/>
            )

        case 'LONG_TEXT':
            return (
                <Textarea
                    id={id}
                    name={name}
                    placeholder={placeholder}
                    value={value}/>
            )

        case 'SELECT':
            return (
                <MySelect />
            )

        case 'MULTISELECT':
            return (
                <MySelect multiselect={true}/>
            )

        case 'UPLOAD':
            return (
                <FileUpload />
            )
        default:
    }

    // return null
};
