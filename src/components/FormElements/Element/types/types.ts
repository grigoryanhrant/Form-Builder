import {ReactElement} from "react";
import {ELEMENT_ADDRESS} from "../../../../globalTypes/elementTypes";

export interface IFormElement {
    elementAddress?: ELEMENT_ADDRESS.FORM
    icon: ReactElement

    type: string
    name: string
    description: string
    placeholder?: string
}
