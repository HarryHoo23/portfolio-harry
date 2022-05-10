import React, { useState, useContext } from "react";
import ReusableModal from "../components/elements/ReusableModal";

const ModalContext = React.createContext();

const ModalProvider = ({ children }) => {
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState(null);
    const [modalTitle, setModalTitle] = useState("");

    return (
        <ModalContext.Provider
            value={{
                setModalContent,
                setModalTitle,
                setShowModal,
            }}
        >
            <ReusableModal isOpen={showModal} title={modalTitle} content={modalContent}/>
            {children}
        </ModalContext.Provider>
    );
};

export const useModalContext = () => {
    return useContext(ModalContext);
};

export { ModalProvider, ModalContext };
