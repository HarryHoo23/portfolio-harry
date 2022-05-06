import { Container } from "react-bootstrap";
import SectionCurve from "./elements/SectionCurve";
import Title from "./elements/Title";
import styled from 'styled-components';

const Wrapper = styled.section`
    width: 100%;

    .text-block {
        padding-right: 2rem;

        @media (max-width: 768px) {
            padding-right: 0;
        }
    }
`

const AboutMe = () => {
    return (
        <SectionCurve>
            <Wrapper className="section grey" id="about-me">
                <Container>
                    <Title>
                        About me!!
                    </Title>
                </Container>
            </Wrapper>
        </SectionCurve>
    )
}

export default AboutMe