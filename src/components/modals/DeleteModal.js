import React, { useCallback, useEffect, useRef } from "react";
import { deleteProduct } from "../../services/product";
import { useSpring, animated } from "react-spring";
import { colors } from "../styles/colors";
import {
  ModalBackground,
  ModalDeleteContainer,
  MessageDeleteContainer,
  MessageDeleteInfoContainer,
  ModalDeleteButtonsContainer,
} from "../styles/style-components";
import { ReactComponent as Alert } from "../../assets/icons/alert.svg";
import BorderButton from "../buttons/BorderButton";
import Button from "../buttons/Button";

const DeleteModal = ({
  isOpen,
  setIsOpen,
  message,
  product,
  updateProducts,
}) => {
  const handleDeleteProduct = () => {
    deleteProduct(product._id).then(async (res) => {
      const data = await res.json();
      if (res.ok) {
        handleSetIsOpen();
        updateProducts();
      } else {
        alert(data.message);
      }
    });
  };

  const ref = useRef();

  const closeModal = (e) => {
    if (ref.current === e.target) {
      setIsOpen(false);
    }
  };

  const handleSetIsOpen = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    },
    [setIsOpen, isOpen]
  );

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? `translateY(0%)` : `translateY(-100%)`,
  });

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <>
      {isOpen && (
        <ModalBackground ref={ref} onClick={closeModal}>
          <animated.div style={animation}>
            <ModalDeleteContainer>
              <MessageDeleteContainer>
                <Alert width="24" height="24" stroke={colors.delete} />
                <MessageDeleteInfoContainer>
                  {message}
                </MessageDeleteInfoContainer>
              </MessageDeleteContainer>
              <ModalDeleteButtonsContainer>
                <BorderButton
                  size="mediumBorderButton"
                  text="Cancelar"
                  onClick={handleSetIsOpen}
                />
                <Button
                  size="mediumModalButton"
                  theme="delete"
                  text="Eliminar Producto"
                  onClick={handleDeleteProduct}
                />
              </ModalDeleteButtonsContainer>
            </ModalDeleteContainer>
          </animated.div>
        </ModalBackground>
      )}
    </>
  );
};

export default DeleteModal;
