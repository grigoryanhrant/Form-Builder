const index_generator = () => {
    let index = 0;

    return () => ++index
}

export const setDropId = index_generator();
