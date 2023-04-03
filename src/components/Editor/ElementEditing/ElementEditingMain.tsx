import type {IElement} from "@store/slices/fields/types";
import type {ChangeEvent, FC, ReactElement} from "react";
import {EditorDefining} from "./EditorDefining";
import {AiFillCloseSquare, FaRemoveFormat} from "@static/icons"
import {useAppDispatch} from "@store/hooks";
import {descriptionChange, descriptionRemove, editModeOff} from "@store/slices/fields/fields";
import {
    Close,
    Details,
    EditableElement,
    FieldRemove, Input,
    InputWrapper,
    Label,
    Title
} from "./ElementEditing.styled";

export const ElementEditingMain: FC<Omit<IElement, "dropid">> = ({...rest}): ReactElement => {

    const {id, name, placeholder, type, description} = rest;

    const dispatch = useAppDispatch()

    const editModeOffHandler = () => dispatch(editModeOff())

    const descriptionChangeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
        dispatch(descriptionChange({id, description: evt.target.value}))
    }

    const descriptionRemoveHandler = () => dispatch(descriptionRemove({id}))

    return (
        <EditableElement>
            <Close onClick={editModeOffHandler}>
                <AiFillCloseSquare/>
            </Close>

            <Title>{name}</Title>

            <Details>
                <Label htmlFor="description">Description</Label>
                <InputWrapper>
                    <Input
                        id="description"
                        value={description}
                        onChange={descriptionChangeHandler}
                    />
                    {description &&
                        <FieldRemove onClick={descriptionRemoveHandler}>
                            <FaRemoveFormat/>
                        </FieldRemove>}
                </InputWrapper>
            </Details>

            <Details>
                {EditorDefining({id, name, placeholder, type})}
            </Details>
        </EditableElement>
    );
};
