import React, { useState, useEffect } from "react";
import { getAllCategories } from "../../../services/category";
import { getAllProducts } from "../../../services/product";
import "./Products.css";

import AnimatedModalContainer from "../../../components/modals/animation/AnimatedModalContainer";
import Header from "../../../components/header/Header";
import NotificationButton from "../../../components/header/NotificationButton";
import CreateProductModal from "../../../components/modals/CreateProductModal";
import EditProductModal from "../../../components/modals/EditProductModal";
import DeleteModal from "../../../components/modals/DeleteModal";
import ProductCardsContainer from "../../../components/cards-container/ProductCardsContainer";
import Button from "../../../components/buttons/Button";
import DataInput from "../../../components/inputs/DataInput";
import SelectCategory from "../../../components/select/SelectCategory";
import AddStockModal from "../../../components/modals/AddStockModal";
import { ReactComponent as Add } from "../../../assets/icons/add.svg";
import { ReactComponent as Category } from "../../../assets/icons/category.svg";
import { ReactComponent as Search } from "../../../assets/icons/search.svg";

// import { ModalCategories } from "../../components/modals/categories/ModalCategories";

const Products = () => {
  const [categories, setCategories] = useState({});
  const [product, setProduct] = useState({});
  const [products, setProducts] = useState([]);
  const [selected, setSelected] = useState("Categoría");
  const [category, setCategory] = useState("Categoría");
  const [isOpenAddProductModal, setIsOpenAddProductModal] = useState(false);
  const [isOpenEditProductModal, setIsOpenEditProductModal] = useState(false);
  const [isOpenDeleteProductModal, setIsOpenDeleteProductModal] =
    useState(false);
  const [isOpenAddStock, setIsOpenAddStock] = useState(false);
  // const [openModalCategories, setOpenModalCategories] = useState(false);
  const openAddProductModal = () => {
    setIsOpenAddProductModal((isOpen) => !isOpen);
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
      {isOpenEditProductModal && (
        <EditProductModal
        info="Editar Producto"
        buttonTheme="highlighted"
        product={product}
        updateProducts={getProductos}
        isOpen={isOpenEditProductModal}
        setIsOpen={setIsOpenEditProductModal}
        category={category}
      />
      )

      }
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
            />
          </div>
          <div className="admin-product-option-filter-container">
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
              categories={categories}
              selectedCategory={selected}
              setSelectedCategory={setSelected}
              isOpenFilter = {true}
              setProducts = {setProducts}
            />
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
