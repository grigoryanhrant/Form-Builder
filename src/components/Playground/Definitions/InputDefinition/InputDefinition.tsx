import type { FC, ReactElement } from 'react'
import type { ElementMostBasicProps } from '@common/types'
import type { ElementDefinitionProps } from '@components/Playground/DroppedElement/ElementDefintion'
import { getCurrentDate } from '@helpers/getCurrentDate'
import { Main, DefInput, Label } from './InputDefinition.styled'

type InputDefinitionPart = Omit<ElementMostBasicProps, 'description'>

type InputDefinitionProps = InputDefinitionPart & {
  value: ElementDefinitionProps['value']
  id: ElementDefinitionProps['id']
}

export const InputDefinition: FC<InputDefinitionProps> = ({
  type,
  name,
  placeholder,
  value,
  descriptionForInput,
  required,
  id,
}): ReactElement => {
  return (
    <Main>
      <DefInput
        required={required}
        descriptionForInput={!!descriptionForInput}
        id={id}
        name={name}
        placeholder={placeholder}
        value={type === 'date' ? getCurrentDate() : value}
        type={type}
        onChange={() => 'temp variable'}
      />
      {descriptionForInput && <Label htmlFor={id}>{descriptionForInput}</Label>}
    </Main>
  )
}
