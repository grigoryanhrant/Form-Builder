import {DragSourceMonitor, useDrag} from "react-dnd";
import {ELEMENT_ADDRESS} from "../../../globalTypes/elementTypes";
import {IFormElement} from "./types/types";
import "./MyElement.sass";

export const MyElement = ({name, type, icon, elementAddress = ELEMENT_ADDRESS.FORM}: Readonly<IFormElement>) => {

    const [{isDragging}, drag] = useDrag(() => ({
        type: 'element',
        item: {type, elementAddress},

        collect: (monitor: DragSourceMonitor) => ({
            isDragging: !!monitor.isDragging(),
        }),

    }));

    return (
        <div className='MyElement' ref={drag} style={{cursor: isDragging ? 'default' : 'default'}}>
            <div className='MyElement__Icon'>{icon}</div>
            <span className='MyElement__Name'>{name}</span>
        </div>
    );
};
