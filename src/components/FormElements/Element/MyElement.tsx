import {DragSourceMonitor, useDrag} from "react-dnd";
import "./MyElement.sass";
import {ELEMENT_ADDRESS_FORM} from "../../../global/constants";
import {ReactElement} from "react";

export interface IFormElement {
    elementAddress?: typeof ELEMENT_ADDRESS_FORM,
    icon: ReactElement

    type: string
    name: string
    description: string
    descriptionForInput?: string
    placeholder?: string
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

    }: Readonly<IFormElement>) => {

    const [{isDragging}, drag] = useDrag(() => ({
        type: 'element',
        item: {
            elementAddress,

            type,
            name,
            description,
            descriptionForInput,
            placeholder
        },

        collect: (monitor: DragSourceMonitor) => ({
            isDragging: !!monitor.isDragging(),
        }),

    }));

    return (
        <div className='MyElement' ref={drag} style={{cursor: isDragging ? 'move' : 'move'}}>
            <div className='MyElement__Icon'>{icon}</div>
            <span className='MyElement__Name'>{name}</span>
        </div>
    );
};
