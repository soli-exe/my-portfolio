import React from 'react';
import styled from 'styled-components';
import { NavLink, Outlet } from 'react-router-dom';

const Nav = styled.nav`
    display: block;
    @media(max-width: 768px){
        display: ${(props) => props.isShown ? 'block' : 'none'};
    }
`;

const Div = styled.div`
    @media (max-width: 768px){
        width: 160px;
        background-color: #fff;
        height: max-width;
        border-radius: 6px;
        padding: .4rem 0;
        border: 1px solid #d0d7de;
    
        &:before {
            content: '';
            position: absolute;
            bottom: 100%;
            left: 5%;
            border: 7px solid;
            border-color: transparent transparent #fff transparent;
        }
    }
`;

const Navbar = (props) => {
    return (
        <>
            <Nav isShown={props.isShown} className='absolute top-11 left-6.5 md:static md:ml-auto md:mr-4 z-10'>
                <Div>
                    <ul className='text-text-dark text-sm flex flex-col md:flex-row font-bold gap-x-4 md:dark:text-text-light'>
                        <NavLink to='/' className={({ isActive }) => { return isActive && 'text-purple-dark dark:md:text-purple-light' }}>
                            <li className='px-3 py-2 cursor-pointer border-b border-border-default md:border-0'>Home</li>
                        </NavLink>
                        <NavLink to='/skills' className={({ isActive }) => { return isActive && 'text-purple-dark dark:md:text-purple-light' }}>
                            <li className='px-3 py-2 cursor-pointer border-b border-border-default md:border-0'>Skills</li>
                        </NavLink>
                        <NavLink to='/projects' className={({ isActive }) => { return isActive && 'text-purple-dark dark:md:text-purple-light' }}>
                            <li className='px-3 py-2 cursor-pointer'>Projects</li>
                        </NavLink>
                    </ul>
                </Div>
            </Nav>
            <Outlet />
        </>
    );
};

export default Navbar;