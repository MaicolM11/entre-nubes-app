import styled from 'styled-components';

const size = {
  normal: {
    width: "315px"
  },
  medium: {
    width: "12rem"
  }
}

export const Input = styled.input`
  width: ${props => size[props.size].width};
  border: none;
  outline: none;
  font-size: 16px;
  font-weight: normal;
  color: var(--text-color);
  font-family: var(--roboto);
  &::placeholder{color: var(--text-placeholder-color)};
`;