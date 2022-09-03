import {IElementDefinition} from "../../types/types";
import _uniqueId from "lodash/uniqueId";
import "./Input.sass"
import {getCurrentDate} from "../../../../../../helpers";

export const Input = ({id, type, name, placeholder, value, descriptionForInput}: IElementDefinition) => {

    const $htmlForInput = _uniqueId(`${name} - `)

    const $descriptionForInput = (
        descriptionForInput &&
        <label
            className='DroppedElement__Description'
            htmlFor={$htmlForInput}>
            {descriptionForInput}
        </label>
    )

    console.log(type)

    return (
        <div className='DroppedElement__InputWrapper'>
            <input
                id={descriptionForInput && $htmlForInput}
                name={name}
                placeholder={placeholder}
                value={type === 'date' ? getCurrentDate() : value}
                className={`DroppedElement__Input ${descriptionForInput ? 'custom-checkbox' : ''}`}
                type={type}
                onChange={() => {}} />
            {$descriptionForInput}
        </div>
    );
};
