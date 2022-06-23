import React, { useEffect, useState } from "react";
import { getAllProducts } from "../../../services/product";
import styled from "styled-components";
import "./Orders.css";
import AnimatedModalContainer from "../../../components/modals/animation/AnimatedModalContainer";
import Header from "../../../components/header/Header";
import SalesmanData from "../../../components/header/SalesmanData";
import Button from "../../../components/buttons/Button";
import OrderCardsContainer from "../../../components/cards-container/OrderCardsContainer";
import CreateOrderModal from "../../../components/modals/CreateOrderModal";

import { ReactComponent as Add } from "../../../assets/icons/add.svg";

const AddOrdersContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 95px;
  align-items: center;
  padding-left: 25px;
`;

const Orders = ({ salesmanName }) => {
  const [products, setProducts] = useState([]);
  const [isOpenCreateOrderModal, setIsOpenCreateOrderModal] = useState(false);

  const openCreateOrderModal = () => {
    setIsOpenCreateOrderModal((isOpen) => !isOpen);
  };

  const getProductos = () => {
    getAllProducts().then(async (res) => {
      setProducts(await res.json());
    });
  };

  useEffect(() => {
    getProductos();
  }, []);

  return (
    <div className="salesman-orders-container">
      <AnimatedModalContainer
        modal={
          <CreateOrderModal
            products={products}
            handleCloseModal={openCreateOrderModal}
          />
        }
        isOpen={isOpenCreateOrderModal}
        setIsOpen={setIsOpenCreateOrderModal}
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
      <OrderCardsContainer />
    </div>
  );
};

export default Orders;
