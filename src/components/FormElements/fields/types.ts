import {ReactElement} from "react";

export interface IElementsGroup {
    type: string
    name: string
    description: string
    descriptionForInput?: string
    placeholder?: string
    required?: boolean
    icon: ReactElement
    id: number
}

export interface IMyElementList {
    contactInfo: IElementsGroup[]
    special: IElementsGroup[]
}
