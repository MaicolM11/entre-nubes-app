import React, { useEffect, useState } from "react";
import { getAllProducts } from "../../../services/product";
import { getAllCategories } from "../../../services/category";
import { getAllSalesToDay } from "../../../services/bill";
import { getBillById } from "../../../services/bill";

import "./SalesmanOrders.css";
import AnimatedModalContainer from "../../../components/modals/animation/AnimatedModalContainer";
import Header from "../../../components/header/Header";
import SalesmanData from "../../../components/header/SalesmanData";
import Button from "../../../components/buttons/Button";
import OrdersSalesmanCardsContainer from "../../../components/cards-container/OrdersSalesmanCardsContainer";
import CreateOrderModal from "../../../components/modals/CreateOrderModal";
import OrderProductsListModal from "../../../components/modals/OrderProductsListModal";
import PayOptionsModal from "../../../components/modals/PayOptionsModal";
import PayModeModal from "../../../components/modals/PayModeModal";
import { AddButtonTopContainer } from "../../../components/styles/style-components";
import { ReactComponent as Add } from "../../../assets/icons/add.svg";
import { colors } from "../../../components/styles/colors";

const SalesmanOrders = ({ salesmanName }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState({});
  const [getBills, setBills] = useState([]);
  const [bill, setBill] = useState();
  const [productsSale, setProductsSale] = useState([]);
  const [selected, setSelected] = useState("Categoría");
  const [isOpenCreateOrderModal, setIsOpenCreateOrderModal] = useState(false);
  const [isOpenProductListModal, setIsOpenProductListModal] = useState(false);
  const [isOpenPayOptionsModal, setIsOpenPayOptionsModal] = useState(false);
  const [isOpenPayModeModal, setIsOpenPayModeModal] = useState(false);

  const openCreateOrderModal = () => {
    setIsOpenCreateOrderModal((isOpen) => !isOpen);
  };

  const isOpenProductList = () => {
    setIsOpenProductListModal(false);
  };

  const openPayOptionsModal = () => {
    setIsOpenPayOptionsModal((isOpen) => !isOpen);
  };

  const getProductos = () => {
    getAllProducts().then(async (res) => {
      setProducts(await res.json());
    });
  };

  const getCategories = () => {
    getAllCategories().then(async (res) => {
      setCategories(await res.json());
    });
  };

  const updateBills = () => {
    getAllSalesToDay().then(async (res) => {
      setBills(await res.json());
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

  const handlePayOptions = (bill) => {
    console.log(bill);
    openPayOptionsModal();
  };

  const handleAssignGuarantor = () => {};

  const handlePayOrder = () => {
    setIsOpenPayOptionsModal(false);
    setIsOpenPayModeModal((isOpen) => !isOpen);
  };

  const handleBackPayOrder = () => {
    setIsOpenPayOptionsModal(true);
    setIsOpenPayModeModal((isOpen) => !isOpen);
  };

  const handleSubmitPayMode = (payMode) => {
    console.log(payMode);
  };

  useEffect(() => {
    getProductos();
    getCategories();
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
            handleAssignGuarantor={handleAssignGuarantor}
            handlePayOrder={handlePayOrder}
          />
        }
        isOpen={isOpenPayOptionsModal}
        setIsOpen={setIsOpenPayOptionsModal}
      />
      <AnimatedModalContainer
        modal={
          <PayModeModal
            handleSubmitPayment={handleSubmitPayMode}
            setIsOpen={setIsOpenPayModeModal}
            isBack={true}
            handleBackPayOrder={handleBackPayOrder}
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

export default SalesmanOrders;
