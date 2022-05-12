import styled from "styled-components";
import { useModalContext } from "../context/modal_context";

const SingleProject = styled.article`
    img {
        height: 200px;
        width: 100%;
        object-fit: cover;
    }

    .project-info {
        width: 100%;
        padding: 20px 15px;
        background-color: var(--white);
        border-top: 1px solid var(--grey-50);
    }
`

const Project = ({ project }) => {

    const { setModalContent, setModalTitle, setShowModal } = useModalContext();
    const { name, url, description, tech, imgUrl } = project;

    const handleShowModal = (item) => {
        setShowModal(true);
        setModalTitle("Heading 1")
        let content = <div>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
        </div>
        setModalContent(content);
    }

    return (
        <SingleProject>
            <img src={imgUrl} alt={name} />
            <div className="project-info">
                <h5 className="text-center m-0">{name}</h5>
            </div>
        </SingleProject>
    );
};
export default Project;
