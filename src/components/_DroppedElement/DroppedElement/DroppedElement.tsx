import {BsTrash} from "@react-icons/all-files/bs/BsTrash";
import {GrDocumentConfig} from "@react-icons/all-files/gr/GrDocumentConfig";
import {useAppDispatch} from "../../../store/hooks";
import {removeField} from "../../../store/slices/fields/fields";
import {IDroppedElementCard} from "./types/types";
import {MovingIcon} from "../../../common/Icons/MoveIcon";
import {DroppedElementBottom} from "./DroppedElementBottom/DroppedElementBottom";
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
        placeholder,
        value,
    }: IDroppedElementCard) => {

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
                    <MovingIcon/>
                </div>

                <div className='DroppedElement__Details'>
                    <span className='DroppedElement__Description'>{description}</span>

                    <DroppedElementBottom id={id} type={type} name={name} placeholder={placeholder} value={value}/>

                    {/*<input*/}
                    {/*    name={name}*/}
                    {/*    placeholder={placeholder}*/}
                    {/*    value={value}*/}
                    {/*    className='DroppedElement__Input'*/}
                    {/*    type={'text'}*/}
                    {/*    onChange={() => {}} />*/}
                </div>

            </div>
        </div>
    );
};
