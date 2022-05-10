import { Modal } from "react-bootstrap";
import { useModalContext } from '../../context/modal_context';
import styled from "styled-components";
import PropTypes from 'prop-types';

const Wrapper = styled.div`

`

const ReusableModal = ({ isOpen, title, content }) => {
    const { setShowModal } = useModalContext();
    return (
        <Wrapper>
            <Modal show={isOpen} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    {title}
                </Modal.Header>
                <Modal.Body>
                    {content}
                </Modal.Body>            
            </Modal>
        </Wrapper>
    );
};

ReusableModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    title: PropTypes.string,
    content: PropTypes.element
    
}

export default ReusableModal;
