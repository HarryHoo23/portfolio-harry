import styled from 'styled-components';
import { ParallaxBanner } from 'react-scroll-parallax';
import { ParallaxProvider } from 'react-scroll-parallax';

const Headline = styled.div`
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`

const MainBanner = () => {
    const background = {
        image:
            'https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/banner-background.jpg',
        translateY: [0, 50],
        opacity: [1, 0.3],
        scale: [1.05, 1, 'easeOutCubic'],
        shouldAlwaysCompleteAnimation: true,
    };

    const headline = {
        translateY: [0, 30],
        scale: [1, 1.05, "easeOutCubic"],
        shouldAlwaysCompleteAnimation: true,
        expanded: false,
        children: (
          <Headline>
            <h1>Hello World!</h1>
          </Headline>
        )
    };

    const foreground = {
        image:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/banner-foreground.png",
        translateY: [0, 15],
        scale: [1, 1.1, "easeOutCubic"],
        shouldAlwaysCompleteAnimation: true
    };
    
    const gradientOverlay = {
        opacity: [0, 1, "easeOutCubic"],
        shouldAlwaysCompleteAnimation: true,
        expanded: false,
        children: <div className="gradient inset" />
    };

    return (
        <ParallaxProvider>
            <ParallaxBanner
                layers={[background, headline, foreground, gradientOverlay]}
                className="full-height"
            />
        </ParallaxProvider>
    )
}

export default MainBanner