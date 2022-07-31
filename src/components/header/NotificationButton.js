import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { colors } from "../styles/colors";
import NotificationCard from "../cards/NotificationCard";
import { ReactComponent as Notification } from "../../assets/icons/notification.svg";

const NotificationContainer = styled.div`
  display: flex;
  flex-direction: column;
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
  gap: 15px;
`;

const notificationsData = [
  { stock: 1, product: "Pera" },
  { stock: 3, product: "Manzana" },
  { stock: 3, product: "Piña Colada del Valhala" },
];

const NotificationButton = () => {
  const btnRef = useRef();
  const [isOpenNotifications, setIsOpenNotifications] = useState(false);

  const showNotifications = () => {
    setIsOpenNotifications(!isOpenNotifications);
  };

  useEffect(() => {
    const closeDropdown = (e) => {
      if (e.composedPath()[2] !== btnRef.current) {
        setIsOpenNotifications(false);
      }
    };
    document.body.addEventListener("click", closeDropdown);
    return () => document.body.removeEventListener("click", closeDropdown);
  }, []);

  return (
    <NotificationContainer>
      <NotificationButtonContainer ref={btnRef} onClick={showNotifications}>
        <Notification width={32} height={32} />
      </NotificationButtonContainer>
      {isOpenNotifications && (
        <NotificationDropdownContainer>
          <NotificationDropdownCenterContainer>
            {Object.values(notificationsData).map((notification, i) => (
              <NotificationCard
                key={i}
                stock={notification.stock}
                product={notification.product}
              />
            ))}
          </NotificationDropdownCenterContainer>
        </NotificationDropdownContainer>
      )}
    </NotificationContainer>
  );
};

export default NotificationButton;
