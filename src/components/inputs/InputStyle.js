import styled from "styled-components";

const size = {
  normal: {
    width: "315px",
  },
};

export const InputStyle = styled.input`
  width: ${(props) => size[props.size].width};
  height: 43px;
  border: none;
  outline: none;
  font-size: 16px;
  font-weight: normal;
  color: var(--text-color);
  font-family: var(--roboto);
  &::placeholder {
    color: var(--text-placeholder-color);
  }
`;
