import styled from 'styled-components';

const Heading = styled.h2`
    color: var(--color-blue);
    left: 0;
    gap: 20px;

    img {
        max-width: 80px;
    }
`

const Title = (props) => {
  return (
    <Heading className={`dash-title ${props.className}`}>{props.children}</Heading>
  )
}

export default Title