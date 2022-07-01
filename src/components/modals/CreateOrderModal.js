import React, { useState } from "react";

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
import ProductsTable from "../tables/ProductsTable";

import {postBill} from '../../services/bill'

const CreateOrderModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1230px;
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
  margin: 25px 25px 2px 25px;
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
  height: 525px;
`;

const OrdersContainer = styled.div`
  display: flex;
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
  gap: 15px;
`;

const InputContainer = styled.div`
  display: flex;
`;

const CreateOrderModal = ({
  categories,
  products,
  selected,
  setSelected,
  handleCloseModal,
  updateBills
}) => {
  const [orderedProducts, setOrderedProducts] = useState([]);
  const [location, setLocation] = useState("");
  const [productsOnSale, setproductsOnSale] = useState([]);

  const order = {
    location: location,
    sales: productsOnSale,
  };

  const handleSubmitOrder = () => {
    for (const product of orderedProducts) {
      const productOnSale = {
        product: product.id,
        quantity: product.quantity,
      };
      setproductsOnSale((products) => [...products, productOnSale]);
    }
    postBill(location,productsOnSale).then(()=>{
      handleCloseModal()
      updateBills()
    })
    console.log(order);
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
  };

  const handlePlaceChange = (e) => {
    const { value } = e.target;
    setLocation(value);
  };

  const handleSearchChange = (e) => {
    const { name, value } = e.target;
    console.log(`${name}: ${value}`);
  };

  const deleteProductToTable = (id) => {
    const currentProducts = orderedProducts.filter((item) => item.id !== id);
    setOrderedProducts(currentProducts);
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
              <ProductsTable
                data={orderedProducts}
                onDelete={deleteProductToTable}
              />
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
  const index = orderedProducts.findIndex(
    (data) => data.id === orderedProduct.id
  );
  if (index === -1) {
    setOrderedProducts((products) => [...products, orderedProduct]);
  } else {
    let tempArray = [...orderedProducts];
    tempArray[index].quantity++;
    const totalPricePerQuantity =
      tempArray[index].quantity * tempArray[index].sale_price;
    tempArray[index].pricePerQuantity = +totalPricePerQuantity;
    setOrderedProducts(tempArray);
  }
}
