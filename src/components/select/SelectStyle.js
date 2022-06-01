import styled from 'styled-components';

const size = {
  normal: {
    width: "25.3rem"
  },
  medium: {
    width: "18rem"
  }
}

export const SelectStyle = styled.select`
  width: ${props => size[props.size].width};
  height: 3rem;
  border-radius: 2rem;
  border-color: var(--text-placeholder-color);
  outline: none;
  font-size: 16px;
  font-weight: normal;
  color: var(--text-placeholder-color);
  font-family: var(--roboto);
`;