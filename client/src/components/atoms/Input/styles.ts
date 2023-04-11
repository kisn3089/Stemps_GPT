import styled from 'styled-components';

export const StyledInput = styled.input`
  font-size: ${(props) =>
    props.style?.fontSize ? props.style?.fontSize : '18px'};
  font-weight: ${(props) =>
    props.style?.fontWeight ? props.style?.fontWeight : '500'};
  padding: 0 60px 0 15px;
  border: 1px solid rgb(255, 255, 255, 0.2);
  border-radius: 6px;
  width: ${(props) => props.width};
  height: ${(props) => (props.style?.height ? props.style?.height : '60px')};
  background-color: ${(props) =>
    props.style?.backgroundColor ? props.style?.backgroundColor : '#0E0F11'};
  color: rgb(236, 236, 241);
  box-shadow: 1px 1px 10px #333;
  -webkit-appearance: none;
`;
