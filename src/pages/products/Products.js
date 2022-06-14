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
import { ReactComponent as Add } from "../../assets/icons/add.svg";
import { ReactComponent as Category } from "../../assets/icons/category.svg";
import { ReactComponent as Search } from "../../assets/icons/search.svg";

// import { ModalCreateProduct } from "../../components/modals/create-product/ModalCreateProduct";
// import { ModalCategories } from "../../components/modals/categories/ModalCategories";

const Products = () => {
  const [dataIconColor, setDataIconColor] = useState(false);
  const userIconColor = dataIconColor ? colors.highlighted : colors.brand;

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

  const handleChangeSearch = () => {
    console.log("Search data...");
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
              size="mediumButton"
              theme="ok"
              icon={<Add fill="white" />}
              text="Agregar Producto"
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
              data="search"
              size="mediumInput"
              icon={<Search stroke={userIconColor} />}
              placeholder="Buscar"
              type="text"
              iconColor={dataIconColor}
              setIconColor={setDataIconColor}
              onChange={handleChangeSearch}
            />
          </div>
        </div>
      </div>
      <ProductCardsContainer products={products} />
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
