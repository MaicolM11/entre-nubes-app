import React, { useEffect, useState } from "react";
import { getAllDebtors } from "../../../services/debtor";

import "./Debtors.css";
import { colors } from "../../../components/styles/colors";
import Header from "../../../components/header/Header";
import SalesmanData from "../../../components/header/SalesmanData";
import DebtorCardsContainer from "../../../components/cards-container/DebtorCardsContainer";
import AnimatedModalContainer from "../../../components/modals/animation/AnimatedModalContainer";
import PayModeModal from "../../../components/modals/PayModeModal";
import Button from "../../../components/buttons/Button";
import CreateDebtorModal from "../../../components/modals/CreateDebtorModal";
import SuccessfulModal from "../../../components/modals/SuccessfulModal";
import { AddButtonTopContainer } from "../../../components/styles/style-components";
import { ReactComponent as Add } from "../../../assets/icons/add.svg";

const Debtors = ({ salesmanName }) => {
  const [debtors, setDebtors] = useState([]);
  const [isOpenPayModeModal, setIsOpenPayModeModal] = useState(false);
  const [isOpenCreateDebtorModal, setIsOpenCreateDebtorModal] = useState(false);
  const [isOpenSuccessfulModal, setIsOpenSuccessfulModal] = useState(false);

  const closeSuccessfulModal = () => {
    setIsOpenSuccessfulModal((isOpen) => !isOpen);
  };

  const getDebtors = () => {
    getAllDebtors().then(async (res) => {
      setDebtors(await res.json());
    });
  };

  const handlePayMode = (debtor) => {
    console.log(debtor.fullname);
    openPayModeModal();
  };

  const handleSubmitPayMode = (payMode) => {
    console.log(payMode);
  };

  const openPayModeModal = () => {
    setIsOpenPayModeModal((isOpen) => !isOpen);
  };

  const openCreateDebtorModal = () => {
    setIsOpenCreateDebtorModal((isOpen) => !isOpen);
  };

  useEffect(() => {
    getDebtors();
  }, []);

  return (
    <div className="salesman-debtors-container">
      <AnimatedModalContainer
        modal={
          <PayModeModal
            handleSubmitPayment={handleSubmitPayMode}
            setIsOpen={setIsOpenPayModeModal}
          />
        }
        isOpen={isOpenPayModeModal}
        setIsOpen={setIsOpenPayModeModal}
      />
      <AnimatedModalContainer
        modal={
          <CreateDebtorModal
            setIsOpen={setIsOpenCreateDebtorModal}
            setIsOpenSuccessfulModal={setIsOpenSuccessfulModal}
            updateDebtors={getDebtors}
          />
        }
        isOpen={isOpenCreateDebtorModal}
        setIsOpen={setIsOpenCreateDebtorModal}
      />
      <AnimatedModalContainer
        modal={
          <SuccessfulModal
            message="¡Deudor agregado correctamente!"
            handleSubmitOk={closeSuccessfulModal}
          />
        }
        isOpen={isOpenSuccessfulModal}
        setIsOpen={setIsOpenSuccessfulModal}
      />
      <Header
        title="Deudores"
        description="Información de los clientes deudores"
        component={<SalesmanData salesmanName={salesmanName} />}
      />
      <AddButtonTopContainer>
        <Button
          size="mediumButton"
          theme="ok"
          icon={<Add fill={colors.secondary} />}
          text="Agregar Deudor"
          onClick={openCreateDebtorModal}
        />
      </AddButtonTopContainer>
      <DebtorCardsContainer debtors={debtors} handlePayMode={handlePayMode} />
    </div>
  );
};

export default Debtors;
