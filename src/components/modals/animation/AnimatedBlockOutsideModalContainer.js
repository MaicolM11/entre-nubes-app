import React from "react";
import { useSpring, animated } from "react-spring";
import { ModalBackground } from "../../styles/style-components";

const AnimatedBlockOutsideModalContainer = ({ modal, isOpen }) => {
  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? `translateY(0%)` : `translateY(-100%)`,
  });

  return (
    <>
      {isOpen && (
        <ModalBackground>
          <animated.div style={animation}>{modal}</animated.div>
        </ModalBackground>
      )}
    </>
  );
};

export default AnimatedBlockOutsideModalContainer;
