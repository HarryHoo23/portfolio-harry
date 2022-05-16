import styled from "styled-components";
import { Col, Container, Row } from "react-bootstrap";
import Project from "../Project";
import Button from '../elements/Button';
import Title from '../elements/Title';
import Loader from "../elements/Loader";
import SectionCurve from "../elements/SectionCurve";
import { useEffect, useState } from "react";
import axios from "axios";


const Wrapper = styled.section`
    width: 100%;

    .show-btn {
        min-width: 200px;
    }
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
    const [showMore, setShowMore] = useState(false);

    const fetchProjectsData = async () => {
        setIsLoading(true);
        try {                
            const { data } = await axios.get('/api/airtable');
            let sortedData = data.sort((dataA, dataB) => new Date(dataB.date) - new Date(dataA.date));
            setProjects(sortedData);
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
            <Wrapper className="section grey">
                <Container>
                    <Row>
                        <Title>
                            My projects
                        </Title>
                        <div className="mt-5">
                            <Loader />
                        </div>
                    </Row>
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
                        <p>Here is some of the projects that I have built, and I am still keep building new ones. I will pop them up here once I finish them...</p>
                        <Col className="mt-5 text-center">
                            <ProjectsRow>
                                {projects && projects.slice(0, 6).map((project) => {
                                    return (
                                        <Project key={project.id} project={project} />
                                    )
                                })}                                
                                {showMore && projects && projects.slice(6).map((project) => {
                                    return (
                                        <Project key={project.id} project={project} />
                                    )
                                })}
                            </ProjectsRow>
                            <Button className="show-btn mt-5" action={() => setShowMore(!showMore)}>{!showMore ? 'Show more' : 'Hide them'}</Button>
                        </Col>
                    </Row>                    
                </Container>
            </Wrapper>
        </SectionCurve>
    );
};
export default Projects;
