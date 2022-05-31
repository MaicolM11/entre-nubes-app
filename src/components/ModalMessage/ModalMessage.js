import React  from "react";
import Button from "../Button/Button";
import './ModalMessage.css'

const ModalMessage = ({text, setOpenModal})=>{
    
    const closeModal = ()=> setOpenModal(false)

    return(
        <div className="modalContainer">
            <div className="title">
                <h1>{text}</h1>
            </div>
            <div className="footer">
            <Button text="Aceptar" color="#2CE74A" width= {185} 
            height = {45} handleOnClick = {closeModal}/>
            </div>
        </div> 
    )
}

export default ModalMessage