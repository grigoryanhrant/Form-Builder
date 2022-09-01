import {ReactElement} from "react";

export interface IElementsGroup {
    type: string
    name: string
    description: string
    placeholder: string
    icon: ReactElement
    id: number
}

export interface IMyElementList {
    contactInfo: IElementsGroup[]
    special: IElementsGroup[]
}
