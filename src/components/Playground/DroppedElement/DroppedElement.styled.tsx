import styled, {css} from "styled-components";

export const Main = styled.div`
  margin-bottom: 25px;
  max-width: 500px;

  &:hover {
    cursor: move
  }

  &:last-child {
    margin-bottom: unset
  }
`;

interface IWrapper {
    isDragging: boolean;
}

export const Wrapper = styled.div<IWrapper>`
  position: relative;
  padding: 8px;
  ${({isDragging}) => isDragging ?
          css`
            position: relative;

            &:after {
              content: 'drop the element here';
              width: 100%;
              height: 100%;
              position: absolute;
              top: 0;
              left: 0;
              text-transform: uppercase;
              background-color: #F2FBFF;
              padding: 8px;
              border: 1px dotted #8CDBFF;
              color: #8CDBFF;
              font-size: 15px;
              font-weight: 700;
            }
          `
          : css`  border: 1px dashed #CCD6DD;`
  };
`;

export const Tools = styled.div`
  display: flex;
  width: calc(100% - 16px)
`;

export const FlexCenter = css`
  display: flex;
  justify-content: center;
  align-content: center;
`

export const ToolsIcon = styled.div`
  ${FlexCenter};
  width: 18px;
  height: auto;
  margin-right: 4px;
  cursor: pointer;

  &:last-child {
    margin-right: unset
  }
`;

export const ToolsMoveIcon = styled.div`
  ${FlexCenter};
  width: max-content;
  position: absolute;
  top: 8px;
  right: 8px;
`;

export const Details = styled.div`
  margin-top: 14px;
`;

export const Description = styled.span`
  color: #c3ccd7;
  font-weight: 700;
  font-size: 15px;
`;