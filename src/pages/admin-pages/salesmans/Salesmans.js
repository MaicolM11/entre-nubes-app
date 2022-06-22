import React from "react";
import "./Salesmans.css";
import Header from "../../../components/header/Header";
import NotificationButton from "../../../components/header/NotificationButton";
import { ReactComponent as AddPerson } from "../../../assets/icons/person_add.svg";
import styled from "styled-components";
import Button from "../../../components/buttons/Button";

import SalesmancardsContainer from "../../../components/cards-container/SalesmanCardsContainer";

const AddSalesmanContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 95px;
  align-items: center;
  padding-left: 25px;
`;

const Salesmans = () => {
  return (
    <div className="admin-salesmans-container">
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
            // onClick={submitUser}
          />
      </AddSalesmanContainer>
      <SalesmancardsContainer/>
    </div>
  );
};

export default Salesmans;
