import React, { useState, useEffect } from 'react';


const Skills = () => {

    const [data, setData] = useState([]);

    const getData = () => {
        fetch('data.json')
            .then(res => {
                return res.json();
            })
            .then(
                data => {
                    return setData(data.skills);
                }
            )
    }

    useEffect(() => {
        getData();
    }, [])


    return (
        <div className='max-w-7xl mt-4 sm:px-8'>
            <div className='p-6 w-full drop-shadow-custom bg-box-light sm:rounded-lg space-y-8 box-dark-mode'>
                <header className='text-center md:text-left' >
                    <h3 className='text-2xl font-black text-purple-dark text-purple-dark-mode'>
                        Specializations
                    </h3>
                </header>
                <div className='flex flex-wrap justify-center md:justify-between gap-12'>
                    {data && data.map(skill => (
                        <section key={skill.id} className='w-64 md:flex-auto'>
                            <header className='flex gap-x-2 mb-2'>
                                <img src={skill.icons[0]} alt={skill.name} />
                                {skill.icons[1] && <img src={skill.icons[1]} alt={skill.name} />}
                            </header>
                            <p className='text-md font-medium text-start text-text-dark text-dark-theme'>
                                {skill.description}
                            </p>
                        </section>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;