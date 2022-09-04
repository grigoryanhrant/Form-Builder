import React, {useState} from 'react';
import {DropTargetMonitor, useDrop} from "react-dnd";
import {NativeTypes} from "react-dnd-html5-backend";
import {AiOutlineCloudUpload} from "../../../../../../common/Icons";
import _uniqueId from "lodash/uniqueId";
import "./FileUpload.sass";

export const FileUpload = () => {

    const handleChange = (evt: any) => {
        evt.preventDefault();
        addFileHandler(evt.target.files[0])
    }

    const [uploadFiles, setUploadFiles] = useState<any>([])

    const addFileHandler = (item: any) => {
        setUploadFiles((prev: any) => [...prev, item]);
    }

    const [{ canDrop, isOver }, drop] = useDrop(
        () => ({
            accept: [NativeTypes.FILE],

            drop(item: { files: any[] }) {
                addFileHandler(item.files[0])
            },

            canDrop(item: any) {return true},

            collect: (monitor: DropTargetMonitor) => {
                const item = monitor.getItem() as any

                return {
                    isOver: monitor.isOver(),
                    canDrop: monitor.canDrop(),
                }
            },
        }),
        [],
    )

    let filesRender = uploadFiles.map((item: any) => (
        <div key={_uniqueId()} className='DroppedElementUpload__File'>
            {item.name} size: {item.size} kb
        </div>))

    uploadFiles.map((item: any) => console.log(item))

    return (
        <div className='DroppedElementUpload'>
            <div ref={drop} className='TargetBox'>
                <div className='TargetBox__Center'>

                    <label htmlFor={'happy'}>

                        <div className='TargetBox__Details'>
                            <div className='TargetBox__Icon'>
                                <AiOutlineCloudUpload />
                            </div>

                            <div className='TargetBox__Description'>
                                {canDrop && isOver ? 'Release to drop' : 'Drag file here'}
                            </div>

                            <div className='TargetBox__Description TargetBox__UploadFromInput'>
                                Or click here
                            </div>
                        </div>

                        <input
                            type={'file'}
                            id={'happy'}
                            name={'happy'}
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
