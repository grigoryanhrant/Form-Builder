import type { FC, ReactElement } from 'react'
import { SidebarFormFields } from './fields'
import { Group, GroupParent, Main, Title } from './SidebarForm.styled'
import { SidebarElement } from '../SidebarElement/SidebarElement'
import { memo } from 'react'

export const SidebarForm: FC = memo((): ReactElement => {
  return (
    <Main>
      <GroupParent>
        <Title>Contact Info</Title>
        <Group>
          {SidebarFormFields.contactInfo.map(
            ({ id, icon, type, name, description, placeholder, required }) => {
              return (
                <SidebarElement
                  key={id}
                  icon={icon}
                  type={type}
                  name={name}
                  description={description}
                  placeholder={placeholder}
                  required={required}
                />
              )
            },
          )}
        </Group>
      </GroupParent>

      <GroupParent>
        <Title>Special</Title>
        <Group>
          {SidebarFormFields.special.map(
            ({ id, icon, type, name, description, descriptionForInput, placeholder, required }) => {
              return (
                <SidebarElement
                  key={id}
                  icon={icon}
                  type={type}
                  name={name}
                  description={description}
                  descriptionForInput={descriptionForInput}
                  placeholder={placeholder}
                  required={required}
                />
              )
            },
          )}
        </Group>
      </GroupParent>
    </Main>
  )
})

SidebarForm.displayName = 'SidebarForm'
