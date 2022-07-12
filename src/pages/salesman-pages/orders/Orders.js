import React, { useEffect, useState } from "react";
import { getAllProducts } from "../../../services/product";
import { getAllCategories } from "../../../services/category";
import { getAllSalesToDay } from "../../../services/bill";
import { getBillById } from "../../../services/bill";
import { getAllDebtors } from "../../../services/debtor";

import "./Orders.css";
import AnimatedModalContainer from "../../../components/modals/animation/AnimatedModalContainer";
import Header from "../../../components/header/Header";
import SalesmanData from "../../../components/header/SalesmanData";
import Button from "../../../components/buttons/Button";
import OrdersSalesmanCardsContainer from "../../../components/cards-container/OrdersSalesmanCardsContainer";
import CreateOrderModal from "../../../components/modals/CreateOrderModal";
import OrderProductsListModal from "../../../components/modals/OrderProductsListModal";
import PayOptionsModal from "../../../components/modals/PayOptionsModal";
import PayModeModal from "../../../components/modals/PayModeModal";
import DebtorAssignModal from "../../../components/modals/DebtorAssignModal";
import { AddButtonTopContainer } from "../../../components/styles/style-components";
import { ReactComponent as Add } from "../../../assets/icons/add.svg";
import { colors } from "../../../components/styles/colors";

const Orders = ({ salesmanName }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState({});
  const [debtors, setDebtors] = useState({});
  const [getBills, setBills] = useState([]);
  const [bill, setBill] = useState();
  const [productsSale, setProductsSale] = useState([]);
  const [selected, setSelected] = useState("Categoría");
  const [isOpenCreateOrderModal, setIsOpenCreateOrderModal] = useState(false);
  const [isOpenProductListModal, setIsOpenProductListModal] = useState(false);
  const [isOpenPayOptionsModal, setIsOpenPayOptionsModal] = useState(false);
  const [isOpenPayModeModal, setIsOpenPayModeModal] = useState(false);
  const [isOpenDebtorAssignModal, setIsOpenDebtorAssignModal] = useState(false);

  const openDebtorAssignModal = () => {
    setIsOpenPayOptionsModal(false);
    setIsOpenDebtorAssignModal((isOpen) => !isOpen);
  };

  const openPayModeModal = () => {
    setIsOpenPayOptionsModal(false);
    setIsOpenPayModeModal((isOpen) => !isOpen);
  };

  const openCreateOrderModal = () => {
    setIsOpenCreateOrderModal((isOpen) => !isOpen);
  };

  const isOpenProductList = () => {
    setIsOpenProductListModal(false);
  };

  const openPayOptionsModal = () => {
    setIsOpenPayOptionsModal((isOpen) => !isOpen);
  };

  const handlePayOptions = (bill) => {
    openPayOptionsModal();
    setBill(bill);
    getBillById(bill._id).then(async (res) => {
      setProductsSale(await res.json());
    });
    console.log(bill);
  };

  const handleBackOrderOptionsOne = () => {
    setIsOpenPayOptionsModal(true);
    setIsOpenDebtorAssignModal((isOpen) => !isOpen);
  };

  const handleBackOrderOptionsTwo = () => {
    setIsOpenPayOptionsModal(true);
    setIsOpenPayModeModal((isOpen) => !isOpen);
  };

  const handleSubmitDebtorAssign = (currentDebtor, bill) => {
    if (!currentDebtor._id) {
      console.log("Falta asignar el deudor.");
    } else {
      console.log("Deudor: " + currentDebtor._id);
      console.log("Deuda: " + bill._id);
    }
  };

  const handleSubmitPayMode = (payMode) => {
    console.log(payMode);
  };

  const getCategories = () => {
    getAllCategories().then(async (res) => {
      setCategories(await res.json());
    });
  };

  const getDebtors = () => {
    getAllDebtors().then(async (res) => {
      setDebtors(await res.json());
    });
  };

  const getProductos = () => {
    getAllProducts().then(async (res) => {
      setProducts(await res.json());
    });
  };

  const showBill = (bill) => {
    setProductsSale([]);
    getBillById(bill._id).then(async (res) => {
      setProductsSale(await res.json());
    });
    setBill(bill);
    setIsOpenProductListModal((isOpen) => !isOpen);
  };

  const updateBills = () => {
    getAllSalesToDay().then(async (res) => {
      setBills(await res.json());
    });
  };

  useEffect(() => {
    getCategories();
    getDebtors();
    getProductos();
    updateBills();
  }, []);

  return (
    <div className="salesman-orders-container">
      <AnimatedModalContainer
        modal={
          <CreateOrderModal
            categories={categories}
            products={products}
            setProducts={setProducts}
            selected={selected}
            setSelected={setSelected}
            handleCloseModal={openCreateOrderModal}
            updateBills={updateBills}
          />
        }
        isOpen={isOpenCreateOrderModal}
        setIsOpen={setIsOpenCreateOrderModal}
      />
      <AnimatedModalContainer
        modal={
          <OrderProductsListModal
            bill={bill}
            productsSale={productsSale}
            handleCloseModal={isOpenProductList}
          />
        }
        isOpen={isOpenProductListModal}
        setIsOpen={setIsOpenProductListModal}
      />
      <AnimatedModalContainer
        modal={
          <PayOptionsModal
            openDebtorAssignModal={openDebtorAssignModal}
            openPayModeModal={openPayModeModal}
          />
        }
        isOpen={isOpenPayOptionsModal}
        setIsOpen={setIsOpenPayOptionsModal}
      />
      <AnimatedModalContainer
        modal={
          <DebtorAssignModal
            bill={bill}
            productsSale={productsSale}
            debtors={debtors}
            handleBackOrderOptions={handleBackOrderOptionsOne}
            handleSubmitDebtorAssign={handleSubmitDebtorAssign}
          />
        }
        isOpen={isOpenDebtorAssignModal}
        setIsOpen={setIsOpenDebtorAssignModal}
      />
      <AnimatedModalContainer
        modal={
          <PayModeModal
            handleSubmitPayment={handleSubmitPayMode}
            handleBackOrderOptions={handleBackOrderOptionsTwo}
          />
        }
        isOpen={isOpenPayModeModal}
        setIsOpen={setIsOpenPayModeModal}
      />
      <Header
        title="Pedidos"
        description="Información de los pedidos realizados por mesa"
        component={<SalesmanData salesmanName={salesmanName} />}
      />
      <AddButtonTopContainer>
        <Button
          size="mediumButton"
          theme="ok"
          icon={<Add fill={colors.secondary} />}
          text="Agregar Pedido"
          onClick={openCreateOrderModal}
        />
      </AddButtonTopContainer>
      <OrdersSalesmanCardsContainer
        bills={getBills}
        handleOpenProductList={showBill}
        handlePayOptions={handlePayOptions}
      />
    </div>
  );
};

export default Orders;
