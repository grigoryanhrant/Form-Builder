import _uniqueId from "lodash/uniqueId";
import {getCurrentDate} from "../../../../../../global/helpers";
import {IElementDefinition} from "../../ElementDefintion";
import "./Input.sass"

export const Input = ({type, name, placeholder, value, descriptionForInput}: IElementDefinition) => {

    const $htmlForInput = _uniqueId(`${name} - `)

    const $descriptionForInput = (
        descriptionForInput &&
        <label
            className='DroppedElement__Description'
            htmlFor={$htmlForInput}>
            {descriptionForInput}
        </label>
    )

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
