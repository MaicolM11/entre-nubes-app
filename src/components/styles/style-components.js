import styled from "styled-components";
import { colors } from "./colors";

const widthSize = {
  normalButton: {
    width: "405px",
  },
  mediumButton: {
    width: "187px",
  },
  normalInput: {
    width: "403px",
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
  delete: {
    default: colors.delete,
    hover: colors.deleteHover,
  },
  edit: {
    default: colors.edit,
    hover: colors.editHover,
  },
};

export const ButtonContainer = styled.button`
  display: flex;
  width: ${(props) => widthSize[props.widthSize].width};
  height: 45px;
  align-items: center;
  justify-content: center;
  gap: 5px;
  background-color: ${(props) => theme[props.theme].default};
  color: white;
  font-size: 16px;
  font-weight: 500;
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
  width: ${(props) => widthSize[props.widthSize].width};
  height: 43px;
  background-color: ${colors.secondary};
  border: 1px solid ${colors.border};
  border-radius: 25px;
  :focus-within {
    border-color: ${colors.highlighted};
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
