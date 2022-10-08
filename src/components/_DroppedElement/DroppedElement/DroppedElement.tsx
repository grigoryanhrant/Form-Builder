import {useAppDispatch} from "../../../store/hooks";
import {editModeOn, removeField, updateFields} from "../../../store/slices/fields/fields";
import {ElementDefinition} from "./ElementDefiniton/ElementDefintion";
import {BsArrowsMove, BsTrash, GrDocumentConfig} from "../../../common/Icons";
import {RefObject} from "react";
import {Identifier} from "dnd-core";
import './DroppedElement.sass';
import _ from "lodash";

interface IDroppedElement {
    isDragging: boolean,
    DroppedRef: RefObject<HTMLDivElement>,
    handlerId: Identifier | null,

    id: string | undefined,
    type: string | undefined,

    name: string | undefined,
    description: string | undefined,
    descriptionForInput: string | undefined,
    placeholder: string | undefined,
    required: boolean | undefined,
    value: string | undefined,
    editMode: boolean | undefined
}

export const DroppedElement = (
    {
        isDragging,
        DroppedRef,
        handlerId,

        id,
        type,

        name,
        description,
        descriptionForInput,
        placeholder,
        required,
        value,
    }: IDroppedElement) => {

    const dispatch = useAppDispatch()

    const cardRemoveHandler = () => {
        if(!id) return

        dispatch(removeField(id))
    }

    const setEditing = (e: any) => {
        console.log(e.target.className)
        if(e.target.className === 'select__input-container css-ujecln-Input2') {
            return false
        }
        dispatch(editModeOn(id))
    }

    return (
        <div
            className='DroppedElement'
            style={{opacity: isDragging ? 1 : 1,}} onClick={setEditing}>

            <div
                className={isDragging ? 'DroppedElement__isDragging' : 'DroppedElement__isNotDragging'}
                ref={DroppedRef}
                data-handler-id={handlerId}>

                <div className='DroppedElementTools'>
                    <div className='DroppedElementTools__Icon DroppedElementTools__RemoveIcon'
                        onClick={cardRemoveHandler}>
                        <BsTrash />
                    </div>

                    <div className='DroppedElementTools__Icon DroppedElementTools__ConfigIcon'>
                        <GrDocumentConfig />
                    </div>
                </div>

                <div className='DroppedElement__Move'>
                    <BsArrowsMove/>
                </div>

                <div className='DroppedElement__Details'>
                    <span className='DroppedElement__Description'>{description}</span>

                    <div className='DroppedElement__Definition'>
                        <ElementDefinition
                            id={id}
                            type={type}
                            name={name}
                            placeholder={placeholder}
                            value={value}
                            descriptionForInput={descriptionForInput}
                            required={required}
                        />
                    </div>
                </div>

            </div>
        </div>
    );
};
