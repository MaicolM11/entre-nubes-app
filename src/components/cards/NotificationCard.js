import React, { useEffect, useState } from "react";
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

  &:hover {
    cursor: pointer;
    color: ${colors.highlighted};
  }
`;

const Separator = styled.div`
  width: 150px;
  height: 1px;
  background-color: ${(props) => props.color};
`;

const NotificationCard = ({ type, message, lastIndex, notificationLength }) => {
  const [isLast, setIsLast] = useState(false);

  const lastNotification = () => {
    if (lastIndex === notificationLength) {
      setIsLast(true);
    }
  };

  useEffect(() => {
    lastNotification();
  }, []);

  return (
    <NotificationCardContainer>
      <NotificationText>
        <BoldSpan>{type}: </BoldSpan>
        {message}
      </NotificationText>
      {!isLast ? (
        <Separator color={colors.border} />
      ) : (
        <Separator color={colors.secondary} />
      )}
    </NotificationCardContainer>
  );
};

export default NotificationCard;
