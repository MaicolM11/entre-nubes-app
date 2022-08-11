import React, { useState } from "react";
import { postBill } from "../../services/bill";

import styled from "styled-components";
import { colors } from "../styles/colors";
import {
  ModalTitle,
  TitleInfo,
  PageOptionsCenterContainer,
  PageOptionsContainer,
  SelectOrderContainer,
} from "../styles/style-components";
import Button from "../buttons/Button";
import BorderButton from "../buttons/BorderButton";
import OrderProductCardsContainer from "../cards-container/OrderProductCardsContainer";
import SearchInput from "../inputs/DataInput";
import CategorySelect from "../select/CategorySelect";
import PlaceInput from "../inputs/DataInput";
import ProductsTable from "../tables/ProductsTable";
import { ReactComponent as Search } from "../../assets/icons/search.svg";
import { ReactComponent as HomeTable } from "../../assets/icons/home-table.svg";
import { ReactComponent as Category } from "../../assets/icons/category.svg";

const CreateOrderModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.cardsBackground};
  border-radius: 16px;

  @media only screen and (max-width: 450px) {
    width: 450px;
    height: 100vh;
  }
`;

const OrderOptionsContainer = styled.div`
  display: flex;
  width: 100%;

  @media (max-width: 1200px) {
    flex-direction: column-reverse;
    height: 515px;
    overflow-x: hidden;
    overflow-y: auto;
  }
`;

const CreateOrderModalTitleContainer = styled.div`
  display: flex;
  background-color: ${colors.secondary};
  align-items: center;
  padding: 25px;
  gap: 25px;
  border-bottom: solid 1px ${colors.border};
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;

  @media only screen and (max-width: 450px) {
    flex-direction: column;
    padding: 10px;
  }
`;

const AreaComponentsContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 25px;

  @media only screen and (max-width: 450px) {
    flex-direction: column;
  }
`;

const RightAreaContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const PlaceInputContainer = styled.div`
  display: flex;
  height: 45px;
`;
const ProductsFilterContainer = styled.div`
  display: flex;
  gap: 15px;

  @media only screen and (max-width: 450px) {
    flex-direction: column;
  }
`;

const LeftAreaContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 540px;
  border-right: solid 1px ${colors.border};

  @media (max-width: 1200px) {
    border-right: none;
    align-items: center;
    padding: 0 15px;
  }
`;

const SelectFilterCategoryContainer = styled.div`
  display: flex;
  width: 250px;
  max-width: 250px;
  height: 45px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 25px;

  @media only screen and (max-width: 450px) {
    flex-direction: column;
  }
`;

const OrderTableContainer = styled.div`
  display: flex;
  padding: 25px;
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
  isPlaceModalState,
  isProductsModalState,
}) => {
  const [orderedProducts, setOrderedProducts] = useState([]);
  const [searchInputValue, setSearchInputValue] = useState("");
  const [placeValue, setPlaceValue] = useState({ place: "" });
  let productsOnSale = [];

  const handleSubmitOrder = () => {
    orderedProducts.map((product) => {
      const productOnSale = { product: product.id, quantity: product.quantity };
      productsOnSale.push(productOnSale);
    });
    if (!placeValue.place) {
      isPlaceModalState();
    } else if (productsOnSale.length === 0) {
      isProductsModalState();
    } else {
      postBill(placeValue.place, productsOnSale).then(async (res) => {
        const data = await res.json();
        if (res.ok) {
          handleCloseModal();
          updateBills();
          updateProducts();
        } else {
          alert(data.message);
        }
      });
    }
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

  const deleteProductToTable = (id) => {
    const currentProducts = orderedProducts.filter((item) => item.id !== id);
    setOrderedProducts(currentProducts);
  };

  const handleChangePlace = (e) => {
    const { name, value } = e.target;
    setPlaceValue((values) => {
      return {
        ...values,
        [name]: value,
      };
    });
  };

  const handleSearchChange = (e) => {
    const { value } = e.target;
    setSearchInputValue(value);
    updateListProductByFilter(selected.id, value);
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
        <LeftAreaContainer>
          <PageOptionsContainer>
            <PageOptionsCenterContainer>
              <AreaComponentsContainer>
                <TitleInfo>Productos</TitleInfo>
                <ProductsFilterContainer>
                  <SelectOrderContainer>
                    <SearchInput
                      name="search"
                      size="smallInput"
                      icon={<Search />}
                      isStroke={true}
                      placeholder="Buscar"
                      type="text"
                      onChange={handleSearchChange}
                    />
                  </SelectOrderContainer>
                  <SelectFilterCategoryContainer>
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
                  </SelectFilterCategoryContainer>
                </ProductsFilterContainer>
              </AreaComponentsContainer>
            </PageOptionsCenterContainer>
          </PageOptionsContainer>
          <OrderProductCardsContainer
            products={products}
            addProductOrder={handleAddProductOrder}
          />
        </LeftAreaContainer>
        <RightAreaContainer>
          <PageOptionsContainer>
            <PageOptionsCenterContainer>
              <AreaComponentsContainer>
                <TitleInfo>Pedidos</TitleInfo>
                <PlaceInputContainer>
                  <SelectOrderContainer>
                    <PlaceInput
                      name="place"
                      size="normalInput"
                      isStroke={true}
                      icon={<HomeTable stroke={colors.brand} />}
                      placeholder="Lugar"
                      type="text"
                      onChange={handleChangePlace}
                    />
                  </SelectOrderContainer>
                </PlaceInputContainer>
              </AreaComponentsContainer>
            </PageOptionsCenterContainer>
          </PageOptionsContainer>
          <OrderTableContainer>
            <ProductsTable
              data={orderedProducts}
              onDelete={deleteProductToTable}
            />
          </OrderTableContainer>
        </RightAreaContainer>
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
