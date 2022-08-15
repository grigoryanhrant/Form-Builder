import {IElement} from "./types";

export const moved = (array: IElement[], from: number, to: number, on = 1) => {
    return array = array.slice(), array.splice(to, 0, ...array.splice(from, on)), array
}
