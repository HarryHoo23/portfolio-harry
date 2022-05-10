import { useModalContext } from "../../context/modal_context";
import Modal from "../../data/Modal.json";

const Projects = () => {
    const { setModalContent, setModalTitle, setShowModal } = useModalContext();

    const handleShowModal = (item) => {
        setShowModal(true);
        setModalTitle("Heading 1")
        let content = <div>
            <h3>{item.title}</h3>
            <p>{item.content}</p>
        </div>
        setModalContent(content);
    }

    return (
        <div>
            {Modal.modalContents.map((item) => {
                return <button className="btn" onClick={() => handleShowModal(item)}>Open Modal</button>
            })}
        </div>
    );
};
export default Projects;
