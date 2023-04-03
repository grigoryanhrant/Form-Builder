import {SidebarFormFields} from "./fields";
import {Group, GroupParent, Main, Title} from "./SidebarForm.styled";
import {memo} from "react";
import {SidebarElement} from "../SidebarElement/SidebarElement";

export const SidebarForm = memo(() => {

    return (
        <Main>
            <GroupParent>
                <Title>Contact Info</Title>
                <Group>
                    {SidebarFormFields.contactInfo.map((
                        {id, icon, type, name, description, descriptionForInput, placeholder, required}) => {
                        return (
                            <SidebarElement key={id} icon={icon} type={type} name={name} description={description}
                                            descriptionForInput={descriptionForInput} placeholder={placeholder}
                                            required={required}/>
                        )
                    })}
                </Group>
            </GroupParent>

            <GroupParent>
                <Title>Special</Title>
                <Group>
                    {SidebarFormFields.special.map((
                        {id, icon, type, name, description, descriptionForInput, placeholder, required}) => {
                        return (
                            <SidebarElement key={id} icon={icon} type={type} name={name} description={description}
                                            descriptionForInput={descriptionForInput} placeholder={placeholder}
                                            required={required}/>)
                    })}
                </Group>
            </GroupParent>
        </Main>
    );
});
