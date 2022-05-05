import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { ImageList } from '../data/BannerImage';
import SplitImages from './elements/SplitImages';
import { gsap } from 'gsap';
import { Row, Col, Container } from "react-bootstrap";
import Button from './elements/Button';

const ImageContainer = styled.div`
    display: grid;
    max-width: 450px;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    position: relative;
    cursor: pointer;

    .overlay {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        color: var(--primary-100);
        background-color: rgba(0, 0, 0, 0.3);  
        height: 100%;
        transition: 2s linear ease-in-out;
        &.none {
            visibility: hidden;
            height: 0;
        }
    }
`

const Heading = styled.h3`
    font-weight: 500;

    span {
        color: var(--primary-700);
        font-weight: 600;
    }
`

const MainBanner = () => {
    const [images, setImages] = useState(ImageList);
    const [overlayClass, setOverlayClass] = useState("overlay");
    const [isShuffled, setIsShuffled] = useState(false);
    const containerRef = useRef(null);
    const overlayRef = useRef(null);

    useEffect(() => {
        setTimeout(() => {
            setOverlayClass("overlay none");
        }, 2000);
        clickToShuffle();
    }, []);

    const clickToShuffle = () => {
        setIsShuffled(!isShuffled);
        let shuffledImages = [...images];
        shuffledImages.sort(() => Math.random() - 0.5);
        gsap.fromTo(containerRef.current, { margin: 20, opacity: 0 }, {margin: 0, opacity: 1, duration: 0.5, ease: 'power1.out'});
        if (isShuffled) {
            setImages(shuffledImages);
        } else {
            setImages(ImageList);
        }
    }

    return (
        <Container className="vh-100">
            <Row className="h-100 align-items-center">
                <Col md={6}>
                    <h1 className="color-blue bold">Harry's personal project.</h1>
                    <Heading>An Enthusiastic <span>Front-end</span> Web Developer</Heading>
                </Col>
                <Col md={5} className="offset-md-1">
                    <ImageContainer ref={containerRef}>
                        <div className={`${overlayClass} d-flex justify-content-center align-items-center`} ref={overlayRef}>
                            <h2>Click to see the Effect</h2>
                        </div>
                        {images.map((image, index) => {
                            return <SplitImages key={index} image={image} background="red" />
                        })}       
                    </ImageContainer>
                    <Button className="mt-3" action={clickToShuffle}>{isShuffled ? "Shuffle" : "Restore"}</Button>   
                </Col>
            </Row>
        </Container>
    )
}

export default MainBanner