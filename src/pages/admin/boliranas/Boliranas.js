import React,{ useState, useEffect } from "react";
import "./Boliranas.css";
import Header from "../../../components/header/Header";
import NotificationButton from "../../../components/header/NotificationButton";
import styled from "styled-components";
import Button from "../../../components/buttons/Button";
import AnimatedModalContainer from "../../../components/modals/animation/AnimatedModalContainer";
import CreateBoliranaModal from "../../../components/modals/CreateBoliranaModal";
import { getAllBoliranas } from "../../../services/bolirana";
import BoliranasContainer from "../../../components/cards-container/BoliranasContainer";

const AddBoliranaContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 95px;
  align-items: center;
  padding-left: 25px;
`;

const Boliranas = () => {

  const [boliranas, setBoliranas] = useState([])
  const [isOpenAddModal, setIsOpenAddModal] = useState(false)

  const openAddSalesmanModal = () =>{
    setIsOpenAddModal((open)=> !open)
  }

  const getBoliranas = () =>{
    getAllBoliranas().then(async (res) =>{
      setBoliranas(await res.json())
    })
  }

  useEffect(()=>{
    getBoliranas()
  },[])

  return (
    <div className="admin-boliranas-container">
      <AnimatedModalContainer
        modal={<CreateBoliranaModal 
          setIsOpenAddBolirana= {setIsOpenAddModal}
          getBoliranasList = {getBoliranas}
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
    <BoliranasContainer
      boliranasList={boliranas}
    />
    </div>

  );
};

export default Boliranas;
