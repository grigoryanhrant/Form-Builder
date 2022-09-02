import {RefObject} from "react";
import {Identifier} from "dnd-core";

export interface IDroppedElementCard {
    isDragging: boolean,
    DroppedRef: RefObject<HTMLDivElement>,
    handlerId: Identifier | null,

    id: string,
    type: string | undefined,

    name: string | undefined,
    description: string | undefined,
    placeholder: string | undefined,
    value: string | undefined,
}
