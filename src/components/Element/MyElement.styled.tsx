import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 6px 12px;
  transition: 0.2s all;
  cursor: move;
  border: 1px solid #eff8ff;
  margin-bottom: 8px;
  border-radius: 2px;
  background-color: #dee2e6;

  &:last-child {
    margin-bottom: 0
  }

  &:hover {
    background-color: #fff;
    border-color: #e5d6d6
  }
`;

export const Icon = styled.div`
  height: 24px;
  width: 100%;
  max-width: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #111111;
`;

export const Title = styled.div`
  margin-left: 14px;
  font-size: 15px;
`;