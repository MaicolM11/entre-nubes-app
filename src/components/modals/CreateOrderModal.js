import React, { useEffect, useState } from "react";

import styled from "styled-components";
import { colors } from "../styles/colors";
import { ModalTitle, SelectContainer } from "../styles/style-components";
import { ReactComponent as Search } from "../../assets/icons/search.svg";
import { ReactComponent as HomeTable } from "../../assets/icons/home-table.svg";

import Button from "../buttons/Button";
import BorderButton from "../buttons/BorderButton";
import OrderProductCardsContainer from "../cards-container/OrderProductCardsContainer";
import SearchInput from "../inputs/DataInput";
import SelectCategory from "../select/SelectCategory";
import PlaceInput from "../inputs/DataInput";
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
  height: 579px;
  border-left: solid 1px ${colors.border};
`;

const OrdersCenterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 25px;
  gap: 25px;
`;

const OrderPlaceContainer = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  min-height: 60px;
  border-bottom: solid 1px ${colors.border};
`;

const OrderTableContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 467px;
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

const InputContainer = styled.div`
  display: flex;
  width: 250px;
  min-width: 250px;
`;

const CreateOrderModal = ({
  categories,
  products,
  selected,
  setSelected,
  handleCloseModal,
}) => {
  const [orderedProducts, setOrderedProducts] = useState([]);
  const [location, setLocation] = useState("");
  const [productsOnSale, setproductsOnSale] = useState([]);

  // const [productsOnTable, setProductsOnTable] = useState([]);

  const order = {
    location: location,
    sales: productsOnSale,
  };

  const handleSubmitOrder = () => {
    console.log(order);
    // const productOnSale = { product: product._id, quantity: quantity };
    // getProductsOnSale(productsOnSale, setproductsOnSale, productOnSale);
  };

  const handleAddProductOrder = (product) => {
    const orderedProduct = {
      id: product._id,
      brand: product.brand,
      sale_price: product.sale_price,
      quantity: 1,
      pricePerQuantity: product.sale_price,
    };
    showProductsOnTable(orderedProducts, setOrderedProducts, orderedProduct);
    updateTable();
  };

  const updateTable = () => {
    console.log(orderedProducts);
  };

  useEffect(() => {
    updateTable();
  }, []);

  const handlePlaceChange = (e) => {
    const { value } = e.target;
    setLocation(value);
  };

  const handleSearchChange = (e) => {
    const { name, value } = e.target;
    console.log(`${name}: ${value}`);
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
            onClick={handleSubmitOrder}
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
                  onChange={handleSearchChange}
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
            <OrderPlaceContainer>
              <TitleInfo>Pedidos</TitleInfo>
              <InputContainer>
                <PlaceInput
                  name="place"
                  size="mediumInput"
                  icon={<HomeTable stroke={colors.brand} />}
                  placeholder="Lugar"
                  type="text"
                  onChange={handlePlaceChange}
                />
              </InputContainer>
            </OrderPlaceContainer>
            <OrderTableContainer>
              <Table data={orderedProducts} />
            </OrderTableContainer>
          </OrdersCenterContainer>
        </OrdersContainer>
      </OrderOptionsContainer>
    </CreateOrderModalContainer>
  );
};

export default CreateOrderModal;

function showProductsOnTable(
  orderedProducts,
  setOrderedProducts,
  orderedProduct
) {
  if (orderedProducts.length === 0) {
    setOrderedProducts((products) => [...products, orderedProduct]);
  } else {
    const isOnTable = orderedProducts.some(
      (data) => data.id === orderedProduct.id
    );
    if (!isOnTable) {
      setOrderedProducts((products) => [...products, orderedProduct]);
    } else {
      for (const product of orderedProducts) {
        if (product.id === orderedProduct.id) {
          product.quantity++;
          const totalPricePerQuantity = product.quantity * product.sale_price;
          product.pricePerQuantity = +totalPricePerQuantity;
          break;
        }
      }
    }
  }
}
