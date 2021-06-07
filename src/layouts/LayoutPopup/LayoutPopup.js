import React, {createContext, useCallback, useContext, useEffect, useRef, useState} from 'react';
import "../../assets/styles/LayoutPopup.scss"

const PopupContext = createContext();
export const usePopupContext = () => useContext(PopupContext);

function LayoutPopup({title, children}) {
    const [open, setOpen] = useState(false);
    const popupRef = useRef(null);
    const onClickHandler = () => {
        setOpen(prev => !prev)
    }

    const onClickOutsideHandler = (e) => {
        if (open && !popupRef.current.contains(e.target)) {
            setOpen(prev => !prev);
        }
    }

    useEffect(() => {
        window.addEventListener('click', onClickOutsideHandler);
        return function clear() {
            window.removeEventListener('click', onClickOutsideHandler);

        }
    })
    return (
        <PopupContext.Provider value={{visible: open, onClickHandler}}>
            <div ref={popupRef} className="popup-wrapper">
                {children}
            </div>
        </PopupContext.Provider>
    );
};

export default LayoutPopup;