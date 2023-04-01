import {BsTrash} from "../../../static/icons"
import {Dispatch, SetStateAction} from "react";
import {IFile} from "../FileUpload/FileUpload";
import "./FileOn.sass";

interface IFileDiv {
    name: string
    size: number
    uploadFiles: IFile[]
    setUploadFiles: Dispatch<SetStateAction<IFile[]>>
}

export const FileOn = ({ name, size, uploadFiles, setUploadFiles }: IFileDiv) => {

    const fileRemoveHandler = () => {
        setUploadFiles(uploadFiles.filter((item: IFile) => item.name !== name))
    }

    return (
        <div className='DroppedElementUpload__File'>
            <div className='DroppedElementUpload__FileRemove' onClick={fileRemoveHandler}>
                <BsTrash/>
            </div>
            <span>{name} size: {size} kb</span>
        </div>
    );
}
