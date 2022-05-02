import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ProjectCard from './ProjectCard';

const Container = styled.div`
    display: grid;
    width: 100%;
    height: max-content;
    overflow-y: auto;
    grid-template-columns: repeat(auto-fill, minmax(min(100%, 25rem), 1fr));
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
        <div className='max-w-7xl w-full mt-4 sm:px-4'>
            <header className='text-center md:text-left sm:px-4'>
                <h3 className='text-2xl font-black text-purple-dark text-purple-dark-mode'>
                    Showcases
                </h3>
            </header>
            <Container className='sm:px-4 py-6'>
                {projects && projects.map(project => {
                    return <ProjectCard key={project.id} title={project.title} description={project.description} labels={project.labels} icon={project.icon} link={project.link} githubRepoLink={project.githubRepo} />
                })}
            </Container>
        </div>
    );
};

export default Projects;