import React from "react";
import styled from "styled-components";
import { colors } from "../styles/colors";
import { BoldSpan } from "../styles/style-components";

const NotificationCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 150px;
  gap: 15px;
`;

const NotificationText = styled.label`
  width: 100%;
  align-items: center;
  color: ${colors.text};
  font-size: 14px;
  font-family: var(--roboto);
`;

const Separator = styled.div`
  width: 150px;
  height: 1px;
  background-color: ${colors.border};
`;

const NotificationCard = ({ stock, product }) => {
  return (
    <NotificationCardContainer>
      <NotificationText>
        Unidades actuales <BoldSpan>{stock}</BoldSpan> del producto{" "}
        <BoldSpan>{product}</BoldSpan>.
      </NotificationText>
      <Separator />
    </NotificationCardContainer>
  );
};

export default NotificationCard;
