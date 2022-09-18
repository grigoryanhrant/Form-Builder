import {RefObject} from "react";
import {Identifier} from "dnd-core";

export interface IDroppedElement {
    isDragging: boolean,
    DroppedRef: RefObject<HTMLDivElement>,
    handlerId: Identifier | null,

    id: string | undefined
    type: string | undefined,

    name: string | undefined,
    description: string | undefined,
    descriptionForInput: string | undefined,
    placeholder: string | undefined,
    value: string | undefined,
}
