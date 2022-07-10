import React, { useState, useEffect } from "react";
import { getAllCategories } from "../../../services/category";
import { getAllProducts } from "../../../services/product";
import "./Products.css";

import AnimatedModalContainer from "../../../components/modals/animation/AnimatedModalContainer";
import Header from "../../../components/header/Header";
import NotificationButton from "../../../components/header/NotificationButton";
import CreateProductModal from "../../../components/modals/CreateProductModal";
import CategoriesModal from "../../../components/modals/CategoriesModal";
import AddStockModal from "../../../components/modals/AddStockModal";
import EditProductModal from "../../../components/modals/EditProductModal";
import DeleteModal from "../../../components/modals/DeleteModal";
import ProductCardsContainer from "../../../components/cards-container/ProductCardsContainer";
import Button from "../../../components/buttons/Button";
import DataInput from "../../../components/inputs/DataInput";
import CategorySelect from "../../../components/select/CategorySelect";
import { ReactComponent as Add } from "../../../assets/icons/add.svg";
import { ReactComponent as Category } from "../../../assets/icons/category.svg";
import { ReactComponent as Search } from "../../../assets/icons/search.svg";
import { MediumContainer } from "../../../components/styles/style-components";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState({});
  const [product, setProduct] = useState({});
  const [category, setCategory] = useState("Categoría");
  const [isOpenAddProductModal, setIsOpenAddProductModal] = useState(false);
  const [isOpenEditProductModal, setIsOpenEditProductModal] = useState(false);
  const [isOpenDeleteProductModal, setIsOpenDeleteProductModal] =
    useState(false);
  const [isOpenAddStock, setIsOpenAddStock] = useState(false);
  const [isOpenModalCategories, setIsOpenModalCategories] = useState(false);

  const openAddProductModal = () => {
    setIsOpenAddProductModal((isOpen) => !isOpen);
  };

  const openCategoriesModal = () => {
    setIsOpenModalCategories((isOpen) => !isOpen);
  };

  const openEditProductModal = (product) => {
    setProduct(product);
    setCategory(product.category.name);
    setIsOpenEditProductModal((isOpen) => !isOpen);
  };

  const openAddStock = (product) => {
    setProduct(product);
    setIsOpenAddStock((isOpen) => !isOpen);
  };

  const openDeleteProductModal = (product) => {
    setProduct(product);
    setIsOpenDeleteProductModal((isOpen) => !isOpen);
  };

  const closeDeleteProductModal = () => {
    setIsOpenDeleteProductModal((isOpen) => !isOpen);
  };

  const handleSearch = (e) => {
    const { name, value } = e.target;
    console.log(`${name}: ${value}`);
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
    <div className="admin-products-container">
      <CreateProductModal
        info="Agregar Producto"
        buttonTheme="ok"
        updateProducts={getProductos}
        isOpen={isOpenAddProductModal}
        setIsOpen={setIsOpenAddProductModal}
      />
      <AnimatedModalContainer
        modal={<CategoriesModal categories={categories} />}
        isOpen={isOpenModalCategories}
        setIsOpen={setIsOpenModalCategories}
      />
      <AnimatedModalContainer
        modal={
          <AddStockModal
            product={product}
            updateProducts={getProductos}
            setIsOpenAddStock={setIsOpenAddStock}
          />
        }
        isOpen={isOpenAddStock}
        setIsOpen={setIsOpenAddStock}
      ></AnimatedModalContainer>
      <AnimatedModalContainer
        modal={
          <EditProductModal
            info="Editar Producto"
            buttonTheme="highlighted"
            product={product}
            updateProducts={getProductos}
            setIsOpen={setIsOpenEditProductModal}
            category={category}
          />
        }
        isOpen={isOpenEditProductModal}
        setIsOpen={setIsOpenEditProductModal}
      />
      <AnimatedModalContainer
        modal={
          <DeleteModal
            isProduct={true}
            message="¿Desea eliminar este producto?"
            buttonMessage="Eliminar Producto"
            data={product}
            update={getProductos}
            handleCloseModal={closeDeleteProductModal}
          />
        }
        isOpen={isOpenDeleteProductModal}
        setIsOpen={setIsOpenDeleteProductModal}
      />
      <Header
        title="Productos"
        description="Información de los productos registrados"
        component={<NotificationButton />}
      />
      <div className="admin-products-options-container">
        <div className="admin-products-options-center-container">
          <div className="admin-product-option-buttons-container">
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
              onClick={openCategoriesModal}
            />
          </div>
          <div className="admin-product-option-filter-container">
            <DataInput
              name="search"
              size="mediumInput"
              icon={<Search />}
              isStroke={true}
              placeholder="Buscar"
              type="text"
              onChange={handleSearch}
            />
            <MediumContainer>
              <CategorySelect
                icon={<Category width={25} height={25} />}
                dropdownTitle="Categorías"
                options={categories}
                selectedOption={category}
                setSelectedOption={setCategory}
                isFilter={true}
                setIsFilter={setProducts}
              />
            </MediumContainer>
          </div>
        </div>
      </div>
      <ProductCardsContainer
        products={products}
        openAddStock={openAddStock}
        openEditProductModal={openEditProductModal}
        openDeleteProductModal={openDeleteProductModal}
        updateProductList={getProductos}
      />
    </div>
  );
};

export default Products;
