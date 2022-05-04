import { useEffect, useState } from "react";
import styled from 'styled-components';
import TextParallax from './components/TextParallax';
import Button from "./components/elements/Button";

const Wrapper = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    position: relative;
`

const getStorageTheme = () => {
    let theme = 'light-theme';
    if (localStorage.getItem('theme')) {
      theme = localStorage.getItem('theme');
    }
    return theme;
};

const App = () => {
    const [theme, setTheme] = useState(getStorageTheme());
    const toggleTheme = () => {
        if (theme === 'light-theme') {
          setTheme('dark-theme');
        } else {
          setTheme('light-theme');
        }
    };

    useEffect(() => {
        document.documentElement.className = theme;
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <Wrapper>
            <Button action={toggleTheme}>Change Color</Button>
            <section>
                <TextParallax copy="Harry Hu" />
                <h2>Harry's personal project.</h2>
            </section>
        </Wrapper>
    )
}

export default App
