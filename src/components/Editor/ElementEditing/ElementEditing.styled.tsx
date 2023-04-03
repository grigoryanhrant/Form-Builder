import styled from "styled-components";

export const EditableElement = styled.div`
  position: relative;
  min-width: 250px;
  height: max-content;
  display: flex;
  flex-direction: column;
  padding: 16px;
  background-color: #eff8ff;
  border-radius: 2px;
`;

export const Title = styled.span`
  font-weight: 600;
  font-size: 15px;
  color: #212529;
  text-transform: uppercase;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-style: italic;
  font-size: 14px;
  color: #212529;
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const FieldRemove = styled.div`
  position: absolute;
  right: 10px;
  z-index: 10;
  cursor: pointer;
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  padding: 8px 32px 8px 8px;
  outline: none;
  border: 1px solid rgba(145, 145, 145, 0.4);
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 13px
`;

export const Close = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
`;