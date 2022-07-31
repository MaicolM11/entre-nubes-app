import React, { useState, useEffect } from "react";
import { getAllUsers, deleteUser } from "../../../services/user";

import "./Salesmans.css";
import AnimatedModalContainer from "../../../components/modals/animation/AnimatedModalContainer";
import Header from "../../../components/header/Header";
import NotificationButton from "../../../components/header/NotificationButton";
import Button from "../../../components/buttons/Button";
import DeleteModal from "../../../components/modals/DeleteModal";
import CreateSalesmanModal from "../../../components/modals/CreateSalesmanModal";
import EditSalesmanModal from "../../../components/modals/EditSalesmanModal";
import SalesmanCardsContainer from "../../../components/cards-container/SalesmanCardsContainer";
import SuccessfulSalesmanModal from "../../../components/modals/SuccessfulSalesmanModal";
import SuccessfulEditedSalesmanModal from "../../../components/modals/SuccessfulEditedSalesmanModal";
import { ReactComponent as AddPerson } from "../../../assets/icons/add-person.svg";
import {
  PageOptionsCenterContainer,
  PageOptionsContainer,
} from "../../../components/styles/style-components";

const Salesmans = () => {
  const [salesmans, setSalesmans] = useState([]);
  const [salesman, setSalesman] = useState({});

  const [isOpenAddSalesmanModal, setIsOpenAddSalesmanModal] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [isOpenEditSalesmanModal, setIsOpenEditSalesmanModal] = useState(false);
  const [
    isOpenSuccessCreatedSalesmanModal,
    setIsOpenSuccessCreatedSalesmanModal,
  ] = useState(false);
  const [
    isOpenSuccessEditedSalesmanModal,
    setIsOpenSuccessEditedSalesmanModal,
  ] = useState(false);

  const openAddSalesmanModal = () => {
    setIsOpenAddSalesmanModal((isOpen) => !isOpen);
  };

  const openCreatedSalesmanModal = () => {
    setIsOpenSuccessCreatedSalesmanModal((open) => !open);
  };

  const openEditedSalesmanModal = () => {
    setIsOpenSuccessEditedSalesmanModal((open) => !open);
  };

  const openDeleteSalesmanModal = (salesman) => {
    setSalesman(salesman);
    setIsOpenDeleteModal((isOpen) => !isOpen);
  };

  const openEditSalesmanModal = (salesman) => {
    setSalesman(salesman);
    setIsOpenEditSalesmanModal((isOpen) => !isOpen);
  };

  const closeDeleteSalesmanModal = () => {
    setIsOpenDeleteModal((isOpen) => !isOpen);
  };

  const handleSubmitDeleteUser = () => {
    deleteUser(salesman._id).then(async () => {
      openDeleteSalesmanModal();
      getSalesmans();
    });
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
      <CreateSalesmanModal
        info="Agregar Vendedor"
        isOpen={isOpenAddSalesmanModal}
        setIsOpen={setIsOpenAddSalesmanModal}
        openSuccessfulCreatedSalesmanModal={openCreatedSalesmanModal}
        updateSalesmans={getSalesmans}
      />
      {salesman && (
        <AnimatedModalContainer
          modal={
            <EditSalesmanModal
              info="Editar Vendedor"
              salesman={salesman}
              updateSalesmans={getSalesmans}
              setIsOpen={setIsOpenEditSalesmanModal}
              openSuccessfulEditedSalesmanModal={openEditedSalesmanModal}
            />
          }
          isOpen={isOpenEditSalesmanModal}
          setIsOpen={setIsOpenEditSalesmanModal}
        />
      )}
      <AnimatedModalContainer
        modal={
          <DeleteModal
            message="¿Desea eliminar el contrato del vendedor?"
            buttonMessage="Eliminar Contrato"
            handleCloseModal={closeDeleteSalesmanModal}
            handleSubmitDelete={handleSubmitDeleteUser}
          />
        }
        isOpen={isOpenDeleteModal}
        setIsOpen={setIsOpenDeleteModal}
      />
      <AnimatedModalContainer
        modal={
          <SuccessfulSalesmanModal
            message="¡Vendedor agregado correctamente!"
            handleSubmitOk={openCreatedSalesmanModal}
          />
        }
        isOpen={isOpenSuccessCreatedSalesmanModal}
        setIsOpen={setIsOpenSuccessCreatedSalesmanModal}
      />
      <AnimatedModalContainer
        modal={
          <SuccessfulEditedSalesmanModal
            message="¡La información del vendedor se actualizó correctamente!"
            handleSubmitOk={openEditedSalesmanModal}
          />
        }
        isOpen={isOpenSuccessEditedSalesmanModal}
        setIsOpen={setIsOpenSuccessEditedSalesmanModal}
      />
      <Header
        title="Vendedores"
        description="Información de los vendedores contratados"
        component={<NotificationButton />}
      />
      <PageOptionsContainer>
        <PageOptionsCenterContainer>
          <Button
            size="mediumButton"
            theme="ok"
            icon={<AddPerson fill="white" />}
            text="Agregar Vendedor"
            onClick={openAddSalesmanModal}
          />
        </PageOptionsCenterContainer>
      </PageOptionsContainer>
      <SalesmanCardsContainer
        salesmans={salesmans}
        openEditSalemanModal={openEditSalesmanModal}
        openDeleteSalesmanModal={openDeleteSalesmanModal}
      />
    </div>
  );
};

export default Salesmans;
