import { useEffect, useRef } from "react";
import styled from "styled-components";
import Button from "./components/elements/Button";
import Loader from "./components/elements/Loader";
import Circle from "./components/Circle";
import MainBanner from "./components/section/MainBanner";
import SkillsRow from "./components/section/SkillsRow";
import AboutMe from "./components/section/AboutMe";
import Projects from "./components/section/Projects";
import ContactRow from "./components/section/ContactRow";
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
`;

const App = () => {
    const { isLoading, toggleTheme } = useGlobalContext();
    const circleRef = useRef([]);
    circleRef.current = [];

    useEffect(() => {
        circleRef.current.forEach((ref) =>
            ref.moveTo(window.innerWidth / 2, window.innerHeight / 2)
        );

        const onMove = ({ clientX, clientY }) => {
            circleRef.current.forEach((ref) => ref.moveTo(clientX, clientY));
        };

        window.addEventListener("pointermove", onMove);

        return () => window.removeEventListener("pointermove", onMove);
    }, []);

    const addCircleRef = (ref) => {
        if (ref) {
            circleRef.current.push(ref);
        }
    };

    if (isLoading) {
        return (
            <Wrapper className="vh-100 flex-column">
                <h5 className="mb-5"><span className="bold text-extra-large">Harry Hu</span> is coming right away...</h5>
                <Loader />
            </Wrapper>
        );
    }

    return (
        <main>
            <Wrapper>
                <div>
                    <Circle size="sm" ref={addCircleRef} delay={0} />
                    <Circle size="md" ref={addCircleRef} delay={0.1} />
                </div>
                <Button className="theme-toggle" action={toggleTheme}>
                    Change Color
                </Button>
                <MainBanner />
            </Wrapper>
            <AboutMe />
            <SkillsRow />
            <Projects />
            <ContactRow />
        </main>
    );
};

export default App;
