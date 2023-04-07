import type { ElementMostBasicProps } from '@common/types'

export interface StoreInitialProps {
  fields: StoreElementProps[]
}

export interface StoreElementProps extends ElementMostBasicProps {
  drop_id?: number
  id?: string
  editMode?: boolean
  selectFields?: {
    value: string
    label: string
    color: string
  }[]
}

export interface AdvanceActionProps {
  payload: StoreElementProps
}

export interface AdvanceActionArrayProps {
  payload: StoreElementProps[]
}

export interface BasicPayloadProps {
  payload: {
    id?: string
  }
}

export interface DescriptionChangeProps {
  payload: {
    id?: string
    description: string
  }
}

export interface PlaceholderChangeProps {
  payload: {
    id?: string
    inputPlaceholder: string
  }
}
