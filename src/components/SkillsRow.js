import ProgressBar from "./elements/ProgressBar";
import { skill_set } from "../data/Skills";
import styled from 'styled-components';
import { Col, Row, Container } from "react-bootstrap";

const SkillContainer = styled.article`
    display: flex;
    align-items: center;
    background-color: var(--grey-500);
    padding: 15px 20px;
    border-radius: 10px;

    .icon {
        margin-right: 1rem;
    }

    svg {
        font-size: 40px;
        fill: var(--grey-50);
    }
`

const SkillsRow = () => {

    const progressBarColor = (score) => {
        if (score >= 90) {
            return "deep-blue"
        }
        if (score >= 80 && score < 90) {
            return "normal-blue"
        }
        if (score < 80) {
            return "light-blue"
        }
    }

    return (
        <Container className="section" id="skills">
            <Row>
                <Col md={4} className="p-2 p-lg-4 pt-lg-5">skills row</Col>
                <Col md={8} className="p-2 p-lg-5">
                    {skill_set.map((item) => {
                        return (
                            <SkillContainer key={item.name} className="mb-3">
                                <div className="icon">
                                    {item.icon}
                                </div>
                                <div className="flex-grow-1">
                                    <h4 className="m-1">{item.name}</h4>
                                    <ProgressBar progress={item.score} className={`${progressBarColor(item.score)} flex-1`} />
                                </div>
                            </SkillContainer>
                        )
                    })}
                </Col>
            </Row>
        </Container>
    )
}

export default SkillsRow