import {memo} from "react";
import {contactInfoElementsRender, specialElementsRender} from "./fields/renderList";
import {Group, GroupParent, Main, Title} from "./FormElements.styled";

export const FormElements = memo(() => {

    return (
        <Main>
            <GroupParent>
                <Title>Contact Info</Title>
                <Group>
                    {contactInfoElementsRender}
                </Group>
            </GroupParent>

            <GroupParent>
                <Title>Special</Title>
                <Group>
                    {specialElementsRender}
                </Group>
            </GroupParent>
        </Main>
    );
});
