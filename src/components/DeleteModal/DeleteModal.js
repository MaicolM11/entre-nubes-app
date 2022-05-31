import React from "react";
import Button from "../Button/Button";
import './DeleteModal.css'

const DeleteModal = ({title, btnName}) =>{
    return(
        <div className="contentDeleteModal">
            <div className="contentTitleDeleteModal">
                <label className="deleteCategory"> {title}</label>
            </div>

            <div className="ButonsDeleteModal">
                <button className="cancelDeleteModal">
                 Cancelar
                </button>
                <Button
                text={btnName} color='#FF4343' 
                width={175} height={45} 
                />
            </div>
        </div>
        
    )
}

export default DeleteModal