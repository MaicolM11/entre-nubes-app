import React, { useEffect, useState } from "react";
import { getAllDebtors, getClientDebts } from "../../../services/debtor";

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
import PendingPaymentsModal from "../../../components/modals/PendingPaymentsModal";
import { AddButtonTopContainer } from "../../../components/styles/style-components";
import { ReactComponent as Add } from "../../../assets/icons/add.svg";

const Debtors = ({ salesmanName }) => {
  const [debtors, setDebtors] = useState([]);
  const [isOpenCreateDebtorModal, setIsOpenCreateDebtorModal] = useState(false);
  const [isOpenSuccessfulModal, setIsOpenSuccessfulModal] = useState(false);
  const [isOpenPayModeModal, setIsOpenPayModeModal] = useState(false);
  const [isOpenPendingPaymentsModal, setIsOpenPendingPaymentsModal] =
    useState(false);
  const [debts, setDebts] = useState([]);

  const openCreateDebtorModal = () => {
    setIsOpenCreateDebtorModal((isOpen) => !isOpen);
  };

  const openSuccessfulModal = () => {
    setIsOpenSuccessfulModal((isOpen) => !isOpen);
  };

  const openPayModeModal = (debtor) => {
    console.log(debtor.fullname);
    setIsOpenPayModeModal((isOpen) => !isOpen);
  };

  const openPendingPaymentsModal = (debtor) => {
    getClientDebts(debtor._id).then(async (res) => {
      setDebts(await res.json());
    });
    handleIsOpenClosePendingPaymentsModal();
  };

  const handleIsOpenClosePendingPaymentsModal = () => {
    setIsOpenPendingPaymentsModal((isOpen) => !isOpen);
  };

  const handleSubmitPayMode = (payMode) => {
    console.log(payMode);
  };

  const getDebtors = () => {
    getAllDebtors().then(async (res) => {
      setDebtors(await res.json());
    });
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
            handleBackOrderOptions={setIsOpenPayModeModal}
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
            handleSubmitOk={openSuccessfulModal}
          />
        }
        isOpen={isOpenSuccessfulModal}
        setIsOpen={setIsOpenSuccessfulModal}
      />
      <AnimatedModalContainer
        modal={
          <PendingPaymentsModal
            handleCloseModal={handleIsOpenClosePendingPaymentsModal}
            debts={debts}
          />
        }
        isOpen={isOpenPendingPaymentsModal}
        setIsOpen={setIsOpenPendingPaymentsModal}
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
      <DebtorCardsContainer
        debtors={debtors}
        handleSubmitPendingPayments={openPendingPaymentsModal}
      />
    </div>
  );
};

export default Debtors;
