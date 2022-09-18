import {IElementDefinition} from "../../ElementDefintion";

export const Textarea = ({id, type, name, placeholder, value}: IElementDefinition) => {
    return (
        <>
            <textarea
                name={name}
                placeholder={placeholder}
                defaultValue={value}
                className='DroppedElement__Textarea'
                onChange={() => {}} />
        </>
    );
};
