import { Container, Row, Col } from "react-bootstrap";
import SectionCurve from "../elements/SectionCurve";
import Title from "../elements/Title";
import styled from 'styled-components';
import musicIcon from '../../assets/icons/music.svg';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

const Wrapper = styled.section`
    width: 100%;

    .text-block {
        padding-right: 2rem;

        @media (max-width: 768px) {
            padding-right: 0;
        }
    }

    img {
        margin-left: 10px;
        max-width: 50px
    }
`

const AboutMe = () => {

    const paragraphLeftRef = useRef(null);
    const paragraphRightRef = useRef(null);

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        gsap.fromTo(paragraphLeftRef.current, { opacity: 0, y: 80 }, {
            opacity: 1, y: 0, duration: 2, stagger: 0.1, ease: 'ease',
            scrollTrigger: {
                trigger: paragraphLeftRef.current,
                start: 'top-=200 center'
            }
        })
        gsap.fromTo(paragraphRightRef.current, { opacity: 0, y: 80 }, {
            opacity: 1, y: 0, duration: 2, stagger: 0.1, ease: 'ease',
            scrollTrigger: {
                trigger: paragraphLeftRef.current,
                start: 'top-=200 center'
            }
        })
    }, []);

    const scrollToSection = () => {
        document.querySelector("#skills").scrollIntoView({
            behavior: "smooth"
        })
    };

    return (
        <SectionCurve>
            <Wrapper className="section grey" id="about-me">
                <Container>
                    <Row>
                        <Title>
                            About me!!
                        </Title>
                        <Col md={5} sm={12}>
                            <p className="text-large" ref={paragraphLeftRef}>
                                After I graduated from America, then I moved to Australia and I decided to change my career path and become a programmer. In the college, I have completed dozen projects across web and mobile applications, made me realize how much I love coding.
                                <br />
                                <br />
                                Until now, I have more than two years commercial experience in building web application, mainly FrontEnd but also something in the backend. 
                            </p>
                        </Col>
                        <Col md={5} sm={12} className="offset-1">
                            <p className="text-large" ref={paragraphRightRef}>
                                Besides from coding and programming, I am not a typical programmer, I have a lot of hobbies. My free time is filling up with basketball, working out, playing guitar and sing Karaoke! <span><img src={musicIcon} alt="music" /></span>
                                <br />
                                <br />
                                Talk to me! I am very friendly and happy to talk to you to!
                            </p>
                            
                            <button className="btn mt-3" onClick={scrollToSection}>Contact me now!</button>
                        </Col>
                    </Row>
                </Container>
            </Wrapper>
        </SectionCurve>
    )
}

export default AboutMe