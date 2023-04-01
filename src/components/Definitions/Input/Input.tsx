import _uniqueId from "lodash/uniqueId";
import {IElementDefinition} from "../../ElementDefiniton/ElementDefintion";
import {getCurrentDate} from "../../../helpers/getCurrentDate";
import {Main, DefInput, Label} from "./Input.styled";
import React from "react";

export const Input = ({type, name, placeholder, value, descriptionForInput}: IElementDefinition) => {

    const $htmlForInput = _uniqueId(`${name} - `)

    return (
        <Main>
            <DefInput
                descriptionForInput={!!descriptionForInput}
                id={descriptionForInput && $htmlForInput}
                name={name}
                placeholder={placeholder}
                value={type === 'date' ? getCurrentDate() : value}
                type={type}
                onChange={() => {
                }}/>
            {descriptionForInput && <Label
                htmlFor={$htmlForInput}>
                {descriptionForInput}
            </Label>}
        </Main>
    );
};
