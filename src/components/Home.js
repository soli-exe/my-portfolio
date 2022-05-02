import React from 'react';
import Intro from './Intro';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import styled from 'styled-components';


const Divider = styled.hr`
    border: none;
    border-bottom: 1px dashed;
    border-color: #9633BC;
    margin: 0 20%;
`;

const Home = () => {
    return (
        <div className='max-w-7xl space-y-8 bg-bg-light sm:px-8 bg-dark-theme'>
            <Intro />
            <Divider className='border-purple-dark-mode'></Divider>
            <About />
            <Divider className='border-purple-dark-mode'></Divider>
            <Contact />
            <Divider className='border-purple-dark-mode'></Divider>
            <Footer />
        </div>
    );
};

export default Home;