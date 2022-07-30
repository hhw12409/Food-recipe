import styled from 'styled-components';

export const ImageBox = styled.img<React.CSSProperties>`
  border-radius: ${(props) => props.borderRadius ?? '10px'};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;
