import {IElementDefinition} from "../../ElementDefiniton/ElementDefintion";

export const Textarea = ({name, placeholder, value}: IElementDefinition) => {
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
