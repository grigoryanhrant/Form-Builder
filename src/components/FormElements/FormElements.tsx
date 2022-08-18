import {TextIcon} from "./Icons/TextIcon";
import {MyElement} from "./Element/MyElement";
import "./FormElements.sass";
import EmailIcon from "./Icons/EmailIcon";

export const FormElements = () => {

    return (
        <div className='FormElements'>
            <span className='FormElements__Name'>BASIC ELEMENTS</span>
            <div className='FormElements__Group'>
                <MyElement
                    type='TEXT_INPUT'
                    name='Text'
                    description="I'm a text field, type in any text you want"
                    placeholder=''

                    icon={<TextIcon/>}/>

                <MyElement
                    type='EMAIL_INPUT'
                    name='Email'
                    description='Whats your name?'
                    placeholder=''

                    icon={<EmailIcon/>}/>


            </div>
        </div>
    );
};
