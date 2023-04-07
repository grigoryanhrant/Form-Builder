import { ELEMENT_ADDRESS_FORM } from './constants'

export type DragObjectType = {
  id?: string
  index: number
  elementAddress?: string
}

export interface ElementMostBasicProps {
  type: string
  name: string
  description: string
  descriptionForInput?: string
  placeholder?: string
  required?: boolean
}

export interface ElementAdditionalProps {
  elementAddress?: typeof ELEMENT_ADDRESS_FORM
}
