import React from "react";
import { Button } from "../../buttons/button/Button";
import './DeleteModal.css'
import '../../../styles/ModalStyles.css'

const DeleteModal = ({ title, btnName }) => {
    return (
        <div className="modal-container">
            <div className="contentDeleteModal">
            <div className="contentTitleDeleteModal">
                <label className="deleteCategory"> {title}</label>
            </div>

            <div className="ButonsDeleteModal">
                <button className="cancelDeleteModal">
                    Cancelar
                </button>
                <Button theme="delete" size="medium" >{btnName}</Button>
            </div>
            </div>
        </div>

    )
}

export default DeleteModal