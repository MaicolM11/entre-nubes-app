import React, { useEffect, useState } from "react";
import { getAllDebtors } from "../../../services/debtor";

import "./Guarantors.css";
import { colors } from "../../../components/styles/colors";
import Header from "../../../components/header/Header";
import SalesmanData from "../../../components/header/SalesmanData";
import DebtorCardsContainer from "../../../components/cards-container/DebtorCardsContainer";
import AnimatedModalContainer from "../../../components/modals/animation/AnimatedModalContainer";
import PayModeModal from "../../../components/modals/PayModeModal";
import Button from "../../../components/buttons/Button";
import CreateGuarantorModal from "../../../components/modals/CreateGuarantorModal";
import SuccessfulModal from "../../../components/modals/SuccessfulModal";
import { AddButtonTopContainer } from "../../../components/styles/style-components";
import { ReactComponent as Add } from "../../../assets/icons/add.svg";

const Guarantors = ({ salesmanName }) => {
  const [debtors, setDebtors] = useState([]);
  const [isOpenPayModeModal, setIsOpenPayModeModal] = useState(false);
  const [isOpenCreateGuarantorModal, setIsOpenCreateGuarantorModal] =
    useState(false);
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

  const openCreateGuarantorModal = () => {
    setIsOpenCreateGuarantorModal((isOpen) => !isOpen);
  };

  useEffect(() => {
    getDebtors();
  }, []);

  return (
    <div className="salesman-guarantors-container">
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
          <CreateGuarantorModal
            setIsOpen={setIsOpenCreateGuarantorModal}
            setIsOpenSuccessfulModal={setIsOpenSuccessfulModal}
            updateGuarantors={getDebtors}
          />
        }
        isOpen={isOpenCreateGuarantorModal}
        setIsOpen={setIsOpenCreateGuarantorModal}
      />
      <AnimatedModalContainer
        modal={
          <SuccessfulModal
            message="¡Fiador agregado correctamente!"
            handleSubmitOk={closeSuccessfulModal}
          />
        }
        isOpen={isOpenSuccessfulModal}
        setIsOpen={setIsOpenSuccessfulModal}
      />
      <Header
        title="Fiadores"
        description="Información de los clientes fiadores"
        component={<SalesmanData salesmanName={salesmanName} />}
      />
      <AddButtonTopContainer>
        <Button
          size="mediumButton"
          theme="ok"
          icon={<Add fill={colors.secondary} />}
          text="Agregar Fiador"
          onClick={openCreateGuarantorModal}
        />
      </AddButtonTopContainer>
      <DebtorCardsContainer debtors={debtors} handlePayMode={handlePayMode} />
    </div>
  );
};

export default Guarantors;
