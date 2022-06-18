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
  smallButton: {
    width: "80px",
    height: "35px",
    fontSize: "14px",
  },
  normalInput: {
    width: "403px",
  },
  mediumInput: {
    width: "248px",
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

export const InputContainer = styled.div`
  display: flex;
  width: ${(props) => size[props.size].width};
  height: 43px;
  background-color: ${colors.secondary};
  border: 1px solid ${colors.border};
  border-radius: 25px;
  :focus-within {
    border-color: ${colors.highlighted};
    path {
      fill: ${colors.highlighted};
    }
  }

  path {
    fill: ${colors.brand};
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

export const ShowPasswordButton = styled.div`
  display: inline-flex;
  min-width: 24px;
  min-height: 24px;
  justify-content: center;
  align-items: center;
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
