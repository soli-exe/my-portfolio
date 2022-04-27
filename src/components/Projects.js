import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: grid;
    overflow-y: auto;
    grid-template-columns: repeat(auto-fill, minmax(min(100%, 20rem), 1fr));
    grid-template-rows: 1fr 1fr 1fr 1fr;
    justify-items: center;
    grid-gap: 1.5rem; 
`;

const Projects = () => {

    const [projects, setProjects] = useState([]);

    const getProjects = () => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProjects(data.projects))
    }

    useEffect(() => {
        getProjects();
    }, [])


    return (
        <div className='max-w-7xl w-full mt-4 bg-bg-light sm:px-8'>
            <div className='w-full bg-box-light sm:rounded-lg space-y-8'>
                <header className='text-center md:text-left' >
                    <h3 className='text-2xl font-black text-purple-dark'>
                        Showcases
                    </h3>
                </header>
                <Container>
                    {projects && projects.map(project => {
                        return project
                    })}
                </Container>
            </div>
        </div>
    );
};

export default Projects;