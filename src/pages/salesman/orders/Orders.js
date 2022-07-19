import React, { useEffect, useState } from "react";
import { getAllProducts, filterProducts } from "../../../services/product";
import { getAllCategories } from "../../../services/category";
import {
  getAllSalesToDay,
  getBillById,
  assignBill,
  payment,
} from "../../../services/bill";
import { getAllDebtors } from "../../../services/debtor";

import "./Orders.css";
import AnimatedModalContainer from "../../../components/modals/animation/AnimatedModalContainer";
import Header from "../../../components/header/Header";
import SalesmanData from "../../../components/header/SalesmanData";
import Button from "../../../components/buttons/Button";
import OrdersSalesmanCardsContainer from "../../../components/cards-container/OrdersSalesmanCardsContainer";
import CreateOrderModal from "../../../components/modals/CreateOrderModal";
import OrderProductListModal from "../../../components/modals/OrderProductListModal";
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
  const [selected, setSelected] = useState({ name: "Categoría", id: "" });
  const [isOpenCreateOrderModal, setIsOpenCreateOrderModal] = useState(false);
  const [isOpenProductListModal, setIsOpenProductListModal] = useState(false);
  const [isOpenPayOptionsModal, setIsOpenPayOptionsModal] = useState(false);
  const [isOpenPayModeModal, setIsOpenPayModeModal] = useState(false);
  const [isOpenDebtorAssignModal, setIsOpenDebtorAssignModal] = useState(false);

  const closeDebtorAssignModal = () => {
    setIsOpenDebtorAssignModal((isOpen) => !isOpen);
  };

  const openDebtorAssignModal = () => {
    setIsOpenPayOptionsModal(false);
    closeDebtorAssignModal();
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
  };

  const handleBackOrderOptionsOne = () => {
    setIsOpenPayOptionsModal(true);
    closeDebtorAssignModal();
  };

  const handleBackOrderOptionsTwo = () => {
    setIsOpenPayOptionsModal(true);
    setIsOpenPayModeModal((isOpen) => !isOpen);
  };

  const handleSubmitDebtorAssign = (currentDebtor, bill) => {
    if (!currentDebtor._id) {
      console.log("Falta asignar el deudor.");
    } else {
      assignBill(bill._id, currentDebtor._id).then(async (res) => {
        if (res.ok) {
          console.log(
            "¡Deuda asignada al cliente " + currentDebtor.fullname + "!"
          );
          updateBills();
          closeDebtorAssignModal();
        }
      });
    }
  };

  const handleSubmitPayment = (payMode) => {
    payment(bill._id, payMode).then(async () => {
      updateBills();
      setIsOpenPayModeModal((isOpen) => !isOpen);
      console.log("Deuda pagada.");
    });
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

  const getFilterProducts = (idCategory, brand) => {
    filterProducts(idCategory, brand).then(async (res) => {
      setProducts(await res.json());
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
            updateProducts={getProductos}
            setProducts={setProducts}
            selected={selected}
            setSelected={setSelected}
            handleCloseModal={openCreateOrderModal}
            updateBills={updateBills}
            updateListProductByFilter={getFilterProducts}
          />
        }
        isOpen={isOpenCreateOrderModal}
        setIsOpen={setIsOpenCreateOrderModal}
      />
      <AnimatedModalContainer
        modal={
          <OrderProductListModal
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
            handleSubmitPayment={handleSubmitPayment}
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
