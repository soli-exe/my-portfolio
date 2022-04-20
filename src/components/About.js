import React from 'react';
import { v4 } from 'uuid';
const aboutBody = [
    `Hello again, My name is Soheil Shahabedini who live on the web.
    My interest in web development has started since 2020 while I’ve been trying to find out how django works (I was so curious).
    Although, I did’nt get what I had expected. So I decided to try front-end stuff which It’s back to 2021.`,
    `Hither-ward I’ve had a set of privileges of learning and keeping myself up-to-date in the front-end field.
    Fortunately, I’ve been successful in it up to now.`,
    `Also, My main focus is to create optimal and fast SPA with React lately.`
]

const About = () => {

    return (
        <div className='flex flex-col p-6 w-full h-max drop-shadow-custom bg-box-light md:rounded-lg'>
            <header className='text-center mb-4 md:text-left' >
                <h3 className='text-2xl font-extrabold text-purple-dark'>
                    About me
                </h3>
            </header>
            <article className='space-y-3 text-justify font-semibold'>
                {aboutBody.map(text => <p key={v4()} className="text-md">{text}</p>)}
            </article>
        </div >
    );
};


export default About;