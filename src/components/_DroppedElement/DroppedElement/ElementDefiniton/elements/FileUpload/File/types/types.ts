import {IFile} from "../../types/types";
import {Dispatch, SetStateAction} from "react";

export interface IFileDiv {
    name: string
    size: number
    uploadFiles: IFile[]
    setUploadFiles: Dispatch<SetStateAction<IFile[]>>
}
