import styled from "styled-components"
import { Parallax } from "react-scroll-parallax"
import PropTypes from 'prop-types';

const Wrapper = styled.div`
    display: flex;
    flex-flow: column wrap;
    align-items: space-around;
    justify-content: center;
    align-items: center;

    .i-block {
        display: inline-block;
    }
`

const TextParallax = (props) => {
    const copy = props.copy.split("");

    return (
        <Wrapper>
            <div>
                <h1>
                    {copy.map((letter, index) => {
                        return <Parallax 
                            key={index}
                            translateX={[0, 100 * (index - 2)]}
                            className="i-block"
                        >
                            {letter}
                        </Parallax>
                    })}
                </h1>
            </div>
        </Wrapper>
    )
}

TextParallax.propTypes = {
    copy: PropTypes.string.isRequired
}

export default TextParallax