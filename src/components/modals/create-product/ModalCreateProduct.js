import React from "react";
import './ModalCreateProduct.css';

import { Background } from "../Background";

import { useRef, useEffect, useCallback } from "react";
import { useSpring, animated } from "react-spring";

import { Button } from '../../buttons/button/Button';
import CloseButton from "../../buttons/close-button/CloseButton";
import TextInput from '../../inputs/TextInput';
import Select from '../../select/Select';

import Wine from '../../../assets/icons/wine-bottle.svg';
import Money from '../../../assets/icons/money.svg';
import Circle from '../../../assets/icons/circle.svg';

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
                                        name='add-product'
                                        icon={Wine}
                                        placeholder='Nombre del producto' />
                                    <Select size="normal" />
                                    <TextInput
                                        type='text'
                                        name='price-product'
                                        icon={Money}
                                        placeholder='Precio por unidad' />
                                    <TextInput
                                        type='text'
                                        name='units-product'
                                        icon={Circle}
                                        placeholder='Unidades de venta' />
                                    <div className="text-area-container">
                                        <label className="description-title">Descripción del Producto</label>
                                        <textarea className="description-area" />
                                    </div>
                                    <Button
                                        theme="ok" size="normal">
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