import React from "react";
import styled from "styled-components";
import { ReactComponent as Notification } from "../../assets/icons/notification.svg";
import { colors } from "../styles/colors";

const NotificationButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  transition: 0.2s;
  cursor: pointer;
  user-select: none;

  path {
    fill: ${colors.highlighted};
  }

  &:hover {
    path {
      fill: ${colors.highlightedHover};
    }
  }
`;

const NotificationButton = () => {
  const showNotifications = () => {
    console.log("Show notifications...");
  };

  return (
    <NotificationButtonContainer onClick={showNotifications}>
      <Notification />
    </NotificationButtonContainer>
  );
};

export default NotificationButton;
