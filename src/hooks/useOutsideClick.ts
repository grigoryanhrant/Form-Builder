import type {RefObject} from "react";
import useEventListener from "./useEventListener";

export const useOutsideClick = (ref: RefObject<HTMLElement>, callback: () => void, editRef: any): void => {
    const handleClick = (e: Event) => {
        if (ref.current && !ref.current.contains(e.target as HTMLElement) && !editRef.current.contains(e.target as HTMLElement)) {
            callback();
        }
    };
    useEventListener('click', handleClick);
}
