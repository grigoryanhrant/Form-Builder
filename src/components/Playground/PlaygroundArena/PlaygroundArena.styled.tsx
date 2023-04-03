import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
  max-width: 880px;
`;

interface IWrapper {
    isOver: boolean;
}

export const Wrapper = styled.div<IWrapper>`
  min-height: 300px;
  display: flex;
  flex-direction: column;
  margin: 0 30px 0 30px;
  padding: 10px;
  background-color: #fff;
  transition: 0.2s all;
  border: 1px dashed #d4d4d4;
  border-color: ${({isOver}) => isOver ? '#58cfef' : ''})
`;

export const DropZone = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  background-color: #F2FBFF;
  border: 1px dotted #8CDBFF;
  color: #8CDBFF;
  font-weight: 700;
  margin: auto 0 0 0;
  
  &:hover {
    border-color: #58cfef
  }
`;