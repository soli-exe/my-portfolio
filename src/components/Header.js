import React, { useState } from 'react';
import menuIcon from '../assets/icons/menu.svg';
import logo from '../assets/icons/logo/My Logo.svg';
import Navbar from './Navbar';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SvgThemeIcon = styled.svg`
    fill: #F8F8F8;
    @media(min-width: 768px){
        path{
            fill: #27282D;
        }
    }
`;


const Header = () => {

    const [navShown, setNavShown] = useState(false);

    const toggleNav = () => {
        return setNavShown(prevState => !prevState);
    }

    return (
        <header className='px-5 py-2 bg-box-dark max-w-7xl sm:px-8 md:bg-transparent md:pt-5'>
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
                    <SvgThemeIcon width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 8.75C13.3424 8.75 11.7527 9.40848 10.5806 10.5806C9.40848 11.7527 8.75 13.3424 8.75 15C8.75 16.6576 9.40848 18.2473 10.5806 19.4194C11.7527 20.5915 13.3424 21.25 15 21.25C16.6576 21.25 18.2473 20.5915 19.4194 19.4194C20.5915 18.2473 21.25 16.6576 21.25 15C21.25 13.3424 20.5915 11.7527 19.4194 10.5806C18.2473 9.40848 16.6576 8.75 15 8.75Z" fill="white" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M15 1.25C15.3315 1.25 15.6495 1.3817 15.8839 1.61612C16.1183 1.85054 16.25 2.16848 16.25 2.5V3.75C16.25 4.08152 16.1183 4.39946 15.8839 4.63388C15.6495 4.8683 15.3315 5 15 5C14.6685 5 14.3505 4.8683 14.1161 4.63388C13.8817 4.39946 13.75 4.08152 13.75 3.75V2.5C13.75 2.16848 13.8817 1.85054 14.1161 1.61612C14.3505 1.3817 14.6685 1.25 15 1.25ZM4.11625 4.11625C4.35066 3.88191 4.66854 3.75027 5 3.75027C5.33146 3.75027 5.64934 3.88191 5.88375 4.11625L7.75875 5.99125C7.98645 6.227 8.11244 6.54276 8.10959 6.8705C8.10674 7.19825 7.97528 7.51176 7.74352 7.74352C7.51176 7.97528 7.19825 8.10674 6.8705 8.10959C6.54276 8.11244 6.227 7.98645 5.99125 7.75875L4.11625 5.88375C3.88191 5.64934 3.75027 5.33146 3.75027 5C3.75027 4.66854 3.88191 4.35066 4.11625 4.11625ZM25.8838 4.11625C26.1181 4.35066 26.2497 4.66854 26.2497 5C26.2497 5.33146 26.1181 5.64934 25.8838 5.88375L24.0088 7.75875C23.8934 7.87814 23.7555 7.97337 23.603 8.03888C23.4505 8.10439 23.2865 8.13887 23.1205 8.14031C22.9545 8.14176 22.7899 8.11013 22.6363 8.04728C22.4827 7.98443 22.3431 7.89161 22.2258 7.77424C22.1084 7.65688 22.0156 7.51731 21.9527 7.36369C21.8899 7.21007 21.8582 7.04547 21.8597 6.8795C21.8611 6.71352 21.8956 6.5495 21.9611 6.39699C22.0266 6.24449 22.1219 6.10656 22.2412 5.99125L24.1162 4.11625C24.3507 3.88191 24.6685 3.75027 25 3.75027C25.3315 3.75027 25.6493 3.88191 25.8838 4.11625ZM1.25 15C1.25 14.6685 1.3817 14.3505 1.61612 14.1161C1.85054 13.8817 2.16848 13.75 2.5 13.75H3.75C4.08152 13.75 4.39946 13.8817 4.63388 14.1161C4.8683 14.3505 5 14.6685 5 15C5 15.3315 4.8683 15.6495 4.63388 15.8839C4.39946 16.1183 4.08152 16.25 3.75 16.25H2.5C2.16848 16.25 1.85054 16.1183 1.61612 15.8839C1.3817 15.6495 1.25 15.3315 1.25 15ZM25 15C25 14.6685 25.1317 14.3505 25.3661 14.1161C25.6005 13.8817 25.9185 13.75 26.25 13.75H27.5C27.8315 13.75 28.1495 13.8817 28.3839 14.1161C28.6183 14.3505 28.75 14.6685 28.75 15C28.75 15.3315 28.6183 15.6495 28.3839 15.8839C28.1495 16.1183 27.8315 16.25 27.5 16.25H26.25C25.9185 16.25 25.6005 16.1183 25.3661 15.8839C25.1317 15.6495 25 15.3315 25 15ZM7.75875 22.2412C7.99309 22.4757 8.12473 22.7935 8.12473 23.125C8.12473 23.4565 7.99309 23.7743 7.75875 24.0088L5.88375 25.8838C5.648 26.1114 5.33224 26.2374 5.0045 26.2346C4.67675 26.2317 4.36324 26.1003 4.13148 25.8685C3.89972 25.6368 3.76826 25.3232 3.76541 24.9955C3.76256 24.6678 3.88855 24.352 4.11625 24.1162L5.99125 22.2412C6.22566 22.0069 6.54354 21.8753 6.875 21.8753C7.20646 21.8753 7.52434 22.0069 7.75875 22.2412ZM22.2412 22.2412C22.4757 22.0069 22.7935 21.8753 23.125 21.8753C23.4565 21.8753 23.7743 22.0069 24.0088 22.2412L25.8838 24.1162C26.1114 24.352 26.2374 24.6678 26.2346 24.9955C26.2317 25.3232 26.1003 25.6368 25.8685 25.8685C25.6368 26.1003 25.3232 26.2317 24.9955 26.2346C24.6678 26.2374 24.352 26.1114 24.1162 25.8838L22.2412 24.0088C22.0069 23.7743 21.8753 23.4565 21.8753 23.125C21.8753 22.7935 22.0069 22.4757 22.2412 22.2412ZM15 25C15.3315 25 15.6495 25.1317 15.8839 25.3661C16.1183 25.6005 16.25 25.9185 16.25 26.25V27.5C16.25 27.8315 16.1183 28.1495 15.8839 28.3839C15.6495 28.6183 15.3315 28.75 15 28.75C14.6685 28.75 14.3505 28.6183 14.1161 28.3839C13.8817 28.1495 13.75 27.8315 13.75 27.5V26.25C13.75 25.9185 13.8817 25.6005 14.1161 25.3661C14.3505 25.1317 14.6685 25 15 25Z" fill="white" />
                    </SvgThemeIcon>
                </span>
            </div>
        </header>
    );
};

export default Header;