import type { FC, ReactElement } from 'react'

export const TextareaDefinition: FC<any> = ({ name, placeholder, value }): ReactElement => {
  return (
    <>
      <textarea
        name={name}
        placeholder={placeholder}
        defaultValue={value}
        className='DroppedElement__Textarea'
        onChange={() => 'temp variable'}
      />
    </>
  )
}
