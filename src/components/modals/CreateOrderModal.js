import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { colors } from "../styles/colors";
import { ModalTitle, SelectContainer } from "../styles/style-components";
import Button from "../buttons/Button";
import BorderButton from "../buttons/BorderButton";
import OrderProductCardsContainer from "../cards-container/OrderProductCardsContainer";
import SearchInput from "../inputs/DataInput";
import SelectCategory from "../select/SelectCategory";
import { ReactComponent as Search } from "../../assets/icons/search.svg";
import Table from "../table/Table";

const CreateOrderModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1230px;
  height: 675px;
  background-color: ${colors.secondary};
  border-radius: 16px;
`;

const CreateOrderModalTitleContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 25px;
  border-bottom: solid 1px ${colors.border};
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 25px;
`;

const OrderOptionsContainer = styled.div`
  display: flex;
  width: 100%;
`;

const ProductsContainer = styled.div`
  display: flex;
  border-right: solid 1px ${colors.border};
`;

const ProductsCenterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 25px;
  gap: 25px;
`;

const ProductsFilterContainer = styled.div`
  display: flex;
  width: 100%;
  padding-bottom: 15px;
  border-bottom: solid 1px ${colors.border};
`;

const ProductsCardContainer = styled.div`
  display: flex;
  width: 100%;
  height: 467px;
  min-height: 467px;
`;

const OrdersContainer = styled.div`
  display: flex;
  width: 630px;
`;

const OrdersCenterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: darkorchid;
  margin: 25px;
  gap: 25px;
`;

const OrderPlaceContainer = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  min-height: 60px;
  background-color: magenta;
`;

const OrderTableContainer = styled.div`
  display: flex;
  width: 100%;
  height: 450px;
  background-color: darkslateblue;
`;

const TitleInfo = styled.label`
  width: 100%;
  color: ${colors.text};
  font-size: 24px;
  font-weight: bold;
  font-family: var(--roboto);
  white-space: nowrap;
`;
const FilterContainer = styled.div`
  display: flex;
  width: 385px;
  min-width: 385px;
  gap: 15px;
`;

const CreateOrderModal = ({
  categories,
  products,
  selected,
  setSelected,
  handleCloseModal,
}) => {
  const productList = [];
  const [orderProducts, setOrderProducts] = useState([]);

  const handleAddProductOrder = (product) => {
    productList.push({ brand: product.brand, sale_price: product.buy_price });
    setOrderProducts((productList) => [...productList, product]);
  };

  return (
    <CreateOrderModalContainer>
      <CreateOrderModalTitleContainer>
        <ModalTitle>Agregar Pedido</ModalTitle>
        <ButtonsContainer>
          <BorderButton
            size="mediumBorderButton"
            text="Cancelar"
            onClick={handleCloseModal}
          />
          <Button
            size="mediumModalButton"
            theme="ok"
            text="Agregar Pedido"
            //   onClick={handleDeleteProduct}
          />
        </ButtonsContainer>
      </CreateOrderModalTitleContainer>
      <OrderOptionsContainer>
        <ProductsContainer>
          <ProductsCenterContainer>
            <ProductsFilterContainer>
              <TitleInfo>Productos</TitleInfo>
              <FilterContainer>
                <SearchInput
                  name="search"
                  size="smallInput"
                  icon={<Search />}
                  placeholder="Buscar"
                  type="text"
                  // onChange={handleSearch}
                />
                <SelectContainer>
                  <SelectCategory
                    size="smallSelect"
                    titleOptions="Categorías"
                    categories={categories}
                    selectedCategory={selected}
                    setSelectedCategory={setSelected}
                  />
                </SelectContainer>
              </FilterContainer>
            </ProductsFilterContainer>
            <ProductsCardContainer>
              <OrderProductCardsContainer
                products={products}
                addProductOrder={handleAddProductOrder}
              />
            </ProductsCardContainer>
          </ProductsCenterContainer>
        </ProductsContainer>
        <OrdersContainer>
          <OrdersCenterContainer>
            <OrderPlaceContainer></OrderPlaceContainer>
            <OrderTableContainer>
              <Table data={orderProducts} />
            </OrderTableContainer>
          </OrdersCenterContainer>
        </OrdersContainer>
      </OrderOptionsContainer>
    </CreateOrderModalContainer>
  );
};

export default CreateOrderModal;
