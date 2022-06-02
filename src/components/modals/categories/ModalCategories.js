import React from 'react';
import "./ModalCategories.css";

import { useRef, useEffect, useCallback } from "react";
import { useSpring, animated } from "react-spring";

import { Background } from '../Background';

import CloseButton from "../../buttons/close-button/CloseButton";
import { Button } from '../../../components/buttons/button/Button';

export const ModalCategories = ({ openModal, setOpenModal }) => {

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

    return <>{openModal ?
        (<Background ref={modalRef} onClick={closeModal}>
            <animated.div style={animation}>
                <div className='modal-categories-container'>
                    <div className='categories-container'>
                        <div className='categories-title-container'>
                            <label className="categories-title-modal">Categorías</label>
                            <div className="close-categories-container">
                                <CloseButton handleOnClick={closeButtonModal} />
                            </div>
                        </div>
                        <div className='categories-center-container'>
                            <div className='category-cards-container'></div>
                            <div className='create-category-container'>
                                <Button theme="ok" size="normal">Agregar Categoría</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </animated.div>
        </Background>) : null}</>;
};