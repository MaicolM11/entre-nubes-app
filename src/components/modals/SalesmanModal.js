import React , { useRef } from "react";
import styled from "styled-components";
import DataInput from "../inputs/DataInput";
import { salesmanValidation } from "../../errors/validate";
import useForm from "../../form/useForm";
import { createUser } from "../../services/user";
import { colors } from "../styles/colors";
import Button from "../buttons/Button";
import {
  ModalBackground,
  ModalTitle,
  SelectContainer,
} from "../styles/style-components";
import { useSpring, animated } from "react-spring";
import CloseButton from "../buttons/CloseButton";

const ProductModalContainer = styled.div`
  display: flex;
  width: 490px;
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

const ProductModalFormContainer = styled.div`
  display: flex;
  width: 100%;
`;

const ProductModalFormCenterContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 0 35px 35px 35px;
  gap: 35px;
`;

const ProductModalFormOptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const ErrorMessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 5px;
`;

const ErrorMessageSpace = styled.label`
  width: 100%;
  height: 10px;
`;

const ErrorMessage = styled.label`
  display: flex;
  width: 100%;
  height: 10px;
  align-items: center;
  color: ${colors.delete};
  font-size: 12px;
  font-weight: 500;
  font-family: var(--roboto);
  white-space: nowrap;
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

      const animation = useSpring({
        config: {
          duration: 250,
        },
        opacity: isOpen ? 1 : 0,
        transform: isOpen ? `translateY(0%)` : `translateY(-100%)`,
      });


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
        <animated.div style={animation}>
          <ProductModalContainer>
            <ModalTitleContainer>
              <ModalTitleCenterContainer>
                <ModalTitle>{info}</ModalTitle>
                  <CloseButton onClick={handleSetIsOpen} />
                </ModalTitleCenterContainer>
              </ModalTitleContainer>
              <ProductModalFormContainer>
                  <ProductModalFormCenterContainer>
                    <ProductModalFormOptionContainer>
                    <ErrorMessageContainer>
                      <DataInput
                        size="normalInput"
                        // icon={<WineBottle stroke={colors.brand} />}
                        icon=''
                        type="text"
                        name="fullname"
                        placeholder="Usuario"
                        defaultValue={/**product ? product.brand : **/""}
                        onChange={handleChangeSalesman}
                      />
                      {errors.fullname ? (
                        <ErrorMessage>{errors.fullname}</ErrorMessage>
                      ) : (
                        <ErrorMessageSpace />
                      )}
                    </ErrorMessageContainer>
                    <ErrorMessageContainer>
                      <DataInput
                        size="normalInput"
                        // icon={<WineBottle stroke={colors.brand} />}
                        icon=''
                        type="text"
                        name="cc"
                        placeholder="Documento de identidad"
                        defaultValue={/**product ? product.brand : **/""}
                        onChange={handleChangeSalesman}
                      />
                      {errors.cc ? (
                        <ErrorMessage>{errors.cc}</ErrorMessage>
                      ) : (
                        <ErrorMessageSpace />
                      )}
                    </ErrorMessageContainer>
                    <ErrorMessageContainer>
                      <DataInput
                        size="normalInput"
                        // icon={<WineBottle stroke={colors.brand} />}
                        icon=''
                        type="text"
                        name="phone"
                        placeholder="Telefono"
                        defaultValue={/**product ? product.brand : **/""}
                        onChange={handleChangeSalesman}
                      />
                      {errors.phone ? (
                        <ErrorMessage>{errors.phone}</ErrorMessage>
                      ) : (
                        <ErrorMessageSpace />
                      )}
                    </ErrorMessageContainer>
                    <ErrorMessageContainer>
                      <DataInput
                        size="normalInput"
                        // icon={<WineBottle stroke={colors.brand} />}
                        icon=''
                        type="text"
                        name="email"
                        placeholder="Correo electronico"
                        defaultValue={/**product ? product.brand : **/""}
                        onChange={handleChangeSalesman}
                      />
                      {errors.email ? (
                        <ErrorMessage>{errors.email}</ErrorMessage>
                      ) : (
                        <ErrorMessageSpace />
                      )}
                    </ErrorMessageContainer>
                    <ErrorMessageContainer>
                      <DataInput
                        size="normalInput"
                        // icon={<WineBottle stroke={colors.brand} />}
                        icon=''
                        type="text"
                        name="address"
                        placeholder="Direccion"
                        defaultValue={/**product ? product.brand : **/""}
                        onChange={handleChangeSalesman}
                      />
                      {errors.address ? (
                        <ErrorMessage>{errors.address}</ErrorMessage>
                      ) : (
                        <ErrorMessageSpace />
                      )}
                    </ErrorMessageContainer>
                    <ErrorMessageContainer>
                      <DataInput
                        size="normalInput"
                        // icon={<WineBottle stroke={colors.brand} />}
                        icon=''
                        type="text"
                        name="password"
                        placeholder="Contraseña"
                        defaultValue={/**product ? product.brand : **/""}
                        onChange={handleChangeSalesman}
                      />
                      {errors.password ? (
                        <ErrorMessage>{errors.password}</ErrorMessage>
                      ) : (
                        <ErrorMessageSpace />
                      )}
                    </ErrorMessageContainer>
                    <ErrorMessageContainer>
                      <DataInput
                        size="normalInput"
                        // icon={<WineBottle stroke={colors.brand} />}
                        icon=''
                        type="text"
                        name="repeatPassWord"
                        placeholder="Confirmar contraseña"
                        defaultValue={/**product ? product.brand : **/""}
                        onChange={handleChangeSalesman}
                      />
                      {errors.repeatPassWord ? (
                        <ErrorMessage>{errors.repeatPassWord}</ErrorMessage>
                      ) : (
                        <ErrorMessageSpace />
                      )}
                    </ErrorMessageContainer>
                    <Button
                      size="normalButton"
                      theme={buttonTheme}
                      text={info}
                      onClick={handleSubmitSalesman}
                    />
                    </ProductModalFormOptionContainer>
                  </ProductModalFormCenterContainer>
              </ProductModalFormContainer>
          </ProductModalContainer>
        </animated.div>
      </ModalBackground>
      )
    }
    </>
  )
}

export default SalesmanModal;