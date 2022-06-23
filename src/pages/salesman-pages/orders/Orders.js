import React, { useEffect, useState } from "react";
import { getAllProducts } from "../../../services/product";
import { getAllCategories } from "../../../services/category";

import "./Orders.css";
import styled from "styled-components";
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
  const [categories, setCategories] = useState({});
  const [products, setProducts] = useState([]);
  const [isOpenCreateOrderModal, setIsOpenCreateOrderModal] = useState(false);
  const [selected, setSelected] = useState("Categoría");

  const openCreateOrderModal = () => {
    setIsOpenCreateOrderModal((isOpen) => !isOpen);
  };

  const getCategories = () => {
    getAllCategories().then(async (res) => {
      setCategories(await res.json());
    });
  };

  const getProductos = () => {
    getAllProducts().then(async (res) => {
      setProducts(await res.json());
    });
  };

  useEffect(() => {
    getCategories();
    getProductos();
  }, []);

  return (
    <div className="salesman-orders-container">
      <AnimatedModalContainer
        modal={
          <CreateOrderModal
            categories={categories}
            products={products}
            handleCloseModal={openCreateOrderModal}
            selected={selected}
            setSelected={setSelected}
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
