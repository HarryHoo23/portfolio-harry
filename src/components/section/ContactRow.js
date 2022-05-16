import styled from "styled-components";
import { Col, Container, Row } from "react-bootstrap";
import Title from "../elements/Title";

const Wrapper = styled.section`
    width: 100%;
`;

const ContactRow = () => {
    return (
        <Wrapper className="section" id="contact">
            <Container>
                <Row>
                    <Title>Reach out to me!</Title>                    
                </Row>
            </Container>
        </Wrapper>
    );
};
export default ContactRow;
