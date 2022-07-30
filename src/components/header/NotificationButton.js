import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as Notification } from "../../assets/icons/notification.svg";
import { colors } from "../styles/colors";

const NotificationContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30px;
`;

const NotificationButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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

const NotificationDropdownContainer = styled.div`
  display: flex;
  width: 190px;
  position: absolute;
  top: 65px;
  transform: translateX(-85%);
  overflow: hidden;
  background-color: ${colors.secondary};
  border: solid 1px ${colors.border};
  border-radius: 16px;
`;

const NotificationDropdownCenterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
`;

const NotificationButton = () => {
  const [isOpenNotifications, setIsOpenNotifications] = useState(false);

  const showNotifications = () => {
    setIsOpenNotifications(!isOpenNotifications);
  };

  return (
    <NotificationContainer>
      <NotificationButtonContainer onClick={showNotifications}>
        <Notification />
      </NotificationButtonContainer>
      {isOpenNotifications && (
        <NotificationDropdownContainer>
          <NotificationDropdownCenterContainer>
            <label>item 1</label> <label>item 2</label>
          </NotificationDropdownCenterContainer>
        </NotificationDropdownContainer>
      )}
    </NotificationContainer>
  );
};

export default NotificationButton;
