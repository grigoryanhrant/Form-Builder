import {IElementPayload, IElementsList, PLAYGROUNDCASES} from "./types";
import {moved} from "./playgroundArenaReducerHelpers";

export const elementsList: any[] = []

export const elementsReducer = (state: IElementsList[], action: IElementPayload) => {

    switch (action.type) {
        case PLAYGROUNDCASES.ADD_ELEMENT:

            state.push(action.data as IElementsList)

            return state;

        case PLAYGROUNDCASES.UPDATE_ELEMENTS:

            const { drag_id, drop_id } = action.data

            const drag_index = state.findIndex(el => el.dropid === drag_id)

            const drop_index = state.findIndex(el => el.dropid === drop_id)

            return moved(state, drag_index, drop_index)

        default:
            return state;
    }
}
