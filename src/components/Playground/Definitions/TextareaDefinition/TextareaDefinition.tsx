import type {IElementDefinition} from "../../DroppedElement/ElementDefintion";

export const TextareaDefinition = ({name, placeholder, value}: IElementDefinition) => {
    return (
        <>
            <textarea
                name={name}
                placeholder={placeholder}
                defaultValue={value}
                className='DroppedElement__Textarea'
                onChange={() => {
                }}/>
        </>
    );
};
