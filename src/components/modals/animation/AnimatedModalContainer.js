import React, { useCallback, useEffect, useRef } from "react";
import { useSpring, animated } from "react-spring";
import { ModalBackground } from "../../styles/style-components";

const AnimatedModalContainer = ({ modal, isOpen, setIsOpen }) => {
  const ref = useRef();

  const closeModal = (e) => {
    if (ref.current === e.target) {
      setIsOpen(false);
    }
  };

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? `translateY(0%)` : `translateY(-100%)`,
  });

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    },
    [setIsOpen, isOpen]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <>
      {isOpen && (
        <ModalBackground ref={ref} onClick={closeModal}>
          <animated.div style={animation}>{modal}</animated.div>
        </ModalBackground>
      )}
    </>
  );
};

export default AnimatedModalContainer;
