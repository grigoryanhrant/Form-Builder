const generateDropId = () => {
  let tempDropId = 0

  return () => ++tempDropId
}

export const dropId = generateDropId()
