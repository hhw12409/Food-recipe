import styled from 'styled-components';

const FlexBox = styled.div<React.CSSProperties>`
  display: flex;
  justify-content: ${(props) => props.justifyContent};
  flex-direction: ${(props) => props.flexDirection};
  gap: ${(props) => props.gap};
  flex-wrap: ${(props) => props.flexWrap};
  margin-bottom: ${(props) => props.marginBottom};
  width: 30%;
`;

export default FlexBox;
