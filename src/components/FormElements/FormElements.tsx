import {contactInfoElementsRender, specialElementsRender} from "./data/RenderList";
import "./FormElements.sass";

export const FormElements = () => {
    return (
        <div className='FormElements'>
            <div className='FormElements__Wrapper'>
                <span className='FormElements__Name'>Contact Info</span>
                <div className='FormElements__Group'>
                    {contactInfoElementsRender}
                </div>
            </div>

            <div className='FormElements__Wrapper'>
                <span className='FormElements__Name'>Special</span>
                <div className='FormElements__Group'>
                    {specialElementsRender}
                </div>
            </div>
        </div>
    );
};
