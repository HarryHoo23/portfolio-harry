import { useModalContext } from "../../context/modal_context";
import { Col, Container, Row } from "react-bootstrap";
import Project from "../Project";
import Title from '../elements/Title';
import styled from "styled-components";
import SectionCurve from "../elements/SectionCurve";
import { useEffect, useState } from "react";
import axios from "axios";

const Wrapper = styled.section`
    width: 100%;
`

const ProjectsRow = styled.div`
    display: grid;
    margin: 0px auto 2rem;
    gap: 3rem 5rem;
    grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
`

const Projects = () => {
    
    const [projects, setProjects] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState(false);

    const fetchProjectsData = async () => {
        setIsLoading(true);
        try {                
            const {data} = await axios.get('/api/airtable');
            setProjects(data);
            setIsLoading(false);
            setHasError(false);
        } catch (error) {            
            setIsLoading(false);
            setHasError(true);
            console.log(error);
        }
    }

    useEffect(() => {
        fetchProjectsData();
    }, []);

    if (isLoading) {
        return <SectionCurve>
            <Wrapper>
                <Container>
                    <Row>
                        <Title>
                            My projects
                        </Title>
                    </Row>
                    ...Loading...
                </Container>
            </Wrapper>
        </SectionCurve>
    }

    return (
        <SectionCurve>
            <Wrapper className="section grey" id="projects">
                <Container>
                    <Row>
                        <Title>
                            My projects
                        </Title>
                        <Col className="mt-5">
                            <ProjectsRow>
                                {projects && projects.map((project) => {
                                    return (
                                        <Project key={project.id} project={project} />
                                    )
                                })}
                            </ProjectsRow>
                        </Col>
                    </Row>                    
                </Container>
            </Wrapper>
        </SectionCurve>
    );
};
export default Projects;
