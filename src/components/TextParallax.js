import styled from "styled-components"
import { Parallax } from "react-scroll-parallax"
import PropTypes from 'prop-types';

const Wrapper = styled.div`
    display: flex;
    flex-flow: column wrap;
    align-items: space-around;
    justify-content: center;
    align-items: center;

    h1 {
        text-align: center;
    }

    &.position-absolute {
        bottom: 5%;
    }

    .i-block {
        display: inline-block;
        font-size: 38px;
        font-weight: bold;
    }
`

const TextParallax = (props) => {
    const copy = props.copy.split("");
    return (
        <Wrapper className={props.wrapperClassName}>
            <h1 className={props.className}>
                {copy.map((letter, index) => {
                    return <Parallax 
                        key={index}
                        translateX={[0, 100 * (index - 3)]}
                        className="i-block"
                    >
                        {letter}
                    </Parallax>
                })}
            </h1>
        </Wrapper>
    )
}

TextParallax.propTypes = {
    copy: PropTypes.string.isRequired
}

export default TextParallax