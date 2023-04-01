import React, {useCallback, useState} from 'react';
import {DropTargetMonitor, useDrop} from "react-dnd";
import {NativeTypes} from "react-dnd-html5-backend";
import {AiOutlineCloudUpload} from "../../../static/icons";
import _uniqueId from "lodash/uniqueId";
import {FileOn} from "../File/FileOn";
import {UniqueObjectsSet} from "../../../helpers/uniqueObjectsSet";
import {
    Description,
    Details, Files,
    Icon,
    Input,
    Label, Main,
    TargetBox,
    TargetBoxCenter,
    UploadFromInput
} from "./FileUpload.styled";

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
        <Main>
            <TargetBox ref={drop}>
                <TargetBoxCenter>

                    <Label htmlFor={$htmlForInput}>

                        <Details>
                            <Icon>
                                <AiOutlineCloudUpload/>
                            </Icon>

                            <Description>
                                {canDrop && isOver ? 'Release to drop' : 'Drag file here'}
                            </Description>

                            <UploadFromInput>
                                Or click here
                            </UploadFromInput>
                        </Details>

                        <Input
                            type='file'
                            id={$htmlForInput}
                            name='upload'
                            multiple
                            onChange={handleChange}
                        />

                    </Label>
                </TargetBoxCenter>
            </TargetBox>

            <Files>
                {filesRender}
            </Files>
        </Main>
    );
};
