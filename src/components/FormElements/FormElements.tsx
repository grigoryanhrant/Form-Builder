import {NumberIcon} from "./Icons/NumberIcon";
import {MyElement} from "./Element/MyElement";
import "./FormElements.sass";

export const FormElements = () => {

    // console.log(`render check`);

    return (
        <div className='FormElements'>
            <span className='FormElements__Name'>BASIC ELEMENTS</span>
            <div className='FormElements__Group'>
                <MyElement name='Number' type='NUMBERINPUT' icon={<NumberIcon/>}/>
            </div>
        </div>
    );
};
