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
import {
  FileUploadEditor,
  InputEditor,
  MultiselectEditor,
  SelectEditor,
} from '@components/Editor/Editors'

export const getEditor = (type: string, id?: string, placeholder?: string): JSX.Element | null => {
  switch (type) {
    case TEXT_INPUT:
    case EMAIL_INPUT:
    case PHONE_INPUT:
    case LONG_TEXT:
    case SHORT_TEXT:
      return <InputEditor id={id} placeholder={placeholder} />

    case CHECKBOX:
    case DATEPICKER:
      return null

    case SELECT:
      return <SelectEditor />

    case MULTISELECT:
      return <MultiselectEditor id={id} />

    case UPLOAD:
      return <FileUploadEditor />
  }

  return null
}
