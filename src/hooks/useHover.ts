import {RefObject, useState} from 'react'
import useEventListener from "./useEventListener";

export function useHover<T extends HTMLElement = HTMLElement>(
    elementRef: RefObject<T>,
): boolean {
    const [value, setValue] = useState<boolean>(false)

    const handleMouseEnter = () => setValue(false)
    const handleMouseLeave = () => setValue(true)

    useEventListener('mouseenter', handleMouseEnter, elementRef)
    useEventListener('mouseleave', handleMouseLeave, elementRef, false)

    return value
}
