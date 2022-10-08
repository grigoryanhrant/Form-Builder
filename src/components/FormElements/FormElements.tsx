import {contactInfoElementsRender, specialElementsRender} from "./data/renderList";
import "./FormElements.sass";
import {memo} from "react";

export const FormElements = memo( () => {

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
});
