const getDropId = () => {
    let count = 0;

    return () => ++count
}

export const dropId = getDropId()