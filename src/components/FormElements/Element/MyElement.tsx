import {DragSourceMonitor, useDrag} from "react-dnd";
import {IFormElement} from "./types/types";
import "./MyElement.sass";
import {ELEMENT_ADDRESS} from "../../../global/enums";

export const MyElement = (
    {
        elementAddress = ELEMENT_ADDRESS.FORM,
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
