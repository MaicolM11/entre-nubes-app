import React from "react";
import './CreateProduct.css';
import '../../../styles/ModalStyle.css';

import { Button } from '../../buttons/button/Button'

import TextInput from '../../inputs/TextInput';
import Select from '../../select/Select';

import Close from '../../../assets/icons/close.svg';
import Wine from '../../../assets/icons/wine-bottle.svg';
import Money from '../../../assets/icons/money.svg';
import Circle from '../../../assets/icons/circle.svg';

import { useRef } from "react";
import { useSpring, animated } from "react-spring";

const CreateProduct = ({ title, nameButton, openModal, setOpenModal }) => {

    const dialogRef = useRef();

    const animation = useSpring({
        config: {
            duration: 250,
        },
        opacity: showDialog ? 1 : 0,
        transform: showDialog ? `translateY(0%)` : `translateY(-100%)`,
    });

    const closeModal = (e) => {
        if (dialogRef.current === e.target) {
            setOpenModal(false);
        }
    };

    return (
        <>
            {openModal ? (
                <div
                    onClick={closeModal}
                    ref={dialogRef}
                    className="new-tour-container"
                >
                    <animated.div style={animation}>
                        <div className="modal-container">
                            <div className="create-product-container">
                                <div className="modal-title-container">
                                    <h1 className="add-title-modal">{title}</h1>
                                    <div className="close-image-container">
                                        <img
                                            src={Close}
                                            alt="icon"
                                            className="close-img"
                                        />
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
                                                {nameButton}
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </animated.div>
                </div>
            ) : null}
        </>
    );
};

export default CreateProduct;