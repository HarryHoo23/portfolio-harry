import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import SplitImages from '../elements/SplitImages';
import WeatherInfo from '../header&footer/WeatherInfo';
import Button from '../elements/Button';
import ParticlesBackground from '../ParticlesBackground';
import { ImageList } from '../../data/BannerImage';
import TextParallax from '../TextParallax';
import { gsap } from 'gsap';
import { Row, Col, Container } from "react-bootstrap";
import { GiClick } from 'react-icons/gi';
import cat from '../../assets/icons/cat.svg';

const ImageContainer = styled.div`
    display: grid;
    max-width: 450px;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    position: relative;
    cursor: pointer;

    .overlay {
        position: absolute;
        flex-direction: column;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        color: var(--primary-100);
        background-color: rgba(0, 0, 0, 0.5);  
        height: 100%;
        transition: 2s linear ease-in-out;
        z-index: 2;
        gap: 10px;
    }
`

const Heading = styled.h3`
    font-weight: 500;

    span {
        color: var(--primary-700);
        font-weight: 600;
    }
`

const Wrapper = styled.section`
    width: 100%;

    .z-index {
        z-index: 3;
    }
`

const MainBanner = () => {
    const [isFlipped, setIsFlipped] = useState(false);
    const containerRef = useRef(null);
    const overlayRef = useRef(null);
    const catRef = useRef(null);

    useEffect(() => {
        setTimeout(() => {
            gsap.fromTo(overlayRef.current, { opacity: 1, height: "100%" }, {opacity: 0, height: 0, duration: 1, ease: 'power1.out'});
        }, 2000);
        gsap.fromTo(catRef.current, { y: -100, x: 100}, {y: 0, x: 0, duration: 1, ease: 'power1.out'});
    }, []);

    const clickToFlip = () => {
        setIsFlipped(!isFlipped);
        gsap.fromTo(containerRef.current, { gap: "20px" }, {gap: 0, duration: 1, ease: 'power1.out'});
    }

    return (
        <Wrapper>
            <ParticlesBackground />
            <Container className="vh-100">
                <Row className="h-100 align-items-center position-relative">
                    <WeatherInfo />
                    <TextParallax copy={`Harry${' '}Hu`} className="color-blue bold" wrapperClassName="position-absolute" />
                    <Col md={6} className="z-index">
                        <h1 className="color-blue bold dash-title">Harry's personal project.</h1>
                        <Heading>An Enthusiastic <span>Front-end</span> Web Developer</Heading>
                        <p className="m-0">
                            And I have a cute <span className="semi-bold color-blue font-medium">cat!!</span>
                            <img src={cat} alt="cat" className="cat" ref={catRef} />
                        </p>
                    </Col>
                    <Col md={5} className="offset-md-1 z-index">
                        <ImageContainer ref={containerRef}>
                            <div className="overlay d-flex justify-content-center align-items-center" ref={overlayRef}>
                                <GiClick color={"#9fb3c8"} size={"50px"} />
                                <h2>Click to see the Effect</h2>
                            </div>
                            {ImageList.map((image, index) => {
                                return <SplitImages key={index} image={image} action={clickToFlip} isFlipped={isFlipped} />
                            })}       
                        </ImageContainer>
                        <Button className="mt-3 d-flex align-items-center" action={clickToFlip}>{!isFlipped ? "To See My Cat!" : "To See Me!"} <GiClick color={"#9fb3c8"} size={"24px"} style={{marginLeft: "10px"}} /></Button>   
                    </Col>
                </Row>
            </Container>
        </Wrapper>
    )
}

export default MainBanner