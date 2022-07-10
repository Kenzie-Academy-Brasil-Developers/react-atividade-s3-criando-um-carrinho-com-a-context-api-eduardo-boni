import styled, { css } from "styled-components";

const Btn = styled.button`
  background: #ff0000;
  border-radius: 5px;
  border: none;
  color: #fff;
  margin: 0 1em;
  padding: 0.25em 1em;
  cursor: pointer;
  ${(props) =>
    props.primary &&
    css`
      background: #c2ede3;
      color: white;
    `};
`;

export default Btn;