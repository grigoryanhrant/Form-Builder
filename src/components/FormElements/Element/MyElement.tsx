import {DragSourceMonitor, useDrag} from "react-dnd";
import "./MyElement.sass";
import {ELEMENT_ADDRESS_FORM} from "../../../global/constants";
import {ReactElement} from "react";
import {addField} from "../../../store/slices/fields/fields";
import {useAppDispatch} from "../../../store/hooks";

interface IFormElement {
    elementAddress?: typeof ELEMENT_ADDRESS_FORM,
    icon: ReactElement

    type: string
    name: string
    description: string
    descriptionForInput?: string
    placeholder: string
    required?: boolean
}


export const MyElement = (
    {
        elementAddress = ELEMENT_ADDRESS_FORM,
        icon,

        type,
        name,
        description,
        descriptionForInput,
        placeholder,
        required

    }: Readonly<IFormElement>) => {

    const [{isDragging}, drag] = useDrag(() => ({
        type: 'element',
        item: {
            elementAddress,

            type,
            name,
            description,
            descriptionForInput,
            placeholder,
            required
        },

        collect: (monitor: DragSourceMonitor) => ({
            isDragging: !!monitor.isDragging(),
        }),

    }));

    const dispatch = useAppDispatch()

    const addFieldHandler = () => {
        dispatch(addField({
            type: type,
            name: name,
            description: description,
            descriptionForInput: descriptionForInput,
            placeholder: placeholder,
            required: required,
            editMode: false,
        }))
    }

    return (
        <div className='MyElement'
             ref={drag}
             style={{cursor: isDragging ? 'move' : 'move'}}
             onClick={addFieldHandler}
        >
            <div className='MyElement__Icon'>{icon}</div>
            <span className='MyElement__Name'>{name}</span>
        </div>
    );
};
