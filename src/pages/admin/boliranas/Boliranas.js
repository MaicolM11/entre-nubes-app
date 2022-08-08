import React, { useState, useEffect } from "react";
import { getAllBoliranas, deleteBolirana } from "../../../services/bolirana";

import "./Boliranas.css";
import Header from "../../../components/header/Header";
import NotificationButton from "../../../components/header/NotificationButton";
import Button from "../../../components/buttons/Button";
import AnimatedModalContainer from "../../../components/modals/animation/AnimatedModalContainer";
import AddBoliranaModal from "../../../components/modals/AddBoliranaModal";
import {
  PageOptionsCenterContainer,
  PageOptionsContainer,
} from "../../../components/styles/style-components";
import BoliranasContainer from "../../../components/cards-container/BoliranasContainer";
import SuccessfulModal from "../../../components/modals/SuccessfulModal";
import DeleteModal from "../../../components/modals/DeleteModal";
import { ReactComponent as Add } from "../../../assets/icons/add.svg";
import { ReactComponent as EmptyTime } from "../../../assets/images/empty-time.svg";
import EmptyMessage from "../../../components/empty-message/EmptyMessage";

const Boliranas = () => {
  const [boliranas, setBoliranas] = useState([]);
  const [bolirana, setBolirana] = useState();

  const [isOpenAddBoliranaModal, setIsOpenAddBoliranaModal] = useState(false);
  const [
    isOpenSuccessCreatedBoliranaModal,
    setIsOpenSuccessCreatedBoliranaModal,
  ] = useState(false);
  const [isOpenDeleteBoliranaModal, setIsOpenDeleteBoliranaModal] =
    useState(false);

  const openAddBoliranaModal = () => {
    setIsOpenAddBoliranaModal((open) => !open);
  };

  const openCreatedBoliranaModal = () => {
    setIsOpenSuccessCreatedBoliranaModal((open) => !open);
  };

  const openDeleteBoliranaModal = () => {
    setIsOpenDeleteBoliranaModal((open) => !open);
  };

  const handleDeleteBolirana = (bolirana) => {
    setBolirana(bolirana);
    openDeleteBoliranaModal();
  };

  const deleteCurrentBolirana = () => {
    deleteBolirana(bolirana._id).then(async () => {
      openDeleteBoliranaModal();
      getBoliranas();
    });
  };

  const getBoliranas = () => {
    getAllBoliranas().then(async (res) => {
      setBoliranas(await res.json());
    });
  };

  useEffect(() => {
    getBoliranas();
  }, []);

  return (
    <div className="admin-boliranas-container">
      <AnimatedModalContainer
        modal={
          <AddBoliranaModal
            setIsOpenAddBolirana={setIsOpenAddBoliranaModal}
            getBoliranasList={getBoliranas}
            openSuccessfulModal={openCreatedBoliranaModal}
          />
        }
        isOpen={isOpenAddBoliranaModal}
        setIsOpen={setIsOpenAddBoliranaModal}
      />
      <AnimatedModalContainer
        modal={
          <SuccessfulModal
            message="¡Bolirana agregada correctamente!"
            handleSubmitOk={openCreatedBoliranaModal}
          />
        }
        isOpen={isOpenSuccessCreatedBoliranaModal}
        setIsOpen={setIsOpenSuccessCreatedBoliranaModal}
      />
      <AnimatedModalContainer
        modal={
          <DeleteModal
            message={
              bolirana && `¿Esta seguro que desea eliminar la ${bolirana.name}?`
            }
            buttonMessage="Eliminar Bolirana"
            handleCloseModal={openDeleteBoliranaModal}
            handleSubmitDelete={deleteCurrentBolirana}
          />
        }
        isOpen={isOpenDeleteBoliranaModal}
        setIsOpen={setIsOpenDeleteBoliranaModal}
      />
      <Header
        title="Boliranas"
        description="Información de las Boliranas"
        component={<NotificationButton />}
      />
      <PageOptionsContainer>
        <PageOptionsCenterContainer>
          <Button
            size="mediumButton"
            theme="ok"
            icon={<Add fill="white" />}
            text="Agregar Bolirana"
            onClick={openAddBoliranaModal}
          />
        </PageOptionsCenterContainer>
      </PageOptionsContainer>
      {boliranas.length > 0 ? (
        <BoliranasContainer
          boliranasList={boliranas}
          handleDeleteBolirana={handleDeleteBolirana}
        />
      ) : (
        <EmptyMessage
          img={<EmptyTime width={350} height={350} />}
          title="Sin Boliranas"
          description="Aún no se han comprado las Boliranas para el Bar."
        />
      )}
    </div>
  );
};

export default Boliranas;
