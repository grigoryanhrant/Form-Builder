import {ReactElement} from "react";
import {ELEMENT_ADDRESS} from "../../../../globalTypes/elementTypes";

export interface IFormElement {
    name: string
    type: string
    icon: ReactElement

    elementAddress?: ELEMENT_ADDRESS.FORM
}
