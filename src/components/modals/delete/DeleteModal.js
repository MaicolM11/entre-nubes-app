import React from "react";
import { Button } from "../../buttons/button/Button";
import './DeleteModal.css'

const DeleteModal = ({ title, btnName }) => {
    return (
        <div className="contentDeleteModal">
            <div className="contentTitleDeleteModal">
                <label className="deleteCategory"> {title}</label>
            </div>

            <div className="ButonsDeleteModal">
                <button className="cancelDeleteModal">
                    Cancelar
                </button>
                <Button theme="delete" size="medium" onClick={sendData}>{btnName}</Button>
            </div>
        </div>

    )
}

export default DeleteModal