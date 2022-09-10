import {Dispatch, SetStateAction} from "react";
import {IFile} from "../../../components/_DroppedElement/DroppedElement/ElementDefiniton/elements/FileUpload/types/types";

export interface IToggler {
    checked: boolean,
    disabled: boolean,
    onChange: any,
    inactive: string,
    active: string,
}
