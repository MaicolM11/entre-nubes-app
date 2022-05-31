import styled from 'styled-components';

const theme = {
  option: {
    default: "#4674F2",
    hover: "#6F92F2"
  },
  ok: {
    default: "#2CE74A",
    hover: "#4FEF68"
  },
  delete: {
    default: "#FF4343",
    hover: "#FF6565"
  }
};

const size = {
  normal: {
    width: "405px"
  },
  medium: {
    width: "185px"
  },

  small: {
    width: "150px"
  }
};

export const Button = styled.button`
  width: ${props => size[props.size].width};
  height: 45px;
  background-color: ${props => theme[props.theme].default};
  font-family: var(--roboto);
  color: white;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;
  &:hover{
    background-color: ${props => theme[props.theme].hover};
  }
`;