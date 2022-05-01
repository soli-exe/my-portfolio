import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';


const ThemeToggle = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <div className='transition duration-500 ease-in-out'>
            {theme === 'dark' ?
                <FontAwesomeIcon onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} icon={faSun} className='text-text-light dark:text-text-light md:text-text-dark p-2' />
                : <FontAwesomeIcon onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} icon={faMoon} className='text-text-light dark:text-text-light md:text-text-dark p-2' />}
        </div>
    );
};

export default ThemeToggle;