import React,{useState} from "react";
import './ModalCreateProduct.css';

import { Background } from "../Background";

import {reqProduct} from '../../../services/product'

import { useRef, useEffect, useCallback } from "react";
import { useSpring, animated } from "react-spring";

import { Button } from '../../buttons/button/Button';
import CloseButton from "../../buttons/close-button/CloseButton";
import TextInput from '../../inputs/TextInput';
import Select from '../../select/Select';

import Wine from '../../../assets/icons/wine-bottle.svg';
import Money from '../../../assets/icons/money.svg';
import Circle from '../../../assets/icons/circle.svg';

const regularExpressions ={
    valideNumber: /^[0-9]+$/
}

export const ModalCreateProduct = ({ modalData, openModal, setOpenModal }) => {
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
        };
    };

    const closeButtonModal = () => {
        setOpenModal(actualState => !actualState);
    }

    const keyPress = useCallback(e => {
        if (e.key === "Escape" && openModal) {
            setOpenModal(false);
        };
    }, [setOpenModal, openModal]);

    useEffect(() => {
        document.addEventListener("keydown", keyPress);
        return () => document.removeEventListener("keydown", keyPress);
    }, [keyPress]);


    // Agregar al inventario

    const [product, setProduct] = useState({
        brand: '',
        category: '',
        buy_price:0,
        sale_price:0,
        presentation: '',
        stock: 0,
        img_url:'x'
      });

      const sendData = () => {
        reqProduct(product.brand,product.category,product.buy_price,
            product.sale_price,product.presentation,product.stock,
            product.img_url)
          .then(async res => {
            let data = await res.json();
            if (res.ok) {
              localStorage.setItem("token", data.token)
            } else {
              alert(data.message)
            }
          })
      };

    

      const onChangeData = (e) => {
        const { name, value } = e.target;
        setProduct((inputs) => {
          return {
            ...inputs,
            [name]: value,
          };
        });
        
      };

    return <>
        {openModal ?
            (<Background ref={modalRef} onClick={closeModal}>
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
                                        type='text'
                                        name='brand'
                                        icon={Wine}
                                        placeholder='Nombre del producto'
                                        onChange={onChangeData} 
                                        />
                                        <TextInput
                                        type='text'
                                        name='category'
                                        icon={Wine}
                                        placeholder='Categoria'
                                        onChange={onChangeData} 
                                        />
                                    {/* <Select size="normal" /> */}
                                    <TextInput
                                        type='text'
                                        name='buy_price'
                                        icon={Money}
                                        placeholder='Precio por unidad' 
                                        onChange={onChangeData}
                                        />
                                    <TextInput
                                        type='text'
                                        name='sale_price'
                                        icon={Money}
                                        placeholder='Precio de venta' 
                                        onChange={onChangeData}
                                        />
                                    
                                    <TextInput
                                        type='text'
                                        name='presentation'
                                        icon={Circle}
                                        placeholder='Presentación' 
                                        onChange={onChangeData}
                                        />
                                        
                                    <TextInput
                                        type='text'
                                        name='stock'
                                        icon={Circle}
                                        placeholder='Unidades de venta'
                                        onChange={onChangeData}
                                        />
                                        
                                    {/* <div className="text-area-container">
                                        <label className="description-title">Descripción del Producto</label>
                                        <textarea className="description-area" />
                                    </div> */}
                                    <Button
                                        theme="ok" size="normal" onClick={sendData}>
                                        {modalData}
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </animated.div>
            </Background>) : null}
    </>
};