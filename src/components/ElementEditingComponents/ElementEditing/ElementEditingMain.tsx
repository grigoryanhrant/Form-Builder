import type {IElement} from "../../../store/slices/fields/types";
import type {ChangeEvent} from "react";
import {ElementEditing} from "./ElementEditing";
import {AiFillCloseSquare, FaRemoveFormat} from "../../../static/icons"
import {useAppDispatch} from "../../../store/hooks";
import {descriptionChange, descriptionRemove, editModeOff} from "../../../store/slices/fields/fields";
import {
    Close,
    Details,
    EditableElement,
    FieldRemove, Input,
    InputWrapper,
    Label,
    Title
} from "./ElementEditing.styled";

export const ElementEditingMain = ({...rest}: Omit<IElement, "dropid">) => {

    const dispatch = useAppDispatch()

    const editModeOffHandler = () => dispatch(editModeOff())

    const descriptionChangeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
        dispatch(descriptionChange({id: rest.id, description: evt.target.value}))
    }

    const descriptionRemoveHandler = () => dispatch(descriptionRemove({id: rest.id}))

    const fieldRemove = rest.description && (
        <FieldRemove onClick={descriptionRemoveHandler}>
            <FaRemoveFormat/>
        </FieldRemove>
    )

    return (
        <EditableElement>
            <Close onClick={editModeOffHandler}>
                <AiFillCloseSquare/>
            </Close>

            <Title>{rest?.name}</Title>

            <Details>
                <Label htmlFor="description">Description</Label>
                <InputWrapper>
                    <Input
                        id="description"
                        value={rest?.description}
                        onChange={descriptionChangeHandler}
                    />
                    {fieldRemove}
                </InputWrapper>
            </Details>

            <Details>
                <ElementEditing
                    id={rest?.id}
                    name={rest?.name}
                    placeholder={rest?.placeholder}
                    type={rest?.type}/>
            </Details>
        </EditableElement>
    );
};
