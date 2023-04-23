import type { ReactElement } from 'react'
import type { ElementFullProps } from '@common/types'
import { InputEditor, SelectEditor, MultiselectEditor, FileUploadEditor } from '../Editors'
import {
  CHECKBOX,
  DATEPICKER,
  EMAIL_INPUT,
  LONG_TEXT,
  MULTISELECT,
  PHONE_INPUT,
  SELECT,
  SHORT_TEXT,
  TEXT_INPUT,
  UPLOAD,
} from '@common/constants'

export type EditorDefiningProps = Pick<ElementFullProps, 'id' | 'type' | 'placeholder'>

type EditorDefiningType = ({ id, type, placeholder }: EditorDefiningProps) => ReactElement

export const EditorDefining: EditorDefiningType = ({ id, type, placeholder }) => {
  switch (type) {
    case TEXT_INPUT:
    case EMAIL_INPUT:
    case PHONE_INPUT:
    case SHORT_TEXT:
    case CHECKBOX:
    case DATEPICKER:
      return <InputEditor id={id} placeholder={placeholder} />

    case LONG_TEXT:
      return <InputEditor id={id} placeholder={placeholder} />

    case SELECT:
      return <SelectEditor />

    case MULTISELECT:
      return <MultiselectEditor />

    case UPLOAD:
      return <FileUploadEditor />
  }

  return <></>
}
