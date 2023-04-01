import type {Dispatch, SetStateAction} from "react";
import {IFile} from "../FileUpload/FileUpload";
import {Main, Remove, Size} from "./FileOn.styled";
import {BsTrash} from "../../../static/icons"

interface IFileDiv {
    name: string
    size: number
    uploadFiles: IFile[]
    setUploadFiles: Dispatch<SetStateAction<IFile[]>>
}

export const FileOn = ({name, size, uploadFiles, setUploadFiles}: IFileDiv) => {

    const fileRemoveHandler = () => {
        setUploadFiles(uploadFiles.filter((item: IFile) => item.name !== name))
    }

    return (
        <Main>
            <Remove onClick={fileRemoveHandler}>
                <BsTrash/>
            </Remove>
            <Size>{name} size: {size} kb</Size>
        </Main>
    );
}
