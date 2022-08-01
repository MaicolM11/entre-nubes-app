import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { colors } from "../styles/colors";
import NotificationCard from "../cards/NotificationCard";
import { ReactComponent as Notification } from "../../assets/icons/notification.svg";

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

const notificationData = [
  { stock: 1, product: "Pera" },
  { stock: 3, product: "Manzana" },
  { stock: 3, product: "Piña Colada del Valhala" },
  { stock: 2, product: "Galletas Michelin" },
  { stock: 5, product: "Don Wiskey" },
];

const NotificationButton = () => {
  const btnRef = useRef();
  const [isCircleNotifications, setIsCircleNotifications] = useState(true);
  const [isOpenNotifications, setIsOpenNotifications] = useState(false);

  const showNotifications = () => {
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
  }, []);

  return (
    <NotificationContainer>
      <ButtonContainer ref={btnRef} onClick={showNotifications}>
        <NotificationButtonContainer>
          <Notification width={32} height={32} />
        </NotificationButtonContainer>
      </ButtonContainer>
      {isCircleNotifications && (
        <CircleNotification>
          <CircleNotificationNumber>
            {notificationData.length}
          </CircleNotificationNumber>
        </CircleNotification>
      )}
      {isOpenNotifications && (
        <NotificationDropdownContainer>
          <NotificationDropdownCenterContainer>
            {Object.values(notificationData).map((notification, i) => (
              <NotificationCard
                key={i}
                stock={notification.stock}
                product={notification.product}
                lastIndex={i + 1}
                notificationLength={notificationData.length}
              />
            ))}
          </NotificationDropdownCenterContainer>
        </NotificationDropdownContainer>
      )}
    </NotificationContainer>
  );
};

export default NotificationButton;
