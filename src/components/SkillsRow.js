import ProgressBar from "./elements/ProgressBar";
import { skill_set } from "../data/Skills";
import styled from 'styled-components';
import { Col, Row, Container } from "react-bootstrap";
import Title from "./elements/Title";
import computerIcon from '../assets/icons/computer.svg';
import TabSkills from "./elements/TabSkills";
import { IoCodeOutline, IoCodeSlash, IoCodeWorkingOutline } from 'react-icons/io5';

const Wrapper = styled.section`
    width: 100%;

    .text-block {
        padding-right: 2rem;

        @media (max-width: 768px) {
            padding-right: 0;
        }
    }
`

const SkillContainer = styled.article`
    display: flex;
    align-items: center;
    background-color: var(--grey-400);
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

const Card = styled.article`
    background-color: var(--grey-300);
    padding: 15px 20px;
    border-radius: 10px;

    ul {
        list-style: none;
        margin: 0px;
        padding: 0px;

        li {
            display: flex;
            gap: 10px;
            align-items: center;
            font-size: 18px;
        }
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

    const progressSkillBar = () => {
        const content = skill_set.map((item) => {
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
        })
        return content;
    }

    const otherSkillContainer = () => {
        return (
            <div className="skill-container">
                <Card>
                    <h3>FrontEnd</h3>
                    <ul className="mt-3">
                        <li><IoCodeOutline />JQuery</li>
                        <li><IoCodeOutline />Vanilla JavaScript</li>
                        <li><IoCodeOutline />SASS</li>
                        <li><IoCodeOutline />Bootstrap</li>
                        <li><IoCodeOutline />Next.js</li>
                        <li><IoCodeOutline />API</li>
                        <li><IoCodeOutline />Responsive for sure</li>
                    </ul>
                </Card>

                <Card>
                    <h3 className="mb-1">BackEnd</h3>
                    <small>Not a typical backend guy, but I keep improve my backend Skills~</small>
                    <ul className="mt-2">
                        <li><IoCodeSlash />PHP</li>
                        <li><IoCodeSlash />MySQL</li>
                        <li><IoCodeSlash />MongoDB</li>
                        <li><IoCodeSlash />Firebase</li>
                        <li><IoCodeSlash />RESTful Services / API Development</li>
                        <li><IoCodeSlash />Netlify Serveless Function</li>
                    </ul>
                </Card>

                <Card>
                    <h3>Also</h3>
                    <ul className="mt-3">
                        <li><IoCodeWorkingOutline />Git / Source management</li>
                        <li><IoCodeWorkingOutline />Project Management</li>
                        <li><IoCodeWorkingOutline />Agile</li>
                        <li><IoCodeWorkingOutline />Webpack</li>
                        <li><IoCodeWorkingOutline />Netlify</li>
                        <li><IoCodeWorkingOutline />Heroku</li>
                        <li><IoCodeWorkingOutline />Swift</li>
                    </ul>
                </Card>
            </div>
        )
    }

    return (
        <Wrapper className="section" id="skills">
                <Container className="section">
                    <Row>
                        <Title className="d-flex align-items-center">My Skills <img src={computerIcon} alt="computerIcon" /></Title>
                        <Col md={4} className="pt-lg-5 pt-2 text-block">
                            <p className="text-left text-large">Here is what I do, I am confident in building any front-end web applications, in different skills, such as <span className="color-blue">React.js, Html5, Css, Jquery</span>, or Wordpress.</p>
                            <p className="text-left text-large">
                                And I consider myself very self-motivated, I kept learn new things to fullfill my skillset. Trying to be a qualified full-stack developer in the coming years.
                            </p>
                        </Col>
                        <Col md={8} className="p-2 p-lg-5">
                            <TabSkills defaultKey="mainSkill" firstTitle="Main Skills" firstKey="mainSkill" secondKey="otherSkill" secondTitle="Other Skills" firstChild={progressSkillBar()} secondChild={otherSkillContainer()} />
                        </Col>
                    </Row>
                </Container>
        </Wrapper>
    )
}

export default SkillsRow