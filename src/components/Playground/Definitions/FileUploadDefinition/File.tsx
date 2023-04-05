import type { FC, ReactElement } from 'react'
import type { UploadFileProps } from './FileUploadDefinition'
import { BsTrash } from '@static/icons'
import { Main, Remove, Size } from './File.styled'

interface FileProps extends UploadFileProps {
  fileRemove: (name: string) => void
}

export const File: FC<FileProps> = ({ name, size, fileRemove }): ReactElement => {
  const fileRemoveHandler = () => fileRemove(name)

  return (
    <Main onClick={fileRemoveHandler}>
      <Remove>
        <BsTrash />
      </Remove>
      <Size>
        {name} size: {size} kb
      </Size>
    </Main>
  )
}
