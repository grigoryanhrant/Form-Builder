import {contactInfoElementsRender} from "./data/RenderList";
import "./FormElements.sass";

export const FormElements = () => {
    return (
        <div className='FormElements'>
            <span className='FormElements__Name'>Contact Info</span>
            <div className='FormElements__Group'>
                {contactInfoElementsRender}
            </div>
        </div>
    );
};
