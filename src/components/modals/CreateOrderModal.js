import React, { useState } from "react";
import { postBill } from "../../services/bill";
import usePlaceForm from "../../validate-forms/usePlaceForm";

import styled from "styled-components";
import { colors } from "../styles/colors";
import { ModalTitle, SelectOrderContainer } from "../styles/style-components";
import { ReactComponent as Search } from "../../assets/icons/search.svg";
import { ReactComponent as HomeTable } from "../../assets/icons/home-table.svg";
import { ReactComponent as Category } from "../../assets/icons/category.svg";

import Button from "../buttons/Button";
import BorderButton from "../buttons/BorderButton";
import OrderProductCardsContainer from "../cards-container/OrderProductCardsContainer";
import SearchInput from "../inputs/DataInput";
import CategorySelect from "../select/CategorySelect";
import PlaceInput from "../inputs/DataInput";
import ProductsTable from "../tables/ProductsTable";
import {
  ErrorMessageContainer,
  ErrorMessage,
  ErrorMessageSpace,
} from "../styles/style-components";

const CreateOrderModalContainer = styled.div`
  display: flex;
  flex-direction: column;
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
  align-items: center;
  gap: 25px;
  padding-bottom: 25px;
  border-bottom: solid 1px ${colors.border};
`;

const ProductsCardContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 535px;
  height: 535px;
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
  align-items: center;
  padding-bottom: 10px;
  border-bottom: solid 1px ${colors.border};
`;

const OrderTableContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 535px;
  height: 535px;
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
  updateProducts,
  setProducts,
  selected,
  setSelected,
  handleCloseModal,
  updateBills,
  updateListProductByFilter,
}) => {
  const [orderedProducts, setOrderedProducts] = useState([]);
  const [searchInputValue, setSearchInputValue] = useState("");
  let productsOnSale = [];

  const handleSubmitOrder = () => {
    orderedProducts.map((product) => {
      const productOnSale = { product: product.id, quantity: product.quantity };
      productsOnSale.push(productOnSale);
    });
    if (productsOnSale.length === 0) {
      console.log("¡Aún no se han agregado productos!");
    } else {
      postBill(placeValue.place, productsOnSale).then(async (res) => {
        const data = await res.json();
        if (res.ok) {
          clearInputs();
          handleCloseModal();
          updateBills();
          updateProducts();
        } else {
          alert(data.message);
        }
      });
    }
  };

  const {
    placeValue,
    handleChangePlace,
    handleSubmitPlace,
    errors,
    clearPlaceValue,
  } = usePlaceForm(handleSubmitOrder);

  const clearInputs = () => {
    clearPlaceValue();
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

  const handleSearchChange = (e) => {
    const { value } = e.target;
    setSearchInputValue(value);
    updateListProductByFilter(selected.id, value);
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
            onClick={handleSubmitPlace}
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
                  isStroke={true}
                  placeholder="Buscar"
                  type="text"
                  onChange={handleSearchChange}
                />
                <SelectOrderContainer>
                  <CategorySelect
                    icon={<Category width={25} height={25} />}
                    dropdownTitle="Categorías"
                    options={categories}
                    selectedOption={selected.name}
                    setSelectedOption={setSelected}
                    searchInput={searchInputValue}
                    isFilter={true}
                    setIsFilter={setProducts}
                  />
                </SelectOrderContainer>
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
              <ErrorMessageContainer>
                <InputContainer>
                  <PlaceInput
                    name="place"
                    size="normalInput"
                    isStroke={true}
                    icon={<HomeTable stroke={colors.brand} />}
                    placeholder="Lugar"
                    type="text"
                    onChange={handleChangePlace}
                  />
                </InputContainer>
                {errors.place ? (
                  <ErrorMessage>{errors.place}</ErrorMessage>
                ) : (
                  <ErrorMessageSpace />
                )}
              </ErrorMessageContainer>
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
