import type { DropTargetMonitor } from 'react-dnd'
import type { ChangeEvent, FC, ReactElement } from 'react'
import { NativeTypes } from 'react-dnd-html5-backend'
import { UniqueObjectsSet } from '@helpers/uniqueObjectsSet'
import { useCallback, useState } from 'react'
import { useDrop } from 'react-dnd'
import { AiOutlineCloudUpload } from '@static/icons'
import { File } from './File'
import { nanoid } from '@reduxjs/toolkit'
import {
  Description,
  Details,
  Files,
  Icon,
  Input,
  Label,
  Main,
  TargetBox,
  TargetBoxCenter,
  UploadFromInput,
} from './FileUploadDefinition.styled'

export interface UploadFileProps {
  name: string
  size: number
}

export const FileUploadDefinition: FC = (): ReactElement => {
  const [uploadFiles, setUploadFiles] = useState<UploadFileProps[]>([])

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    evt.preventDefault()

    if (!evt.target.files) return

    addFileHandler(evt.target.files)
  }

  const addFileHandler = useCallback(
    (files: FileList) => {
      setUploadFiles((prev: UploadFileProps[]) => [...prev, ...files])
    },
    [uploadFiles],
  )

  const [{ canDrop, isOver }, drop] = useDrop(
    () => ({
      accept: [NativeTypes.FILE],

      drop({ files }: { files: FileList }) {
        addFileHandler(files)
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

  const fileRemove = (removedFileName: string) => {
    setUploadFiles(uploadFiles.filter(({ name }) => name !== removedFileName))
  }

  const filesRender = uniqueFiles.map(({ name, size }: UploadFileProps) => {
    return <File key={nanoid()} name={name} size={size} fileRemove={fileRemove} />
  })

  const $htmlForInput = nanoid()

  return (
    <Main>
      <TargetBox ref={drop}>
        <TargetBoxCenter>
          <Label htmlFor={$htmlForInput}>
            <Details>
              <Icon>
                <AiOutlineCloudUpload />
              </Icon>

              <Description>{canDrop && isOver ? 'Release to drop' : 'Drag file here'}</Description>

              <UploadFromInput>Or click here</UploadFromInput>
            </Details>

            <Input type='file' id={$htmlForInput} name='upload' multiple onChange={handleChange} />
          </Label>
        </TargetBoxCenter>
      </TargetBox>

      <Files>{filesRender}</Files>
    </Main>
  )
}
