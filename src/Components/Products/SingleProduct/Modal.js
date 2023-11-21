import { Close } from "@mui/icons-material";
import React from "react";

const Modal = ({ image, setImg, setOpenModal }) => {
    const handleClose = () => {
        setOpenModal(false);
        setImg(null);
    };
    return (
        <div className="image_modal">
            <Close className="close_modal_icon" onClick={handleClose} />
            <div>
                <img src={image} alt="" />{" "}
            </div>
        </div>
    );
};

export default Modal;
