import React from 'react';
import Intro from './Intro';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import styled from 'styled-components';


const Divider = styled.hr`
    border: none;
    border-bottom: 1px dashed #9633BC;
    margin: 0 20%;
`;

const Home = () => {
    return (
        <div className='max-w-7xl space-y-8 bg-bg-light'>
            <Intro />
            <Divider></Divider>
            <About />
            <Divider></Divider>
            <Contact />
            <Divider></Divider>
            <Footer />
        </div>
    );
};

export default Home;