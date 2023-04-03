import type {IElementDefinition} from "../../DroppedElement/ElementDefintion";
import _uniqueId from "lodash/uniqueId";
import {getCurrentDate} from "../../../../helpers/getCurrentDate";
import {Main, DefInput, Label} from "./InputDefinition.styled";

export const InputDefinition = ({type, name, placeholder, value, descriptionForInput}: IElementDefinition) => {

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
