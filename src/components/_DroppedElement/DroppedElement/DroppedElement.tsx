import {useAppDispatch} from "../../../store/hooks";
import {removeField} from "../../../store/slices/fields/fields";
import {ElementDefinition} from "./ElementDefiniton/ElementDefintion";
import {BsArrowsMove, BsTrash, GrDocumentConfig} from "../../../common/Icons";
import {IDroppedElement} from "./types/types";
import './DroppedElement.sass';

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
        value,
    }: IDroppedElement) => {

    const dispatch = useAppDispatch()

    const cardRemoveHandler = () => {
        dispatch(removeField(id))
    }

    return (
        <div
            className='DroppedElement'
            style={{opacity: isDragging ? 1 : 1,}}>

            <div
                className={isDragging ? 'DroppedElement__isDragging' : 'DroppedElement__isNotDragging'}
                ref={DroppedRef}
                data-handler-id={handlerId}>

                <div className='DroppedElementTools'>
                    <div
                        className='DroppedElementTools__Icon DroppedElementTools__RemoveIcon'
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
                        <ElementDefinition id={id} type={type} name={name} placeholder={placeholder} value={value} descriptionForInput={descriptionForInput}/>
                    </div>
                </div>

            </div>
        </div>
    );
};
