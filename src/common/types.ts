export type DragObjectType = {
  id?: string
  index: number
  elementAddress?: string
}

export type ElementMostBasicProps = {
  type: string
  name: string
  description: string
  descriptionForInput?: string
  placeholder?: string
  required?: boolean
}

export type ElementFullProps = DragObjectType & ElementMostBasicProps

export type ElementAddressType = {
  elementAddress?: 'ELEMENT_ADDRESS_FORM'
}
