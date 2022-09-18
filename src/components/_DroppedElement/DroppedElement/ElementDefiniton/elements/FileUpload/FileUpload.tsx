import React, {useCallback, useState} from 'react';
import {DropTargetMonitor, useDrop} from "react-dnd";
import {NativeTypes} from "react-dnd-html5-backend";
import {AiOutlineCloudUpload} from "../../../../../../common/Icons";
import _uniqueId from "lodash/uniqueId";
import {FileOn} from "./File/FileOn";
import {UniqueObjectsSet} from "../../../../../../global/helpers";
import "./FileUpload.sass";

export interface IFile {
    lastModified: number
    lastModifiedDate?: string
    name: string
    size: number
    type: string
    webkitRelativePath: string
}


export const FileUpload = () => {

    const [uploadFiles, setUploadFiles] = useState<IFile[]>([])

    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {

        evt.preventDefault();

        if (!evt.target.files) return;

        addFileHandler(evt.target.files)
    }

    const addFileHandler = useCallback((item: FileList) => {
        setUploadFiles((prev: IFile[]) => [...prev, ...item]);
    }, [uploadFiles])

    const [{canDrop, isOver}, drop] = useDrop(
        () => ({
            accept: [NativeTypes.FILE],

            drop(item: { files: FileList }) {
                addFileHandler(item.files)
            },

            collect: (monitor: DropTargetMonitor) => {
                return {
                    isOver: monitor.isOver(),
                    canDrop: monitor.canDrop(),
                }
            },
        }),
        [],
    )

    const uniqueFiles = Array.from(new UniqueObjectsSet(uploadFiles))

    let filesRender = uniqueFiles.map((item: IFile) => {
        return (
            <FileOn
                key={_uniqueId()}
                name={item.name}
                size={item.size}
                uploadFiles={uploadFiles}
                setUploadFiles={setUploadFiles}
            />
        )
    })

    const $htmlForInput = _uniqueId()

    return (
        <div className='DroppedElementUpload'>

            <div ref={drop} className='TargetBox'>
                <div className='TargetBox__Center'>

                    <label htmlFor={$htmlForInput}>

                        <div className='TargetBox__Details'>
                            <div className='TargetBox__Icon'>
                                <AiOutlineCloudUpload/>
                            </div>

                            <div className='TargetBox__Description'>
                                {canDrop && isOver ? 'Release to drop' : 'Drag file here'}
                            </div>

                            <div className='TargetBox__Description TargetBox__UploadFromInput'>
                                Or click here
                            </div>
                        </div>

                        <input
                            type='file'
                            id={$htmlForInput}
                            name='upload'
                            multiple
                            onChange={handleChange}
                        />

                    </label>
                </div>
            </div>

            <div className='DroppedElementUpload__Files'>
                {filesRender}
            </div>
        </div>
    );
};
