import React,
{
    useEffect,
    useState
}
    from 'react';

import { ThemeContext }
    from './ThemeContext.jsx';

const ThemeProvider = (props) => {

    const [darkMode, setDarkMode] =
        useState(false);

    useEffect(() => {

        const Theme =
            localStorage.getItem('Theme');

        if (Theme === "dark") {

            document.documentElement
                .classList.add("dark");

            setDarkMode(true);
        }

    }, [darkMode]);

    const taggleTheme = () => {

        if (darkMode) {

            document.documentElement
                .classList.remove("dark");

            localStorage.setItem(
                'Theme',
                "light"
            );

        } else {

            document.documentElement
                .classList.add("dark");

            localStorage.setItem(
                "Theme",
                "dark"
            );
        }

        setDarkMode(!darkMode);
    };

    const data = {

        darkMode,
        taggleTheme

    };

    return (

        <ThemeContext.Provider
            value={data}
        >

            {props.children}

        </ThemeContext.Provider>

    );
};

export default ThemeProvider;