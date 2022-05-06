import { useEffect, useRef } from "react";
import styled from 'styled-components';
import Button from "./components/elements/Button";
import Circle from "./components/Circle";
import MainBanner from "./components/MainBanner";
import SkillsRow from "./components/SkillsRow";
import AboutMe from "./components/AboutMe";
import { useGlobalContext } from "./context/app_context";

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    .theme-toggle {
        position: fixed;
        top: 1rem;
        right: 2rem;
        z-index: 10;
    }
`

const App = () => {
    const { isLoading, toggleTheme } = useGlobalContext();
    const circleRef = useRef([]);
    circleRef.current = [];

    useEffect(() => {
        circleRef.current.forEach(ref => ref.moveTo(window.innerWidth / 2, window.innerHeight / 2));
        
        const onMove = ({ clientX, clientY }) => {      
          circleRef.current.forEach(ref => ref.moveTo(clientX, clientY));
        };
        
        window.addEventListener("pointermove", onMove);
        
        return () => window.removeEventListener("pointermove", onMove);
    }, []);
    
    const addCircleRef = ref => {
        if (ref) {
            circleRef.current.push(ref);
        }    
    };

    if (isLoading) {
        return (
            <Wrapper className="vh-100">
                <h1>...Loading</h1>
            </Wrapper>
        )
    }

    return (
        <main>
            <Wrapper>
                <div>
                    <Circle size="sm" ref={addCircleRef} delay={0} />
                    <Circle size="md" ref={addCircleRef} delay={0.1} />
                    <Circle size="lg" ref={addCircleRef} delay={0.2} />
                </div>
                <Button className="theme-toggle" action={toggleTheme}>Change Color</Button>
                <MainBanner />
            </Wrapper>
            <AboutMe />
            <SkillsRow />
            <div className="vh-100"></div>
        </main>
    )
}

export default App
