import React from 'react';
import "./CreateCategory.css";

import { useRef, useEffect, useCallback } from "react";
import { useSpring, animated } from "react-spring";

import { Background } from '../Background';

import CloseButton from "../../buttons/close-button/CloseButton";

import TextInput from "../../../components/inputs/TextInput";
import Category from "../../../assets/icons/category-black.svg";
import { Button } from '../../buttons/button/Button';

const CreateCategory = ({ openModal, setOpenModal, modalCreateCategory, onchange }) => {
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
                <div className='create-category-container'>
                    <div className='create-category-title-container'>
                        <label className="create-category-title-modal">Agregar Categoría</label>
                        <div className="create-close-category-container">
                            <CloseButton handleOnClick={closeButtonModal} />
                        </div>
                    </div>
                    <TextInput
                        type='text'
                        name='category'
                        icon={Category}
                        placeholder='Nombre de categoría'
                        onChange={onchange}
                    />
                    <Button theme="ok" size="normal" onClick={modalCreateCategory}>Agregar Categoría</Button>
                </div>
            </animated.div>
        </Background>) : null}</>;
};

export default CreateCategory;