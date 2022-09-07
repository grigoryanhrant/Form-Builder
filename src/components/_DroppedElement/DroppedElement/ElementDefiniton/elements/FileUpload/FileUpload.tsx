import React, {ChangeEvent, useCallback, useState} from 'react';
import {DropTargetMonitor, useDrop} from "react-dnd";
import {NativeTypes} from "react-dnd-html5-backend";
import {AiOutlineCloudUpload} from "../../../../../../common/Icons";
import _uniqueId from "lodash/uniqueId";
import "./FileUpload.sass";
import {FileOn} from "./File/FileOn";
import {IFile} from "./types/types";

export const FileUpload = () => {

    const [uploadFiles, setUploadFiles] = useState<any>([])

    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        evt.preventDefault();

        if (!evt.target.files) return;

        addFileHandler(evt.target.files[0])
    }

    const addFileHandler = (item: IFile) => {
        setUploadFiles((prev: IFile[]) => [...prev, item]);
    }

    // const fileRemoveHandler = (name, lastModified, lastModifiedDate, size, type, webkitRelativePath): any => {
    //     console.log(uploadFiles)
    // }

    // const fileRemoveHandler = useCallback((name: any, size: any, type: any) => {
    //     console.log('hello')
    //     },
    //     [],
    // );

    const fileRemoveHandler = (name: string, size: number) => {
        console.log(`hello world`)
    }

    const [{canDrop, isOver}, drop] = useDrop(
        () => ({
            accept: [NativeTypes.FILE],

            drop(item: { files: IFile[] }) {
                addFileHandler(item.files[0])
            },

            canDrop(item) {
                return true
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
            <FileOn key={_uniqueId()} name={item.name} size={item.size} fileRemoveHandler={fileRemoveHandler}/>
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
