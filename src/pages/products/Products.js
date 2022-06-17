import React, { useState, useEffect } from "react";
import { getAllCategories } from "../../services/category";
import { getAllProducts } from "../../services/product";
import "./Products.css";
import { colors } from "../../components/styles/colors";
import Header from "../../components/header/Header";
import NotificationButton from "../../components/header/NotificationButton";
import Button from "../../components/buttons/Button";
import ProductCardsContainer from "../../components/cards-container/ProductCardsContainer";
import DataInput from "../../components/inputs/DataInput";
import SelectCategory from "../../components/select/SelectCategory";
import { ReactComponent as Add } from "../../assets/icons/add.svg";
import { ReactComponent as Category } from "../../assets/icons/category.svg";
import { ReactComponent as Search } from "../../assets/icons/search.svg";

import ProductModal from "../../components/modals/ProductModal";

// import { ModalCategories } from "../../components/modals/categories/ModalCategories";

const Products = () => {
  const [categories, setCategories] = useState({});
  const [products, setProducts] = useState([]);
  const [selected, setSelected] = useState("Categoría");

  const [isOpenAddProductModal, setIsOpenAddProductModal] = useState(false);
  const [isOpenEditProductModal, setIsOpenEditProductModal] = useState(false);
  // const [openModalCategories, setOpenModalCategories] = useState(false);

  const openAddProductModal = () => {
    setIsOpenAddProductModal((isOpen) => !isOpen);
  };

  const openEditProductModal = () => {
    setIsOpenEditProductModal((isOpen) => !isOpen);
  };

  // const modalCategoriesState = () => {
  //   setOpenModalCategories((prev) => !prev);
  // };

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

  const handleSearch = (e) => {
    const { name, value } = e.target;
    console.log(`${name}: ${value}`);
  };

  useEffect(() => {
    getCategories();
    getProductos();
    console.log(selected);
  }, [selected]);

  return (
    <div className="products-container">
      <ProductModal
        isOpen={isOpenAddProductModal}
        setIsOpen={setIsOpenAddProductModal}
        info="Agregar Producto"
        buttonTheme="ok"
      />
      <ProductModal
        isOpen={isOpenEditProductModal}
        setIsOpen={setIsOpenEditProductModal}
        info="Editar Producto"
        buttonTheme="highlighted"
      />
      <Header
        title="Productos"
        description="Información de los productos registrados"
        component={<NotificationButton />}
      />
      <div className="products-options-container">
        <div className="products-options-center-container">
          <div className="product-option-buttons-container">
            <Button
              size="mediumButton"
              theme="ok"
              icon={<Add fill="white" />}
              text="Agregar Producto"
              onClick={openAddProductModal}
            />
            <Button
              size="mediumButton"
              theme="highlighted"
              icon={<Category fill="white" />}
              text="Categorías"
            />
          </div>
          <div className="product-option-filter-container">
            <DataInput
              name="search"
              size="mediumInput"
              icon={<Search />}
              placeholder="Buscar"
              type="text"
              onChange={handleSearch}
            />
            <SelectCategory
              size="mediumSelect"
              titleOptions="Categorías"
              options={categories}
              selected={selected}
              setSelected={setSelected}
            />
          </div>
        </div>
      </div>
      <ProductCardsContainer
        products={products}
        openEditProductModal={openEditProductModal}
      />
    </div>
  );
};

export default Products;
