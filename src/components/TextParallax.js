import styled from "styled-components"
import { Parallax } from "react-scroll-parallax"
import PropTypes from 'prop-types';

const Wrapper = styled.div`
    display: flex;
    flex-flow: column wrap;
    align-items: space-around;
    justify-content: center;
    align-items: center;
    height: 50vh;

    .i-block {
        display: inline-block;
    }
`

const TextParallax = (props) => {
    const copy = props.copy.split("");

    return (
        <Wrapper>
            <div>
                <h2>
                    {copy.map((letter, index) => {
                        return <Parallax 
                            key={index}
                            translateX={[0, 100 * (index - 3)]}
                            className="i-block"
                        >
                            {letter}
                        </Parallax>
                    })}
                </h2>
            </div>
        </Wrapper>
    )
}

TextParallax.propTypes = {
    copy: PropTypes.string.isRequired
}

export default TextParallax