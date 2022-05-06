import React, { useContext, useEffect, useState } from "react";

const AppContext = React.createContext();

const getStorageTheme = () => {
    let theme = 'light-theme';
    if (localStorage.getItem('theme')) {
      theme = localStorage.getItem('theme');
    }
    return theme;
};

const AppProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
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

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 500);
    }, []);

    return (
        <AppContext.Provider value={{
            isLoading,
            theme,
            toggleTheme
        }}>
            {children}
        </AppContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppProvider, AppContext };