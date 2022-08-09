import React from 'react';
import {createPortal} from "react-dom";
import {Modal} from "@mui/material";
import './PopUp.scss'

const modalWindow = (props) => {
    const {title, content, actions} = props
    return(
        <div className={'modal__content'}>
            <h3 className={'modal__content--heading'}>{title}</h3>
            <p className={'modal__content--text'}>{content}</p>
            <div className={'modal__content--row'}>
                {actions()}
            </div>
        </div>
    )
}
const PopUp = props => {
    return createPortal(
        <Modal open={props.open}>
            <div className={'modal'} onClick={props.onClose}>
                {modalWindow(props)}
            </div>
        </Modal>,
        document.getElementById('modal')

    )
}



export default PopUp;