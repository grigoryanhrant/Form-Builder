import React, {ChangeEvent, useCallback, useState} from 'react';
import {DropTargetMonitor, useDrop} from "react-dnd";
import {NativeTypes} from "react-dnd-html5-backend";
import {AiOutlineCloudUpload} from "../../../../../../common/Icons";
import _uniqueId from "lodash/uniqueId";
import {FileOn} from "./File/FileOn";
import {IFile} from "./types/types";
import "./FileUpload.sass";

export const FileUpload = () => {

    const [uploadFiles, setUploadFiles] = useState<IFile[]>([])

    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {

        evt.preventDefault();

        if (!evt.target.files) return;

        addFileHandler(evt.target.files)
    }

    const addFileHandler = (item: FileList) => {
        setUploadFiles((prev: IFile[]) => [...prev, ...item]);
    }

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

    let filesRender = uploadFiles.map((item: IFile) => {
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

    return (
        <div className='DroppedElementUpload'>

            <div ref={drop} className='TargetBox'>
                <div className='TargetBox__Center'>

                    <label htmlFor={'happy'}>

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
                            id='happy'
                            name='happy'
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
