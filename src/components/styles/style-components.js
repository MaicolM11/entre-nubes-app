import styled from "styled-components";
import { colors } from "./colors";

const size = {
  normalButton: {
    width: "405px",
    height: "45px",
    fontSize: "16px",
  },
  normalMediumButton: {
    width: "250px",
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
  mediumCardButton: {
    width: "145px",
    height: "35px",
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
  boliranaButton: {
    width: "200px",
    height: "45px",
    fontSize: "16px",
  },
  mediumBorderButton: {
    width: "185px",
    height: "45px",
    fontSize: "16px",
  },
  normalInput: {
    width: "403px",
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
  disableRestartTime: {
    default: colors.disableBoliranaRestartTime,
  },
  enableRestartTime: {
    default: colors.enableBoliranaRestartTime,
    hover: colors.disableBoliranaRestartTime,
  },
  resumeTime: {
    default: colors.resumeBoliranaTime,
    hover: colors.resumeHoverBoliranaTime,
  },
};

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

export const CardsContainer = styled.div`
  display: grid;
  grid-row-gap: 25px;
  grid-column-gap: 50px;
  grid-template-columns: repeat(auto-fill, minmax(194px, 1fr));
  padding: 25px;
  overflow-y: auto;
`;

export const DataSpan = styled.span`
  font-weight: 500;
`;

export const DataSpaceSpan = styled.span`
  font-weight: 500;
  padding-left: 5px;
`;

export const DebtorBoldData = styled.label`
  color: ${colors.text};
  font-size: 20px;
  font-weight: bold;
  font-family: var(--roboto);
  white-space: nowrap;
`;

export const DeleteIconButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s;
  cursor: pointer;
  &:hover {
    path {
      stroke: ${(props) => (props.isStroke ? colors.deleteHover : "none")};
      fill: ${(props) => (props.isFill ? colors.deleteHover : "none")};
    }
  }
  path {
    stroke: ${(props) => (props.isStroke ? colors.delete : "none")};
    fill: ${(props) => (props.isFill ? colors.delete : "none")};
  }
`;

export const DeleteIconTableButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 40px;
  transition: 0.2s;
  cursor: pointer;
  &:hover {
    path {
      stroke: ${(props) => (props.isStroke ? colors.deleteHover : "none")};
      fill: ${(props) => (props.isFill ? colors.deleteHover : "none")};
    }
  }
  path {
    stroke: ${(props) => (props.isStroke ? colors.delete : "none")};
    fill: ${(props) => (props.isFill ? colors.delete : "none")};
  }
`;

export const EditIconButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s;
  cursor: pointer;
  &:hover {
    path {
      stroke: ${(props) => (props.isStroke ? colors.highlightedHover : "none")};
      fill: ${(props) => (props.isFill ? colors.highlightedHover : "none")};
    }
  }
  path {
    stroke: ${(props) => (props.isStroke ? colors.highlighted : "none")};
    fill: ${(props) => (props.isFill ? colors.highlighted : "none")};
  }
`;

export const ErrorMessage = styled.label`
  display: flex;
  width: 100%;
  height: 10px;
  align-items: center;
  color: ${colors.delete};
  font-size: 12px;
  font-weight: 500;
  font-family: var(--roboto);
  white-space: nowrap;
`;

export const ErrorMessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 5px;
`;

export const ErrorMessageSpace = styled.label`
  width: 100%;
  height: 10px;
`;

export const HeaderSeparator = styled.div`
  width: 1px;
  height: 25px;
  background-color: ${colors.border};
`;

export const HeaderTitle = styled.label`
  color: ${colors.text};
  font-size: 24px;
  font-weight: bold;
  font-family: var(--roboto);
  white-space: nowrap;
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
  align-items: center;
  justify-content: center;
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

export const Label16BoldFontContainer = styled.label`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  color: ${colors.text};
  font-size: 16px;
  font-weight: bold;
  font-family: var(--roboto);
`;

export const MediumContainer = styled.div`
  display: flex;
  min-width: 250px;
  height: 45px;
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
export const MessageInfoContainer = styled.label`
  min-width: 255px;
  width: 255px;
  font-size: 20px;
  font-weight: bold;
  font-family: var(--roboto);
  color: ${colors.text};
  text-align: center;
`;

export const MessageEditedSalesmanInfoContainer = styled.label`
  min-width: 355px;
  width: 355px;
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
  background-color: rgba(0, 0, 0, 0.6);
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

export const ModalFormOptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ModalTitle = styled.label`
  width: 100%;
  color: ${colors.text};
  font-size: 24px;
  font-weight: bold;
  font-family: var(--roboto);
  white-space: nowrap;
`;

export const ModalMediumTitle = styled.label`
  width: 100%;
  color: ${colors.text};
  font-size: 22px;
  font-weight: bold;
  font-family: var(--roboto);
  white-space: nowrap;
`;

export const TitleTimer = styled.label`
  width: 100%;
  color: ${colors.text};
  font-size: 45px;
  font-weight: bold;
  font-family: var(--roboto);
  white-space: nowrap;
`;

export const ModalSubtitle = styled.label`
  width: 100%;
  color: ${colors.text};
  font-size: 18px;
  font-weight: bold;
  font-family: var(--roboto);
  white-space: nowrap;
`;

export const OrderCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 194px;
  background-color: ${colors.secondary};
  gap: 25px;
  border: 1px solid ${colors.border};
  border-radius: 8px;
  &:hover {
    border-color: ${colors.highlighted};
  }
`;

export const OrderCardDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 25px 21px;
  gap: 25px;
`;

export const OrderTitle = styled.label`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  color: ${colors.text};
  font-size: 22px;
  font-weight: bold;
  font-family: var(--roboto);
  white-space: nowrap;
`;

export const OrderPlaceTitle = styled.label`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  color: ${colors.text};
  font-size: 18px;
  font-weight: bold;
  font-family: var(--roboto);
  white-space: nowrap;
`;

export const OrderPlaceDescription = styled.label`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  color: ${colors.text};
  font-size: 16px;
  font-weight: 500;
  font-family: var(--roboto);
`;

export const OrderTotalPayment = styled.label`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 5px;
  color: ${colors.text};
  font-size: 18px;
  font-weight: bold;
  font-family: var(--roboto);
  white-space: nowrap;
`;

export const OrderCardButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 10px;
`;

export const PageOptionsContainer = styled.div`
  display: flex;
  width: 100%;
  max-height: 75px;
  background-color: ${colors.secondary};
  border-bottom: solid 1px ${colors.border};
`;

export const PageOptionsCenterContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 15px 25px;
`;

export const ProductModalImageContainer = styled.div`
  display: flex;
  min-width: 285px;
  min-height: 465px;
  border-radius: 25px;
  border: 1px solid ${colors.border};
`;

export const SelectContainer = styled.div`
  display: flex;
  width: 405px;
  height: 45px;
`;

export const SelectComponentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  gap: 10px;
  color: ${colors.brand};
  font-size: 16px;
  font-weight: bold;
  font-family: var(--roboto);
  user-select: none;
  z-index: 95;
`;

export const SelectValueContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 43px;
  border: 1px solid
    ${(props) => (props.isOpen ? colors.highlighted : colors.border)};
  border-radius: 25px;
  color: ${(props) => (props.isOpen ? colors.highlighted : colors.brand)};
  cursor: pointer;
  &:hover {
    path {
      fill: ${colors.highlighted};
    }
    color: ${colors.highlighted};
  }
`;

export const SelectInputContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin: 0 25px;
  gap: 10px;
  z-index: -1;
`;

export const SelectIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 24px;
  min-height: 24px;
  path {
    fill: ${(props) => (props.isOpen ? colors.highlighted : colors.brand)};
  }
`;

export const SelectedOptionValue = styled.span`
  width: 100%;
  white-space: nowrap;
`;

export const SelectCaretDownContainer = styled.div`
  display: flex;
  width: 24px;
  height: 24px;
  justify-content: flex-end;
  path {
    fill: ${(props) => (props.isOpen ? colors.highlighted : colors.brand)};
  }
`;

export const SelectOptionsContainer = styled.div`
  width: 100%;
  top: 100%;
  left: 0;
  padding-bottom: 25px;
  background-color: ${colors.secondary};
  border: 1px solid ${colors.border};
  border-radius: 25px;
`;

export const SelectOptionsTitle = styled.div`
  display: flex;
  height: 34px;
  align-items: flex-end;
  padding-left: 25px;
  margin-bottom: 25px;
  color: ${colors.placeholder};
  font-size: 16px;
  font-weight: bold;
  font-family: var(--roboto);
  white-space: nowrap;
`;

export const SelectOption = styled.div`
  display: flex;
  height: 50px;
  align-items: center;
  padding-left: 25px;
  color: ${colors.text};
  font-size: 16px;
  font-weight: bold;
  font-family: var(--roboto);
  white-space: nowrap;
  transition: all 0.2s;
  cursor: pointer;
  &:hover {
    background-color: ${colors.highlighted};
    color: ${colors.secondary};
  }
`;

export const SelectOrderContainer = styled.div`
  display: flex;
  min-width: 185px;
  max-width: 250px;
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

export const StockLimitIconButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s;
  cursor: pointer;
  &:hover {
    path {
      stroke: ${(props) => (props.isStroke ? colors.editHover : "none")};
      fill: ${(props) => (props.isFill ? colors.editHover : "none")};
    }
  }
  path {
    stroke: ${(props) => (props.isStroke ? colors.edit : "none")};
    fill: ${(props) => (props.isFill ? colors.edit : "none")};
  }
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
