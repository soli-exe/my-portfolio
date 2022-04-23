import React from 'react';
import styled from 'styled-components';
import githubIcon from '../assets/icons/github.svg';
import instagramIcon from '../assets/icons/instagram.svg';

const Img = styled.img`
    width: 2rem;
`;


const Footer = () => {
    return (
        <footer className='block w-full pb-4'>
            <div className='flex flex-wrap flex-col items-center md:flex-row-reverse md:justify-center md:gap-x-8'>
                <ul className='mb-2 flex gap-x-3'>
                    <li>
                        <a href='https://github.com/soli-exe' target='_blank'>
                            <Img src={githubIcon} alt='github icon' />
                        </a>
                    </li>
                    <li>
                        <a href='https://www.instagram.com/its.soheil.dev/' target='_blank'>
                            <Img src={instagramIcon} alt='github icon' />
                        </a>
                    </li>
                </ul>
                <p className='text-center font-extrabold text-md text-text-dark'>
                    Designed & developed by SoliExE @2022
                </p>
            </div>
        </footer>
    );
};

export default Footer;