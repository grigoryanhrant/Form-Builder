import type {IElementDefinition} from "../../DroppedElement/ElementDefintion";
import {getCurrentDate} from "@helpers/getCurrentDate";
import {Main, DefInput, Label} from "./InputDefinition.styled";
import {nanoid} from "@reduxjs/toolkit";

export const InputDefinition = ({type, name, placeholder, value, descriptionForInput}: IElementDefinition) => {

    return (
        <Main>
            <DefInput
                descriptionForInput={!!descriptionForInput}
                id={descriptionForInput && nanoid()}
                name={name}
                placeholder={placeholder}
                value={type === 'date' ? getCurrentDate() : value}
                type={type}
                onChange={() => {
                }}/>
            {descriptionForInput && <Label
                htmlFor={nanoid()}>
                {descriptionForInput}
            </Label>}
        </Main>
    );
};
