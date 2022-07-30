import styled from 'styled-components';

export const Container = styled.div<React.CSSProperties>`
  text-align: center;
  padding: 20px 0px;
  font-size: 20px;
  margin-right: ${(props) => props.marginRight};
`;
