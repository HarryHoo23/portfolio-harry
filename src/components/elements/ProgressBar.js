import { ProgressBar as Progress } from "react-bootstrap"
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { gsap } from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

const Wrapper = styled.div`
    .progress {
        height: 30px;
        border-radius: 10px;
        font-size: 15px;

        &.light-blue {
            .progress-bar {
                background-color: var(--primary-400);
            }
        }

        &.normal-blue {
            .progress-bar {
                background-color: var(--primary-700);
            }
        }

        &.deep-blue {
            .progress-bar {
                background-color: var(--primary-900);
            }
        }
    }
`

const ProgressBar = (props) => {

    const progressRef = useRef();

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        let tl = gsap.timeline();
        tl.fromTo(progressRef.current.querySelector(".progress-bar"), { width: 0, opacity: 0 }, {
            width: `${props.progress}%`, opacity: 1, duration: 2, ease: 'power4.out', scrollTrigger: {
                trigger: progressRef.current,
                start: 'top-=400 center'
            }
        });
    })

    return (
        <Wrapper>
           <Progress ref={progressRef} className={`${props.className}`} now={props.progress} label={`score: ${props.progress} `} /> 
        </Wrapper>
    )
}

ProgressBar.propTypes = {
    progress: PropTypes.number.isRequired,
}

export default ProgressBar