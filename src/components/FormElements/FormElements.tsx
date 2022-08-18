import {MyElement} from "./Element/MyElement";
import "./FormElements.sass";
import {EmailIcon, NameIcon, PhoneIcon, TextIcon} from "./Icons";

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
                    description='Your Email'
                    placeholder=''

                    icon={<EmailIcon/>}/>

                <MyElement
                    type='TEXT_INPUT'
                    name='Name'
                    description='Whats your name?'
                    placeholder=''

                    icon={<NameIcon/>}/>

                <MyElement
                    type='PHONE_INPUT'
                    name='Phone'
                    description='Your Phone Number'
                    placeholder=''

                    icon={<PhoneIcon/>}/>


            </div>
        </div>
    );
};
