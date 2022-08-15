import {IElementsList} from "./types";

export const moved = (array: IElementsList[], from: number, to: number, on = 1) => {
    return array = array.slice(), array.splice(to, 0, ...array.splice(from, on)), array
}
