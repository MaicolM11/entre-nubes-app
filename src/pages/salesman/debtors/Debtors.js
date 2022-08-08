import React, { useEffect, useState } from "react";
import { getAllDebtors, getClientDebts } from "../../../services/debtor";
import { getBillById, debtorPayment } from "../../../services/bill";
import { useSuccessfulOpenModal } from "../../../hooks/useOpenModal";

import "./Debtors.css";
import { colors } from "../../../components/styles/colors";
import {
  PageOptionsContainer,
  PageOptionsCenterContainer,
} from "../../../components/styles/style-components";
import { ReactComponent as Add } from "../../../assets/icons/add.svg";
import Header from "../../../components/header/Header";
import SalesmanData from "../../../components/header/SalesmanData";
import DebtorCardsContainer from "../../../components/cards-container/DebtorCardsContainer";
import AnimatedModalContainer from "../../../components/modals/animation/AnimatedModalContainer";
import PayModeModal from "../../../components/modals/PayModeModal";
import Button from "../../../components/buttons/Button";
import CreateDebtorModal from "../../../components/modals/CreateDebtorModal";
import SuccessfulModal from "../../../components/modals/SuccessfulModal";
import PendingPaymentsModal from "../../../components/modals/PendingPaymentsModal";
import OrderProductListModal from "../../../components/modals/OrderProductListModal";
import EmptyMessage from "../../../components/empty-message/EmptyMessage";
import { ReactComponent as EmptyDeptors } from "../../../assets/images/empty-money.svg";

const Debtors = ({ salesmanName }) => {
  const [debtors, setDebtors] = useState([]);
  const [isOpenCreateDebtorModal, setIsOpenCreateDebtorModal] = useState(false);
  const [isOpenSuccessfulModal, setIsOpenSuccessfulModal] = useState(false);
  const [isOpenPayModeModal, setIsOpenPayModeModal] = useState(false);
  const [isOpenPendingPaymentsModal, setIsOpenPendingPaymentsModal] =
    useState(false);
  const [isOpenProductsBillModal, setIsOpenProductsBillModal] = useState(false);
  const [debts, setDebts] = useState([]);
  const [debtor, setDebtor] = useState({});
  const [bill, setBill] = useState({});
  const [debt, setDebt] = useState({});
  const [products, setProducts] = useState([]);

  const { isOpenSuccessfulPayModal, isSuccessfulPayModalState } =
    useSuccessfulOpenModal();

  const handleIsOpenProductsModal = () => {
    handleIsOpenClosePendingPaymentsModal();
    openOrderProductListModal();
  };

  const showBillProducts = (debt) => {
    setProducts([]);
    setBill(debt);
    getBillById(debt._id).then(async (res) => {
      setProducts(await res.json());
    });
    openOrderProductListModal();
    handleIsOpenClosePendingPaymentsModal();
  };

  const updateBillProducts = () => {
    setDebts([]);
    openClosePayModeModal();
    handleIsOpenClosePendingPaymentsModal();
    getClientDebts(debtor._id).then(async (res) => {
      setDebts(await res.json());
    });
  };

  const openOrderProductListModal = () => {
    setIsOpenProductsBillModal((isOpen) => !isOpen);
  };

  const openCreateDebtorModal = () => {
    setIsOpenCreateDebtorModal((isOpen) => !isOpen);
  };

  const openSuccessfulModal = () => {
    setIsOpenSuccessfulModal((isOpen) => !isOpen);
  };

  const openClosePayModeModal = () => {
    setIsOpenPayModeModal((isOpen) => !isOpen);
  };

  const openPayModeModal = (debt) => {
    setDebt(debt);
    handleIsOpenClosePendingPaymentsModal();
    openClosePayModeModal();
  };

  const openPendingPaymentsModal = (debtor) => {
    setDebtor(debtor);
    setDebts([]);
    handleIsOpenClosePendingPaymentsModal();
    getClientDebts(debtor._id).then(async (res) => {
      setDebts(await res.json());
    });
  };

  const handleIsOpenClosePendingPaymentsModal = () => {
    setIsOpenPendingPaymentsModal((isOpen) => !isOpen);
  };

  const handleSubmitDebtPayment = (payMode) => {
    debtorPayment(debt._id, payMode, debtor._id).then(async () => {
      updateBillProducts();
      isSuccessfulPayModalState();
    });
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
            handleSubmitPayment={handleSubmitDebtPayment}
            handleBackOrderOptions={openPayModeModal}
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
            openProductsModal={showBillProducts}
            openPayModeModal={openPayModeModal}
          />
        }
        isOpen={isOpenPendingPaymentsModal}
        setIsOpen={setIsOpenPendingPaymentsModal}
      />
      <AnimatedModalContainer
        modal={
          <OrderProductListModal
            isDebtor={true}
            bill={bill}
            productsSale={products}
            handleCloseModal={handleIsOpenProductsModal}
          />
        }
        isOpen={isOpenProductsBillModal}
        setIsOpen={setIsOpenProductsBillModal}
      />
      <AnimatedModalContainer
        modal={
          <SuccessfulModal
            message="¡El pago se realizo correctamente!"
            handleSubmitOk={isSuccessfulPayModalState}
          />
        }
        isOpen={isOpenSuccessfulPayModal}
        setIsOpen={isSuccessfulPayModalState}
      />
      <Header
        title="Deudores"
        description="Información de los clientes deudores"
        component={<SalesmanData salesmanName={salesmanName} />}
      />
      <PageOptionsContainer>
        <PageOptionsCenterContainer>
          <Button
            size="mediumButton"
            theme="ok"
            icon={<Add fill={colors.secondary} />}
            text="Agregar Deudor"
            onClick={openCreateDebtorModal}
          />
        </PageOptionsCenterContainer>
      </PageOptionsContainer>
      {debtors.length > 0 ? (
        <DebtorCardsContainer
          debtors={debtors}
          handleSubmitPendingPayments={openPendingPaymentsModal}
        />
      ) : (
        <EmptyMessage
          img={<EmptyDeptors width={350} height={350} />}
          title="Sin Deudores"
          description="Aún no se han registrado deudores en el Bar."
        />
      )}
    </div>
  );
};

export default Debtors;
