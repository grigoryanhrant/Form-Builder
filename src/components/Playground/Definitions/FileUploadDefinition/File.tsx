import type { Dispatch, FC, ReactElement, SetStateAction } from 'react'
import type { IFile } from './FileUploadDefinition'
import { BsTrash } from '@static/icons'
import { Main, Remove, Size } from './File.styled'

interface IFileDiv {
    name: string
    size: number
    uploadFiles: IFile[]
    setUploadFiles: Dispatch<SetStateAction<IFile[]>>
}

export const File: FC<IFileDiv> = ({ name, size, uploadFiles, setUploadFiles }): ReactElement => {
    const fileRemoveHandler = () => {
        setUploadFiles(uploadFiles.filter((item: IFile) => item.name !== name))
    }

    return (
        <Main>
            <Remove onClick={fileRemoveHandler}>
                <BsTrash />
            </Remove>
            <Size>
                {name} size: {size} kb
            </Size>
        </Main>
    )
}
