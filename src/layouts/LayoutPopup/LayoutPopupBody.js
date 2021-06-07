import React from 'react';
import closeIcon from "../../assets/images/popup/close.svg"
import "../../assets/styles/LayoutPopup.scss"
import {usePopupContext} from "./LayoutPopup";

function LayoutPopupBody({title, className, children}) {
    return (
        <div className={"popup-body " + className}>
            <div className="popup-body__header">
                <h2 className="popup-body__title">{title}</h2>
                <a className="popup-body__close-icon-link">
                    <img className="popup-body__close-icon-img" src={closeIcon} alt="closeIcon"/>
                </a>
            </div>
            {children}
        </div>
    )
}

export default LayoutPopupBody;