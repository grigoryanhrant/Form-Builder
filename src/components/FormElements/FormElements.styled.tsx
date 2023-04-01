import styled from "styled-components";

export const Main = styled.div`
  min-width: 250px;
  height: max-content;
  display: flex;
  flex-direction: column;
  padding: 16px;
  background-color: #eff8ff;
  border-radius: 2px;
`;

export const GroupParent = styled.div`
  margin-bottom: 24px;
  
  &:last-child {
    margin-bottom: unset
  }
`;

export const Title = styled.div`
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