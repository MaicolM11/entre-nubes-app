import React, {useState, useEffect} from "react";
import "./Salesmans.css";
import Header from "../../../components/header/Header";
import NotificationButton from "../../../components/header/NotificationButton";
import { ReactComponent as AddPerson } from "../../../assets/icons/person_add.svg";
import styled from "styled-components";
import Button from "../../../components/buttons/Button";

import SalesmanCardsContainer from "../../../components/cards-container/SalesmanCardsContainer";
import SalesmanModal from "../../../components/modals/SalesmanModal";
import {getAllUsers } from "../../../services/user" 

const AddSalesmanContainer = styled.div`
display: flex;
width: 100%;
min-height: 95px;
align-items: center;
padding-left: 25px;
`;

const Salesmans = () => {
  const [salesmans, setSalesmans] = useState([]);

  const [isOpenAddSalesmanModal, setIsOpenAddSalesmanModal] = useState(false);
  
  const openAddSalesmanModal = () => {
    setIsOpenAddSalesmanModal((isOpen) => !isOpen);
  };

  useEffect(() => {
    getSalesmans();
  }, []);

  const getSalesmans = () => {
    getAllUsers().then(async (res) => {
      setSalesmans(await res.json());
    });
  };

  return (
    <div className="admin-salesmans-container">
      <SalesmanModal
      isThem={true}
      info='Agregar Vendedor'
      buttonTheme='ok'
      updateSalesman={getSalesmans}
      isOpen={isOpenAddSalesmanModal}
      setIsOpen={setIsOpenAddSalesmanModal}>
      </SalesmanModal>
      <Header
        title="Vendedores"
        description="Información de los vendedores contratados"
        component={<NotificationButton />}
      />
      <AddSalesmanContainer>
        <Button
            size="mediumButton"
            theme="ok"
            icon={<AddPerson fill="white" />}
            text="Crear vendedor"
            onClick={openAddSalesmanModal}
          />
      </AddSalesmanContainer>
      <SalesmanCardsContainer salesmans={salesmans}/>
    </div>
  );
};

export default Salesmans;
