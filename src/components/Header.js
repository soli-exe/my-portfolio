import React, { useState } from 'react';
import menuIcon from '../assets/icons/menu.svg';
import logo from '../assets/icons/logo/My Logo.svg';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';


const Header = (props) => {
    const { toggleTheme } = props;

    const [navShown, setNavShown] = useState(false);

    const toggleNav = () => {
        return setNavShown(prevState => !prevState);
    }

    return (
        <header className='px-5 w-full py-2 bg-box-dark max-w-7xl sm:px-8 md:bg-transparent md:pt-5'>
            <div className='flex items-center justify-between'>
                <span onClick={toggleNav} className='relative px-1 md:hidden'>
                    <img className='w-6' src={menuIcon} alt='menu icon' />
                </span>
                <Link to='/'>
                    <span className='cursor-pointer'>
                        <img className='w-9' src={logo} alt='logo' />
                    </span>
                </Link>
                <Navbar isShown={navShown} />
                <span className='cursor-pointer px-1'>
                    {toggleTheme}
                </span>
            </div>
        </header>
    );
};

export default Header;