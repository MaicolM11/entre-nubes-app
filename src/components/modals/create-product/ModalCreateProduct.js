import React, { useState } from "react";
import "./ModalCreateProduct.css";

import { Background } from "../Background";

import { reqProduct } from "../../../services/product";

import { useRef, useEffect, useCallback } from "react";
import { useSpring, animated } from "react-spring";

import { Button } from "../../buttons/button/Button";
import CloseButton from "../../buttons/close-button/CloseButton";
import TextInput from "../../inputs/TextInput";
import Select from "../../select/Select";

import Wine from "../../../assets/icons/wine-bottle.svg";
import Money from "../../../assets/icons/money.svg";
import Circle from "../../../assets/icons/circle.svg";

import useForm from "../../../useForm";
import validateInfo from "../../../validateInfo";

const regularExpressions = {
  valideNumber: /^[0-9]+$/,
};

export const ModalCreateProduct = ({
  modalData,
  openModal,
  setOpenModal,
  categories,
  update,
}) => {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: openModal ? 1 : 0,
    transform: openModal ? `translateY(0%)` : `translateY(-100%)`,
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setOpenModal(false);
    }
  };

  const closeButtonModal = () => {
    setOpenModal((actualState) => !actualState);
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && openModal) {
        setOpenModal(false);
      }
    },
    [setOpenModal, openModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  // Agregar al inventario
  const submitForm = () => {
    console.log(openModal)
    if (openModal) {
      console.log(values);
      console.log("Datos enviados.");
    }
  };

  const { handleChange, values, handleSubmit, errors } = useForm(
    submitForm,
    validateInfo
  );

  const sendData = () => {
    reqProduct(
      values.brand,
      values.category,
      values.buy_price,
      values.sale_price,
      values.presentation,
      values.stock,
      values.img_url
    ).then(async (res) => {
      let data = await res.json();
      if (res.ok) {
        update();
        closeButtonModal();
      } else {
        alert(data.message);
      }
    });
  };

  return (
    <>
      {openModal ? (
        <Background ref={modalRef} onClick={closeModal}>
          <animated.div style={animation}>
            <div className="create-product-container">
              <div className="modal-title-container">
                <h1 className="add-title-modal">{modalData}</h1>
                <div className="close-image-container">
                  <CloseButton handleOnClick={closeButtonModal} />
                </div>
              </div>
              <div className="modal-center-container">
                <div className="components-modal">
                  <div className="img-modal-area">
                    <div className="product-image-modal"></div>
                  </div>
                  <div className="data-modal-area">
                    <TextInput
                      type="text"
                      name="brand"
                      icon={Wine}
                      placeholder="Nombre del producto"
                      value={values.brand}
                      onChange={handleChange}
                    />
                    {errors.brand && <p>{errors.brand}</p>}
                    <Select
                      size="normal"
                      name="category"
                      categories={categories}
                      onChange={handleChange}
                    />
                    {errors.category && <p>{errors.category}</p>}
                    <TextInput
                      type="text"
                      name="buy_price"
                      icon={Money}
                      placeholder="Precio por unidad"
                      onChange={handleChange}
                    />
                    {errors.buy_price && <p>{errors.buy_price}</p>}
                    <TextInput
                      type="text"
                      name="sale_price"
                      icon={Money}
                      placeholder="Precio de venta"
                      onChange={handleChange}
                    />
                    {errors.sale_price && <p>{errors.sale_price}</p>}
                    <TextInput
                      type="text"
                      name="presentation"
                      icon={Circle}
                      placeholder="Presentación"
                      onChange={handleChange}
                    />
                    {errors.presentation && <p>{errors.presentation}</p>}
                    <TextInput
                      type="text"
                      name="stock"
                      icon={Circle}
                      placeholder="Unidades de venta"
                      onChange={handleChange}
                    />
                    {errors.stock && <p>{errors.stock}</p>}
                    <Button  size="normal" theme="ok" onClick={handleSubmit}>
                      {modalData}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};
