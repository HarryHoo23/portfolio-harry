import styled from "styled-components";
import { useModalContext } from "../context/modal_context";
import Button from './elements/Button';

const SingleProject = styled.article`
    position: relative;

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

const ProjectOverlay = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    padding: 20px 40px;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: var(--primary-700);
    opacity: 0;
    width: 100%;
    color: var(--grey-200);
    transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);

    h4 {
        color: var(--grey-100);
        white-space: nowrap;
    }

    ${SingleProject}:hover & {
        opacity: 1;
    }
`

const Project = ({ project }) => {

    const { setModalContent, setModalTitle, setShowModal } = useModalContext();
    const { name, url, description, tech, imgUrl, date } = project;

    console.log(date);
    
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
            <ProjectOverlay>
                <h4 className="m-0 mb-2">{name}</h4>
                <p className="m-0 text-center text-medium">{description}</p>
                <Button className="mt-3" action={() => handleShowModal(project)}>View detail</Button>
            </ProjectOverlay>
            <img src={imgUrl} alt={name} />
            <div className="project-info">
                <h5 className="text-center m-0">{name}</h5>
            </div>
        </SingleProject>
    );
};
export default Project;
