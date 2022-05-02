import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return (
        <footer className='block w-full pb-4'>
            <div className='flex flex-wrap flex-col items-center md:flex-row-reverse md:justify-center md:gap-x-8'>
                <ul className='mb-2 md:mb-0 flex gap-x-3'>
                    <li>
                        <a href='https://github.com/soli-exe' target='_blank' rel='noreferrer'>
                            <FontAwesomeIcon icon={faGithub} fixedWidth className='text-3xl w-5 cursor-pointer text-text-dark text-dark-theme' />
                        </a>
                    </li>
                    <li>
                        <a href='https://www.instagram.com/its.soheil.dev/' target='_blank' rel='noreferrer'>
                            <FontAwesomeIcon icon={faInstagram} fixedWidth className='text-3xl w-5 cursor-pointer text-text-dark text-dark-theme' />
                        </a>
                    </li>
                </ul>
                <p className='text-center font-extrabold text-md text-text-dark text-dark-theme'>
                    Designed & developed by SoliExE @2022
                </p>
            </div>
        </footer>
    );
};

export default Footer;