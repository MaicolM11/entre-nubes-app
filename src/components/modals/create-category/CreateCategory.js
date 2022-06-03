import React from 'react';
import "./CreateCategory.css";

import { useState, useRef, useEffect, useCallback } from "react";
import { useSpring, animated } from "react-spring";

import { Background } from '../Background';

import CloseButton from "../../buttons/close-button/CloseButton";

import { createCategory } from '../../../services/category';

import TextInput from "../../../components/inputs/TextInput";
import Category from "../../../assets/icons/category-black.svg";
import { Button } from '../../buttons/button/Button';

const CreateCategory = ({ openModal, setOpenModal, update }) => {
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

    //createCategory

    const [category, setCategory] = useState({
        name: ''
    });

    const createAndAddCategory = () => {
        createCategory(category.name)
            .then(async res => {
                let data = await res.json();
                if (res.ok) {
                    update()
                    closeButtonModal();
                } else {
                    alert(data.message)
                }
            })
    };

    const onChangeData = (e) => {
        const { name, value } = e.target;
        setCategory((inputs) => {
            return {
                ...inputs,
                [name]: value,
            };
        });
    };

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
                        name='name'
                        icon={Category}
                        placeholder='Nombre de categoría'
                        onChange={onChangeData}
                    />
                    <Button theme="ok" size="normal" onClick={createAndAddCategory}>Agregar Categoría</Button>
                </div>
            </animated.div>
        </Background>) : null}</>;
};

export default CreateCategory;