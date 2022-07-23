import React, { useState, useEffect } from "react";
import { getAllCategories, deleteCategory } from "../../../services/category";
import {
  getAllProducts,
  deleteProduct,
  filterProducts,
} from "../../../services/product";

import "./Products.css";
import AnimatedModalContainer from "../../../components/modals/animation/AnimatedModalContainer";
import Header from "../../../components/header/Header";
import NotificationButton from "../../../components/header/NotificationButton";
import CreateProductModal from "../../../components/modals/CreateProductModal";
import CategoriesModal from "../../../components/modals/CategoriesModal";
import AddStockModal from "../../../components/modals/AddStockModal";
import EditProductModal from "../../../components/modals/EditProductModal";
import DeleteModal from "../../../components/modals/DeleteModal";
import CategoryModal from "../../../components/modals/CategoryModal";
import SuccessfulModal from "../../../components/modals/SuccessfulModal";
import ProductCardsContainer from "../../../components/cards-container/ProductCardsContainer";
import Button from "../../../components/buttons/Button";
import DataInput from "../../../components/inputs/DataInput";
import CategorySelect from "../../../components/select/CategorySelect";
import { ReactComponent as Add } from "../../../assets/icons/add.svg";
import { ReactComponent as Category } from "../../../assets/icons/category.svg";
import { ReactComponent as Search } from "../../../assets/icons/search.svg";
import {
  MediumContainer,
  PageOptionsCenterContainer,
  PageOptionsContainer,
} from "../../../components/styles/style-components";
import StockLimitModal from "../../../components/modals/StockLimitModal";

const Products = () => {
  const [product, setProduct] = useState({});
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState({});
  const [categories, setCategories] = useState({});
  const [selectedCategory, setSelectedCategory] = useState({
    name: "Categoría",
    id: "",
  });
  const [searchInputValue, setSearchInputValue] = useState("");

  const [isOpenAddProductModal, setIsOpenAddProductModal] = useState(false);
  const [isOpenEditProductModal, setIsOpenEditProductModal] = useState(false);
  const [isOpenDeleteProductModal, setIsOpenDeleteProductModal] =
    useState(false);
  const [isOpenAddStock, setIsOpenAddStock] = useState(false);
  const [isOpenCategoriesModal, setIsOpenCategoriesModal] = useState(false);
  const [isOpenCreateCategoryModal, setIsOpenCreateCategoryModal] =
    useState(false);
  const [isOpenEditCategoryModal, setIsOpenEditCategoryModal] = useState(false);
  const [isOpenDeleteCategoryModal, setIsOpenDeleteCategoryModal] =
    useState(false);
  const [
    isOpenSuccessfulCreateProductModal,
    setIsOpenSuccessfulCreateProductModal,
  ] = useState(false);
  const [isOpenSuccessfulAddStockModal, setIsOpenSuccessfulAddStockModal] =
    useState(false);
  const [
    isOpenSuccessfulEditProductModal,
    setIsOpenSuccessfulEditProductModal,
  ] = useState(false);
  const [isOpenSuccessAddedCategoryModal, setIsOpenSuccessAddedCategoryModal] =
    useState(false);
  const [
    isOpenSuccessEditedCategoryModal,
    setIsOpenSuccessEditedCategoryModal,
  ] = useState(false);
  const [isOpenStockLimitCategoryModal, setIsOpenStockLimitCategoryModal] =
    useState(false);
  const [isOpenSuccessStockLimitModal, setIsOpenSuccessStockLimitModal] =
    useState(false);

  const openAddProductModal = () => {
    setIsOpenAddProductModal((isOpen) => !isOpen);
  };

  const openCategoriesModal = () => {
    setIsOpenCategoriesModal((isOpen) => !isOpen);
  };

  const openCreateCategoryModal = () => {
    openCategoriesModal();
    setIsOpenCreateCategoryModal((isOpen) => !isOpen);
  };

  const openStockLimitCategoryModal = (category) => {
    setCategory(category);
    openCategoriesModal();
    setIsOpenStockLimitCategoryModal((isOpen) => !isOpen);
  };

  const openEditCategoryModal = (category) => {
    setCategory(category);
    openCategoriesModal();
    setIsOpenEditCategoryModal((isOpen) => !isOpen);
  };

  const openDeleteCategoryModal = (category) => {
    setCategory(category);
    setIsOpenDeleteCategoryModal((isOpen) => !isOpen);
  };

  const openAddStock = (product) => {
    setProduct(product);
    setIsOpenAddStock((isOpen) => !isOpen);
  };

  const openEditProductModal = (product) => {
    setProduct(product);
    setSelectedCategory({
      name: product.category.name,
      id: product.category._id,
    });
    setIsOpenEditProductModal((isOpen) => !isOpen);
  };

  const openDeleteProductModal = (product) => {
    setProduct(product);
    setIsOpenDeleteProductModal((isOpen) => !isOpen);
  };

  const closeDeleteProductModal = () => {
    setIsOpenDeleteProductModal((isOpen) => !isOpen);
  };

  const closeDeleteCategoryModal = () => {
    setIsOpenDeleteCategoryModal((isOpen) => !isOpen);
  };

  const openSuccessfulCreateProductModal = () => {
    setIsOpenSuccessfulCreateProductModal((isOpen) => !isOpen);
  };

  const openSuccessfulAddStockModal = () => {
    setIsOpenSuccessfulAddStockModal((isOpen) => !isOpen);
  };

  const openSuccessfulEditProductModal = () => {
    setIsOpenSuccessfulEditProductModal((isOpen) => !isOpen);
  };

  const openSuccessAddedCategoryModal = () => {
    setIsOpenSuccessAddedCategoryModal((isOpen) => !isOpen);
  };

  const openSuccessEditedCategoryModal = () => {
    setIsOpenSuccessEditedCategoryModal((isOpen) => !isOpen);
  };

  const openSuccessStockLimitCategories = () => {
    setIsOpenSuccessStockLimitModal((isOpen) => !isOpen);
  };

  const openAddedCategories = () => {
    openSuccessAddedCategoryModal();
    openCategoriesModal();
  };

  const openEditedCategories = () => {
    openSuccessEditedCategoryModal();
    openCategoriesModal();
  };

  const openCurrentStockLimitCategories = () => {
    openSuccessStockLimitCategories();
    openCategoriesModal();
  };

  const handleSearch = (e) => {
    const { value } = e.target;
    setSearchInputValue(value);
    filterProducts(selectedCategory.id ? selectedCategory.id : "", value).then(
      async (res) => {
        setProducts(await res.json());
      }
    );
  };

  const deleteCurrentProduct = () => {
    deleteProduct(product._id).then(async () => {
      closeDeleteProductModal();
      getProductos();
    });
  };

  const deleteCurrentCategory = () => {
    deleteCategory(category._id).then(async () => {
      closeDeleteCategoryModal();
      getCategories();
    });
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
        openSuccessfulModal={openSuccessfulCreateProductModal}
      />
      <AnimatedModalContainer
        modal={
          <CategoriesModal
            categories={categories}
            handleSubmitCreateCategory={openCreateCategoryModal}
            handleSubmitStockLimitCategory={openStockLimitCategoryModal}
            handleSubmitEditCategory={openEditCategoryModal}
            handleSubmitDeleteCategory={openDeleteCategoryModal}
            setIsOpen={openCategoriesModal}
          />
        }
        isOpen={isOpenCategoriesModal}
        setIsOpen={setIsOpenCategoriesModal}
      />
      <AnimatedModalContainer
        modal={
          <AddStockModal
            product={product}
            updateProducts={getProductos}
            setIsOpenAddStock={setIsOpenAddStock}
            openSuccessfulModal={openSuccessfulAddStockModal}
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
            category={selectedCategory}
            openSuccessfulModal={openSuccessfulEditProductModal}
          />
        }
        isOpen={isOpenEditProductModal}
        setIsOpen={setIsOpenEditProductModal}
      />
      <AnimatedModalContainer
        modal={
          <DeleteModal
            message="¿Desea eliminar este producto?"
            buttonMessage="Eliminar Producto"
            handleCloseModal={closeDeleteProductModal}
            handleSubmitDelete={deleteCurrentProduct}
          />
        }
        isOpen={isOpenDeleteProductModal}
        setIsOpen={setIsOpenDeleteProductModal}
      />
      <AnimatedModalContainer
        modal={
          <StockLimitModal
            category={category}
            setIsOpen={setIsOpenStockLimitCategoryModal}
            openCategoriesModal={openCategoriesModal}
            updateCategories={getCategories}
            openSuccessStockLimitCategoryModal={openSuccessStockLimitCategories}
          />
        }
        isOpen={isOpenStockLimitCategoryModal}
        setIsOpen={setIsOpenStockLimitCategoryModal}
      />
      <AnimatedModalContainer
        modal={
          <CategoryModal
            isTheme={true}
            setIsOpen={setIsOpenCreateCategoryModal}
            openCategoriesModal={openCategoriesModal}
            updateCategories={getCategories}
            openSuccessAddedCategoryModal={openSuccessAddedCategoryModal}
          />
        }
        isOpen={isOpenCreateCategoryModal}
        setIsOpen={setIsOpenCreateCategoryModal}
      />
      <AnimatedModalContainer
        modal={
          <CategoryModal
            isTheme={false}
            category={category}
            setIsOpen={setIsOpenEditCategoryModal}
            openCategoriesModal={openCategoriesModal}
            updateCategories={getCategories}
            updateProducts={getProductos}
            openSuccessEditedCategoryModal={openSuccessEditedCategoryModal}
          />
        }
        isOpen={isOpenEditCategoryModal}
        setIsOpen={setIsOpenEditCategoryModal}
      />
      <AnimatedModalContainer
        modal={
          <DeleteModal
            message="¿Desea eliminar esta categoría?"
            buttonMessage="Eliminar Categoría"
            handleCloseModal={closeDeleteCategoryModal}
            handleSubmitDelete={deleteCurrentCategory}
          />
        }
        isOpen={isOpenDeleteCategoryModal}
        setIsOpen={setIsOpenDeleteCategoryModal}
      />
      <AnimatedModalContainer
        modal={
          <SuccessfulModal
            message="¡Producto agregado correctamente!"
            handleSubmitOk={openSuccessfulCreateProductModal}
          />
        }
        isOpen={isOpenSuccessfulCreateProductModal}
        setIsOpen={setIsOpenSuccessfulCreateProductModal}
      />
      <AnimatedModalContainer
        modal={
          <SuccessfulModal
            message="¡Unidades agregadas correctamente!"
            handleSubmitOk={openSuccessfulAddStockModal}
          />
        }
        isOpen={isOpenSuccessfulAddStockModal}
        setIsOpen={setIsOpenSuccessfulAddStockModal}
      />
      <AnimatedModalContainer
        modal={
          <SuccessfulModal
            message="¡Producto editado correctamente!"
            handleSubmitOk={openSuccessfulEditProductModal}
          />
        }
        isOpen={isOpenSuccessfulEditProductModal}
        setIsOpen={setIsOpenSuccessfulEditProductModal}
      />
      <AnimatedModalContainer
        modal={
          <SuccessfulModal
            message="¡Categoría agregada correctamente!"
            handleSubmitOk={openAddedCategories}
          />
        }
        isOpen={isOpenSuccessAddedCategoryModal}
        setIsOpen={setIsOpenSuccessAddedCategoryModal}
      />
      <AnimatedModalContainer
        modal={
          <SuccessfulModal
            message="¡Categoría editada correctamente!"
            handleSubmitOk={openEditedCategories}
          />
        }
        isOpen={isOpenSuccessEditedCategoryModal}
        setIsOpen={setIsOpenSuccessEditedCategoryModal}
      />
      <AnimatedModalContainer
        modal={
          <SuccessfulModal
            message="¡El límite de unidades se asignó correctamente!"
            handleSubmitOk={openCurrentStockLimitCategories}
          />
        }
        isOpen={isOpenSuccessStockLimitModal}
        setIsOpen={setIsOpenSuccessStockLimitModal}
      />
      <Header
        title="Productos"
        description="Información de los productos registrados"
        component={<NotificationButton />}
      />
      <PageOptionsContainer>
        <PageOptionsCenterContainer>
          <div className="products-options-center-container">
            <div className="products-buttons-options-container">
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
            <div className="products-filters-options-container">
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
                  selectedOption={selectedCategory.name}
                  setSelectedOption={setSelectedCategory}
                  searchInput={searchInputValue}
                  isFilter={true}
                  setIsFilter={setProducts}
                />
              </MediumContainer>
            </div>
          </div>
        </PageOptionsCenterContainer>
      </PageOptionsContainer>
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
