import React from 'react';
import myImage from '../assets/imgs/me.png';
import styled from 'styled-components';

const PictureFrame = styled.picture`
    position: relative; 
    &:before {
        content: '';
        position: absolute;
        top: 2.5rem;
        left: 2.5rem;
        border-bottom: 3px solid #9633BC;
        border-right: 3px solid #9633BC;
        border-radius: 0 15px 0 15px;
        width: 14rem;
        height: 14rem;
    }
`;


const Intro = () => {
    return (
        <main className='block justify-center p-6 w-full h-max'>
            <div className='flex items-center flex-col md:flex-row-reverse md:justify-between space-y-6'>
                <section className='w-auto'>
                    <PictureFrame>
                        <img src={myImage} className='w-64' alt='personal' />
                    </PictureFrame>
                </section>
                <section className='text-text-dark w-full md:w-1/2 space-y-4 text-left text-dark-theme'>
                    <p className='font-semibold text-lg'>
                        Hi there,
                    </p>
                    <p className='text-purple-dark text-2xl font-extrabold text-purple-dark-mode'>
                        This is Soheil known as SoliExE.
                        I do implement Responsive, Scalable & Fast things for the web.
                    </p>
                    <p className='font-semibold text-lg'>
                        I develop front-end (and occasionally designing).
                        Recently, I've focused on building SPA using ReactJS.
                    </p>
                </section>
            </div>
            <footer className='flex justify-between w-full md:w-1/2 mt-6'>
                <a href='Resume.pdf' download={true} className='text-text-dark font-medium cursor-pointer rounded-3xl border-2 border-purple-dark py-2 px-5 text-sm border-purple-dark-mode text-dark-theme'>
                    Download CV
                </a>
            </footer>
        </main>
    );
};

export default Intro;