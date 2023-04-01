import styled from "styled-components";

export const Main = styled.div`
  min-width: 250px;
  height: max-content;
  display: flex;
  flex-direction: column;
  padding: 16px;
  background-color: #eff8ff;
  border-radius: 2px;
  visibility: hidden;
`;

export const Title = styled.span`
  font-weight: 600;
  font-size: 15px;
  color: #212529;
  text-transform: uppercase;
`;

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
`;

export const Settings = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 6px;
  transition: 0.2s all;
  border: 1px solid #eff8ff;
  margin-bottom: 8px;

  &:last-child {
    margin-bottom: 0
  }
`;