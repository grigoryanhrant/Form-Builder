import {IFileDiv} from "./types/types";
import {BsTrash} from "../../../../../../../common/Icons"
import {IFile} from "../types/types";
import "./FileOn.sass";

export const FileOn = ({ name, size, uploadFiles, setUploadFiles }: IFileDiv) => {

    const fileRemoveHandler = () => {
        setUploadFiles(uploadFiles.filter((item: IFile) => item.name !== name))
    }

    return (
        <div className='DroppedElementUpload__File'>
            <div className='DroppedElementUpload__FileRemove' onClick={fileRemoveHandler}>
                <BsTrash/>
            </div>
            <span>{name} size: {size}</span>
        </div>
    );
}
