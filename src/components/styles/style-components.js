import styled from "styled-components";
import { colors } from "./colors";

const size = {
  normalButton: {
    width: "405px",
    height: "45px",
    fontSize: "16px",
  },
  mediumButton: {
    width: "187px",
    height: "45px",
    fontSize: "16px",
  },
  mediumModalButton: {
    width: "185px",
    height: "45px",
    fontSize: "16px",
  },
  mediumSmallButton: {
    width: "152px",
    height: "45px",
    fontSize: "16px",
  },
  smallButton: {
    width: "80px",
    height: "35px",
    fontSize: "14px",
  },
  mediumBorderButton: {
    width: "185px",
    height: "45px",
    fontSize: "16px",
  },
  normalInput: {
    width: "403px",
  },
  stockInput: {
    width: "365px",
  },
  mediumInput: {
    width: "248px",
  },
  smallInput: {
    width: "185px",
  },
};

const theme = {
  highlighted: {
    default: colors.highlighted,
    hover: colors.highlightedHover,
  },
  ok: {
    default: colors.ok,
    hover: colors.okHover,
  },
  edit: {
    default: colors.edit,
    hover: colors.editHover,
  },
  delete: {
    default: colors.delete,
    hover: colors.deleteHover,
  },
  dark: {
    default: colors.dark,
    hover: colors.darkHover,
  },
};

export const ButtonContainer = styled.button`
  display: flex;
  width: ${(props) => size[props.size].width};
  height: ${(props) => size[props.size].height};
  align-items: center;
  justify-content: center;
  gap: 5px;
  background-color: ${(props) => theme[props.theme].default};
  color: white;
  font-size: ${(props) => size[props.size].fontSize};
  font-weight: bold;
  font-family: var(--roboto);
  white-space: nowrap;
  border-radius: 25px;
  border: none;
  transition: 0.2s;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => theme[props.theme].hover};
  }
`;

export const BorderButtonContainer = styled.button`
  display: flex;
  width: ${(props) => size[props.size].width};
  height: ${(props) => size[props.size].height};
  align-items: center;
  justify-content: center;
  background-color: ${colors.secondary};
  color: ${colors.text};
  font-size: ${(props) => size[props.size].fontSize};
  font-weight: bold;
  font-family: var(--roboto);
  white-space: nowrap;
  border-radius: 25px;
  border: solid 1px ${colors.border};
  transition: 0.2s;
  cursor: pointer;
  &:hover {
    border-color: ${colors.highlighted};
    color: ${colors.highlighted};
  }
`;

export const DataSpan = styled.span`
  font-weight: 500;
`;

export const InputContainer = styled.div`
  display: flex;
  gap: 5px;
  width: ${(props) => size[props.size].width};
  height: 43px;
  background-color: ${colors.secondary};
  border: 1px solid ${colors.border};
  border-radius: 25px;
  :focus-within {
    border-color: ${colors.highlighted};
    path {
      stroke: ${(props) => (props.isStroke ? colors.highlighted : "none")};
      fill: ${(props) => (props.isFill ? colors.highlighted : "none")};
    }
  }

  path {
    stroke: ${(props) => (props.isStroke ? colors.brand : "none")};
    fill: ${(props) => (props.isFill ? colors.brand : "none")};
  }
`;

export const InputCenterContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin: 0 25px;
  gap: 10px;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 24px;
  min-height: 24px;
`;

export const InputPasswordContainer = styled.div`
  display: flex;
  gap: 5px;
  width: ${(props) => size[props.size].width};
  height: 43px;
  background-color: ${colors.secondary};
  border: 1px solid ${colors.border};
  border-radius: 25px;
  :focus-within {
    border-color: ${colors.highlighted};
    path {
      stroke: ${colors.highlighted};
    }
    circle {
      stroke: ${colors.highlighted};
    }
  }

  path {
    stroke: ${colors.brand};
  }
  circle {
    stroke: ${colors.brand};
  }
`;

export const InputValueContainer = styled.input`
  width: 100%;
  height: 41px;
  border: none;
  outline: none;
  font-size: 16px;
  font-weight: normal;
  color: ${colors.text};
  font-family: var(--roboto);
  &::placeholder {
    color: ${colors.placeholder};
  }
  &::invalid {
    span {
      color: red;
    }
  }
`;

export const MessageDeleteContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 253px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 15px;
`;
export const MessageDeleteInfoContainer = styled.label`
  font-size: 20px;
  font-weight: bold;
  font-family: var(--roboto);
  color: ${colors.text};
  text-align: center;
`;

export const ModalBackground = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0px;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
`;

export const ModalDeleteContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 565px;
  height: 233px;
  align-items: center;
  justify-content: center;
  gap: 20px;
  background-color: ${colors.secondary};
  border-radius: 16px;
`;

export const ModalDeleteButtonsContainer = styled.div`
  display: flex;
  gap: 25px;
`;

export const ModalTitle = styled.label`
  width: 100%;
  color: ${colors.text};
  font-size: 24px;
  font-weight: bold;
  font-family: var(--roboto);
  white-space: nowrap;
`;

export const SelectContainer = styled.div`
  display: flex;
  height: 45px;
`;

export const ShowPasswordButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 24px;
  min-height: 24px;
  border: none;
  border-radius: 100%;
  cursor: pointer;
  user-select: none;
`;

export const SidebarButtonContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin: 10px 0 10px 15px;
  gap: 25px;
`;

export const SidebarButtonIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
`;

export const TotalPaymentContainer = styled.label`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 25px 0;
  gap: 5px;
  color: ${colors.text};
  font-size: 16px;
  font-weight: bold;
  font-family: var(--roboto);
  white-space: nowrap;
`;
