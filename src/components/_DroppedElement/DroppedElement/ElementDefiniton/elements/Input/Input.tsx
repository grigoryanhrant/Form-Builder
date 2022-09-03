import {IElementDefinition} from "../../types/types";

export const Input = ({id, type, name, placeholder, value}: IElementDefinition) => {

    return (
        <>
            <input
                name={name}
                placeholder={placeholder}
                value={value}
                className='DroppedElement__Input'
                type={type}
                onChange={() => {}} />
        </>
    );
};
