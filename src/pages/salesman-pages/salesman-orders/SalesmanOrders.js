import React, { useEffect, useState } from "react";
import { getAllProducts } from "../../../services/product";
import { getAllCategories } from "../../../services/category";
import { getAllSalesToDay } from "../../../services/bill";

import "./SalesmanOrders.css";
import styled from "styled-components";
import AnimatedModalContainer from "../../../components/modals/animation/AnimatedModalContainer";
import Header from "../../../components/header/Header";
import SalesmanData from "../../../components/header/SalesmanData";
import Button from "../../../components/buttons/Button";
import OrdersSalesmanCardsContainer from "../../../components/cards-container/OrdersSalesmanCardsContainer";
import CreateOrderModal from "../../../components/modals/CreateOrderModal";
import OrderProductsListModal from "../../../components/modals/OrderProductsListModal";
import { ReactComponent as Add } from "../../../assets/icons/add.svg";

const AddOrdersContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 25px 25px 0 25px;
`;

const SalesmanOrders = ({ salesmanName }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState({});
  const [getBills, setBills] = useState([]);
  const [bill, setBill] = useState();
  const [selected, setSelected] = useState("Categoría");
  const [isOpenCreateOrderModal, setIsOpenCreateOrderModal] = useState(false);
  const [isOpenProductListModal, setIsOpenProductListModal] = useState(false);

  const openCreateOrderModal = () => {
    setIsOpenCreateOrderModal((isOpen) => !isOpen);
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
    setBill(bill);
    setIsOpenProductListModal((isOpen) => !isOpen);
  };

  const isOpenProductList = () => {
    setIsOpenProductListModal(false);
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
            handleCloseModal={isOpenProductList}
          />
        }
        isOpen={isOpenProductListModal}
        setIsOpen={setIsOpenProductListModal}
      />
      <Header
        title="Pedidos"
        description="Información de los pedidos realizados por mesa"
        component={<SalesmanData salesmanName={salesmanName} />}
      />
      <AddOrdersContainer>
        <Button
          size="mediumButton"
          theme="ok"
          icon={<Add fill="white" />}
          text="Agregar Pedido"
          onClick={openCreateOrderModal}
        />
      </AddOrdersContainer>
      <OrdersSalesmanCardsContainer
        bills={getBills}
        handleOpenProductList={showBill}
      />
    </div>
  );
};

export default SalesmanOrders;
