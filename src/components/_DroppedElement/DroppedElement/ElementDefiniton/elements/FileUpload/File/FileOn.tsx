import {IFileDiv} from "./types/types";
import {BsTrash} from "../../../../../../../common/Icons"
import {memo} from "react";
import "./FileOn.sass";

export const FileOn = memo ( ({ name, size, fileRemoveHandler }: IFileDiv) => {

    console.log(`hello world`)

    return (
        <div className='DroppedElementUpload__File'>
            <div className='DroppedElementUpload__FileRemove' onClick={() => fileRemoveHandler(name, size)}>
                <BsTrash/>
            </div>
            <span>{name} size: {size}</span>
        </div>
    );
})