import React, { useState, useEffect } from "react";
import { getAllCategories } from "../../services/category";
import { getAllProducts } from "../../services/product";
import "./Products.css";
import Header from "../../components/header/Header";
import NotificationButton from "../../components/header/NotificationButton";
import Button from "../../components/buttons/Button";
import ProductCardsContainer from "../../components/cards-container/ProductCardsContainer";
import { ReactComponent as Add } from "../../assets/icons/add.svg";
import { ReactComponent as Category } from "../../assets/icons/category.svg";

// import { ModalCreateProduct } from "../../components/modals/create-product/ModalCreateProduct";
// import { ModalCategories } from "../../components/modals/categories/ModalCategories";
// import ShowProducts from "../../components/show-products/ShowProducts";

const Products = () => {
  const [openModalCreateProduct, setOpenModalCreateProduct] = useState(false);
  const [openModalCategories, setOpenModalCategories] = useState(false);

  const modalCreateProductState = () => {
    setOpenModalCreateProduct((prev) => !prev);
  };

  const modalCategoriesState = () => {
    setOpenModalCategories((prev) => !prev);
  };

  const [categories, setCategories] = useState({});
  const [products, setProducts] = useState([]);

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
    <div className="products-container">
      <Header
        title="Productos"
        description="Información de los productos registrados"
        component={<NotificationButton />}
      />
      <div className="products-options-container">
        <div className="products-options-center-container">
          <div className="product-option-buttons-container">
            <Button
              width="mediumButton"
              theme="ok"
              icon={<Add fill="white" />}
              text="Agregar Producto"
            />
            <Button
              width="mediumButton"
              theme="highlighted"
              icon={<Category fill="white" />}
              text="Categorías"
            />
          </div>
          <div className="product-option-filter-container"></div>
        </div>
      </div>
      <div className="product-cards-container">
        <ProductCardsContainer products={products} />
      </div>
      {/* <div className="products-container">
        <ModalCreateProduct
            modalData="Agregar Producto"
            openModal={openModalCreateProduct}
            setOpenModal={setOpenModalCreateProduct}
            categories={categories}
            update={getApiProductos}
        />
        <ModalCategories openModal={openModalCategories} setOpenModal={setOpenModalCategories} categories={categories} update={getCategories} />
        <AdminHeader pageTitle="Productos" pageDescription="Información de los productos registrados" />
        <div className="products-center-container">
            <div className="products-options-container">
                <div className="product-option-buttons-container">
                    <IconButton icon={AddWhite} text="Agregar Producto" theme="ok" size="medium" handleOnClick={modalCreateProductState} />
                    <IconButton icon={Category} text="Categorías" theme="option" size="medium" handleOnClick={modalCategoriesState} />
                </div>
            </div>
            <div className="product-cards-container">
                <ShowProducts products={apiProducts} />
            </div>
        </div>
    </div> */}
    </div>
  );
};

export default Products;
