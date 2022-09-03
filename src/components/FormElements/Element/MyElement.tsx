import {DragSourceMonitor, useDrag} from "react-dnd";
import {ELEMENT_ADDRESS} from "../../../globalTypes/elementAddress";
import {IFormElement} from "./types/types";
import "./MyElement.sass";

export const MyElement = (
    {
        elementAddress = ELEMENT_ADDRESS.FORM,
        icon,

        type,
        name,
        description,
        placeholder,

    }: Readonly<IFormElement>) => {

    const [{isDragging}, drag] = useDrag(() => ({
        type: 'element',
        item: {
            elementAddress,

            type,
            name,
            description,
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
