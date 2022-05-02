import React from 'react';
import styled from 'styled-components';
import { v4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const Card = styled.div`
    width:  max(100%, 18rem);
    height: auto;
`;

const Div = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

const Span = styled.span`
    padding: 2px 1.5rem;
    border-radius: 8px;
    font-size: .776rem;
    font-weight: 600;
    &:first-letter{
        text-transform: capitalize;
    }
`;

const ProjectCard = (props) => {
    const { title, description, labels, icon, link, githubRepoLink } = props;
    return (
        <Card className='px-5 py-6 bg-box-light drop-shadow-lg sm:rounded-lg box-dark-mode'>
            <header className='flex justify-between items-center w-full'>
                <Div>
                    <img src={icon} className='w-10' />
                    <h1 className='font-extrabold text-purple-dark text-sm sm:text-lg text-purple-dark-mode'>
                        {title}
                    </h1>
                </Div>
                <Div>
                    <a href={link} target='_blank'>
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='text-lg w-5 cursor-pointer text-text-dark text-dark-theme' />
                    </a>
                    <a href={githubRepoLink} target='_blank'>
                        <FontAwesomeIcon icon={faGithub} className='text-lg w-5 cursor-pointer text-text-dark text-dark-theme' />
                    </a>
                </Div>
            </header>
            <section className='mt-5 mb-8'>
                <p className='text-justify sm:text-left font-medium text-text-dark text-dark-theme'>
                    {description}
                </p>
            </section>
            <footer className='flex w-full gap-2 flex-wrap'>
                {labels.map(lbl => {
                    return <Span className='bg-purple-light text-text-dark align-middle text-dark-theme' key={v4()}>{lbl}</Span>
                })}
            </footer>
        </Card>
    );
};

export default ProjectCard;