import React , { useRef } from "react";
import styled from "styled-components";

import { salesmanValidation } from "../../errors/validate";
import useForm from "../../form/useForm";
import { createUser } from "../../services/user";
import { colors } from "../styles/colors";
import {
  ModalBackground,
  ModalTitle,
  SelectContainer,
} from "../styles/style-components";
import { useSpring, animated } from "react-spring";
import CloseButton from "../buttons/CloseButton";

const ProductModalContainer = styled.div`
  display: flex;
  width: 795px;
  flex-direction: column;
  background-color: ${colors.secondary};
  border-radius: 16px;
`;

const ModalTitleContainer = styled.div`
  display: flex;
  width: 100%;
`;

const ModalTitleCenterContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin: 35px;
`;



const SalesmanModal = ({
    isThem,
    info,
    buttonTheme,
    updateSalesman,
    isOpen,
    setIsOpen
})=>{
    const submitSalesman = () => {
        if (isOpen) {
          isThem ? sendData() : editData();
        }
      };

      const { handleChangeSalesman, salesmanValues, handleSubmitSalesman, errors , clearSalesmanValues } = useForm(
        submitSalesman,
        salesmanValidation
      );

      const closeModal = (e) => {
        if (ref.current === e.target) {
          setIsOpen(false);
        }
      };

      const ref = useRef()

      const handleSetIsOpen = () => {
        clearSalesmanValues()
        setIsOpen((isOpen) => !isOpen);
      };
      
      const sendData =()=>{
        createUser(
          salesmanValues.fullname,
          salesmanValues.email,
          salesmanValues.password,
          salesmanValues.cc,
          salesmanValues.address,
          salesmanValues.phone,
          'SALESMAN'
        )
        .then(async(res)=>{
          let data = await res.json()
          if(res.ok){
            updateSalesman()
          }else{
            alert(data.message)
          }
        })
      } 
      
  return(
    <>{isOpen &&(
      <ModalBackground ref={ref} onClick={closeModal}>
        {/* <animated.div style={animation}> */}
          <ProductModalContainer>
            <ModalTitleContainer>
              <ModalTitleCenterContainer>
                <ModalTitle>{info}</ModalTitle>
                  <CloseButton onClick={handleSetIsOpen} />
                </ModalTitleCenterContainer>
              </ModalTitleContainer>
          </ProductModalContainer>
        {/* </animated.div> */}
      </ModalBackground>
      )
    }
    </>
  )
}

export default SalesmanModal;