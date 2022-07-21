import React,{ useState, useEffect } from "react";
import "./Boliranas.css";
import Header from "../../../components/header/Header";
import NotificationButton from "../../../components/header/NotificationButton";
import styled from "styled-components";
import Button from "../../../components/buttons/Button";
import AnimatedModalContainer from "../../../components/modals/animation/AnimatedModalContainer";
import CreateBoliranaModal from "../../../components/modals/CreateBoliranaModal";


const AddBoliranaContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 95px;
  align-items: center;
  padding-left: 25px;
`;

const Boliranas = () => {

  const [isOpenAddModal, setIsOpenAddModal] = useState(false)

  const openAddSalesmanModal = () =>{
    setIsOpenAddModal((open)=> !open)
  }

  return (
    <div className="admin-boliranas-container">
      <AnimatedModalContainer
        modal={<CreateBoliranaModal 
          setIsOpenAddBolirana= {setIsOpenAddModal}
        />}
        isOpen={isOpenAddModal}
        setIsOpen={setIsOpenAddModal}
      />
     
      <Header
        title="Boliranas"
        description="Información de las Boliranas"
        component={<NotificationButton />}
      />
    <AddBoliranaContainer>
    <Button
          size="mediumButton"
          theme="ok"
          // icon={<AddPerson fill="white" />}
          text="Crear bolirana"
          onClick={openAddSalesmanModal}
        />
    </AddBoliranaContainer>
    </div>

  );
};

export default Boliranas;
