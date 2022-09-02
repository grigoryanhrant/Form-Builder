import {EmailIcon, NameIcon, PhoneIcon, TextIcon} from "../Icons";
import {IMyElementList} from "./types";

export const myElementList: IMyElementList = {
    contactInfo: [
        {
            type: "TEXT_INPUT",
            name: "Text",
            description: "I'm a text field, type in any text you want",
            placeholder: "",
            icon: <TextIcon />,
            id: 1,
        },

        {
            type: "EMAIL_INPUT",
            name: "Email",
            description: "Your Email",
            placeholder: "",
            icon: <EmailIcon/>,
            id: 2,
        },

        {
            type: "TEXT_INPUT",
            name: "Name",
            description: "Whats your name?",
            placeholder: "",
            icon: <NameIcon/>,
            id: 3,
        },

        {
            type: "PHONE_INPUT",
            name: "Phone",
            description: "Your Phone Number",
            placeholder: "",
            icon: <PhoneIcon/>,
            id: 4,
        },
    ],

    special: [
        {
            type: "SHORT_TEXT",
            name: "Short text",
            description: "Ask for an extended question here. What do you want to ask?",
            placeholder: "My answer is...",
            icon: <TextIcon />,
            id: 5,
        },

        {
            type: "LONG_TEXT",
            name: "Long text",
            description: "Ask for an extended question here. What do you want to ask?",
            placeholder: "Let me tell you about this",
            icon: <TextIcon />,
            id: 6,
        },

        {
            type: "DROPDOWN",
            name: "Dropdown",
            description: "What's your least favorite chore",
            icon: <TextIcon />,
            id: 7,
        },
    ],
}
