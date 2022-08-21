import {EmailIcon, NameIcon, PhoneIcon, TextIcon} from "../Icons";
import {IMyElementList} from "./types";

export const myElementList: IMyElementList = {
    basicElements: [
        {
            type: "TEXT_INPUT",
            name: "Text",
            description: "I'm a text field, type in any text you want",
            placeholder: '',
            icon: <TextIcon />,
            id: 1,
        },

        {
            type: "EMAIL_INPUT",
            name: "Email",
            description: "Your Email",
            placeholder: '',
            icon: <EmailIcon/>,
            id: 2,
        },

        {
            type: "TEXT_INPUT",
            name: "Name",
            description: "Whats your name?",
            placeholder: '',
            icon: <NameIcon/>,
            id: 3,
        },

        {
            type: "PHONE_INPUT",
            name: "Phone",
            description: "Your Phone Number",
            placeholder: '',
            icon: <PhoneIcon/>,
            id: 4,
        },
    ]
}
