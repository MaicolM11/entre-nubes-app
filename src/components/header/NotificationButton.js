import React, { useEffect, useRef, useState } from "react";
import { getSocket } from "../../services/socket";

import styled from "styled-components";
import { colors } from "../styles/colors";
import NotificationCard from "../cards/NotificationCard";
import { ReactComponent as Notification } from "../../assets/icons/notification.svg";
import { readAllNotifications } from "../../services/notifications";

const NotificationContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonContainer = styled.div`
  display: flex;
  min-width: 35px;
  min-height: 35px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;
`;

const NotificationButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s;

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
  max-height: 535px;
  padding: 20px 20px 0 20px;
  position: absolute;
  top: 65px;
  transform: translateX(-85%);
  overflow-x: hidden;
  overflow-y: auto;
  background-color: ${colors.secondary};
  border: solid 1px ${colors.border};
  border-radius: 16px;
  z-index: 99;
`;

const NotificationDropdownCenterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 15px;
`;

const CircleNotification = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  width: 20px;
  height: 20px;
  background-color: ${colors.delete};
  position: absolute;
  top: 25px;
  transform: translateX(95%);
  border-radius: 50%;
`;

const CircleNotificationNumber = styled.label`
  width: 100%;
  color: ${colors.secondary};
  font-size: 12px;
  font-family: var(--roboto);
`;

const NotificationButton = () => {
  const btnRef = useRef();
  const [totalNotifications, setTotalNotifications] = useState(true);
  const [isOpenNotifications, setIsOpenNotifications] = useState(false);
  const [notifications, setNotifications] = useState([]);

  const showNotifications = () => {
    if(!isOpenNotifications) {
      readAllNotifications().then(async (res) => {
        
      });
    }
    setIsOpenNotifications(!isOpenNotifications);
  };

  const closeOutsideComponent = (position) => {
    const closeDropdown = (e) => {
      if (e.composedPath()[position] !== btnRef.current) {
        setIsOpenNotifications(false);
      }
    };
    document.body.addEventListener("click", closeDropdown);
    return () => document.body.removeEventListener("click", closeDropdown);
  };

  useEffect(() => {
    closeOutsideComponent(3);
    const socket = getSocket();
    socket.on("notifications", (data) => {
      setNotifications(data.data);
      setTotalNotifications(data.news);
    });
    return () => socket.disconnect();
  }, []);

  return (
    <NotificationContainer>
      <ButtonContainer ref={btnRef} onClick={showNotifications}>
        <NotificationButtonContainer>
          <Notification width={32} height={32} />
        </NotificationButtonContainer>
      </ButtonContainer>
      {totalNotifications > 0 && (
        <CircleNotification>
          <CircleNotificationNumber>
            {totalNotifications}
          </CircleNotificationNumber>
        </CircleNotification>
      )}
      {isOpenNotifications && (
        <NotificationDropdownContainer>
          <NotificationDropdownCenterContainer>
            {Object.values(notifications).map((notification, i) => (
              <NotificationCard
                key={i}
                type={notification.type}
                message={notification.message}
                lastIndex={i + 1}
                notificationLength={totalNotifications}
              />
            ))}
          </NotificationDropdownCenterContainer>
        </NotificationDropdownContainer>
      )}
    </NotificationContainer>
  );
};

export default NotificationButton;
