import {basicElementsRender} from "./data/RenderList";
import "./FormElements.sass";

export const FormElements = () => {
    return (
        <div className='FormElements'>
            <span className='FormElements__Name'>BASIC ELEMENTS</span>
            <div className='FormElements__Group'>
                {basicElementsRender}
            </div>
        </div>
    );
};
