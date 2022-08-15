const drop_id = () => {
    let index = 0;

    return () => ++index
}

export const setDropId = drop_id()
