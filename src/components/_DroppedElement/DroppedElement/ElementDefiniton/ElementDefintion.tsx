import React from 'react';
import {setInputType} from "./helpers";
import {Input, MySelect, Textarea} from "./elements";
import {IElementDefinition} from "./types/types";

export const ElementDefinition = ({id, type, name, placeholder, value}: IElementDefinition) => {

    switch(type) {
        case 'TEXT_INPUT':
        case 'EMAIL_INPUT':
        case 'PHONE_INPUT':
        case 'SHORT_TEXT':
            const $type = setInputType(type);

            return (
                <Input
                    id={id}
                    name={name}
                    placeholder={placeholder}
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

        case 'DROPDOWN':
            return (
                <MySelect />
            )
        default:
    }

    return null
};
