import React , { useRef } from "react";
import styled from "styled-components";
import DataInput from "../inputs/DataInput";
import PasswordInput from "../inputs/PasswordInput";
import { salesmanValidation } from "../../errors/validate";
import useForm from "../../form/useForm";
import useFormEdit from "../../form/useFormEdit";
import { createUser,editUser } from "../../services/user";
import { colors } from "../styles/colors";
import Button from "../buttons/Button";
import {
  ModalBackground,
  ModalTitle,
  SelectContainer,
} from "../styles/style-components";
import { useSpring, animated } from "react-spring";
import CloseButton from "../buttons/CloseButton";

import { ReactComponent as UserIcon } from "../../assets/icons/user.svg";
import { ReactComponent as PhoneIcon } from "../../assets/icons/phone.svg";
import { ReactComponent as MailIcon } from "../../assets/icons/email.svg";
import { ReactComponent as LocationIcon } from "../../assets/icons/location.svg";
import { ReactComponent as LockIcon } from "../../assets/icons/lock.svg";


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
    salesman,
    updateSalesman,
    isOpen,
    setIsOpen
})=>{
    
  const sendData =()=>{
    createUser(
      salesmanValues.fullname,
      salesmanValues.email,
      salesmanValues.password,
      salesmanValues.cc,
      salesmanValues.address,
      salesmanValues.phone,
      'SALESMAN',
    )
    .then(async(res)=>{
      let data = await res.json()
      if(res.ok){
        handleSetIsOpen()
        updateSalesman()
      }else{
        alert(data.message)
      }
    })
  } 

  const editData =()=>{
    editUser(
      salesman._id,
      valuesSalesman.fullname,
      valuesSalesman.email,
      valuesSalesman.password,
      valuesSalesman.cc,
      valuesSalesman.address,
      valuesSalesman.phone,
      'SALESMAN',
    )
    .then(async(res)=>{
      let data = await res.json()
      if(res.ok){
        handleSetIsOpen()
        updateSalesman()
      }else{
        alert(data.message)
      }
    })
  } 
      const { handleChangeSalesman, salesmanValues, handleSubmitSalesman, errors , clearSalesmanValues } = useForm(
        sendData,
        salesmanValidation
      );

      const{handleChangeSalesmanEdit,valuesSalesman,handleSubmitSalesmanEdit,clearSalesmanValuesEdit} = useFormEdit(
        editData,salesmanValidation,salesman
      )

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
        isThem ? clearSalesmanValues(): clearSalesmanValuesEdit()
        setIsOpen((isOpen) => !isOpen);
      };
      
      
      
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
                        icon={<UserIcon stroke={colors.brand} />}
                        type="text"
                        name="fullname"
                        placeholder="Usuario"
                        defaultValue={salesman ? salesman.fullname : ""}
                        onChange={isThem ? handleChangeSalesman: handleChangeSalesmanEdit}
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
                        icon = ''
                        type="text"
                        name="cc"
                        placeholder="Documento de identidad"
                        defaultValue={salesman ? salesman.cc : ""}
                        onChange={isThem ? handleChangeSalesman: handleChangeSalesmanEdit}
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
                        icon={<PhoneIcon stroke={colors.brand} />}
                        type="text"
                        name="phone"
                        placeholder="Telefono"
                        defaultValue={salesman ? salesman.phone : ""}
                        onChange={isThem ? handleChangeSalesman: handleChangeSalesmanEdit}
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
                        icon={<MailIcon stroke={colors.brand} />}
                        type="text"
                        name="email"
                        placeholder="Correo electronico"
                        defaultValue={salesman ? salesman.email : ""}
                        onChange={isThem ? handleChangeSalesman: handleChangeSalesmanEdit}
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
                        icon={<LocationIcon stroke={colors.brand} />}
                        type="text"
                        name="address"
                        placeholder="Direccion"
                        defaultValue={salesman ? salesman.address : ""}
                        onChange={isThem ? handleChangeSalesman: handleChangeSalesmanEdit}
                      />
                      {errors.address ? (
                        <ErrorMessage>{errors.address}</ErrorMessage>
                      ) : (
                        <ErrorMessageSpace />
                      )}
                    </ErrorMessageContainer>
                    <ErrorMessageContainer>
                      <PasswordInput
                        name="password"
                        size="normalInput"
                        icon={<LockIcon stroke={colors.brand} />}
                        placeholder="Contraseña" 
                        defaultValue={salesman ? salesman.password : ""}
                        onChange={isThem ? handleChangeSalesman: handleChangeSalesmanEdit}
                      />
                      {errors.password ? (
                        <ErrorMessage>{errors.password}</ErrorMessage>
                      ) : (
                        <ErrorMessageSpace />
                      )}
                    </ErrorMessageContainer>
                    <ErrorMessageContainer>
                      <PasswordInput
                        name="repeatPassWord"
                        size="normalInput"
                        icon={<LockIcon stroke={colors.brand} />}
                        placeholder="Confirmar contraseña"
                        defaultValue={salesman ? salesman.password : ""}
                        onChange={isThem ? handleChangeSalesman: handleChangeSalesmanEdit}
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
                      onClick={isThem ?handleSubmitSalesman: handleSubmitSalesmanEdit}
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