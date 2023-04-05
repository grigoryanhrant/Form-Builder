import styled from 'styled-components'

export const Main = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: unset;
  }
`

export const Size = styled.span`
  font-size: 14px;
  color: #8f8f8f;
  margin-left: 8px;
`

export const Remove = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 15px;
  cursor: pointer;

  svg {
    fill: #8f8f8f;
  }
`
