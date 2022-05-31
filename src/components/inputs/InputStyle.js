import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  font-size: 16px;
  font-weight: normal;
  color: var(--text-color);
  font-family: var(--roboto);
  &::placeholder{color: var(--text-placeholder-color)};
`;