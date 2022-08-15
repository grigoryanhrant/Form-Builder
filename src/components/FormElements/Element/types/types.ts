import {ReactElement} from "react";
import {ELEMENT_ADDRESS} from "../../../../globalTypes/elementTypes";

export interface IElement {
    name: string
    type: string
    icon: ReactElement

    elementAddress?: ELEMENT_ADDRESS.FORM
}
