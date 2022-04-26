import React, { useReducer } from 'react';
import gmailImg from '../assets/imgs/gmail.png';

const initialState = {
    'emailValue': '',
    'firstnameValue': '',
    'lastnameValue': '',
    'msgValue': ''
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'EMAIL': {
            return {
                ...state,
                'emailValue': action.payload
            };
        }
        case 'FIRSTNAME': {
            return {
                ...state,
                'firstnameValue': action.payload
            };
        }
        case 'LASTNAME': {
            return {
                ...state,
                'lastnameValue': action.payload
            };
        }
        case 'MSG': {
            return {
                ...state,
                'msgValue': action.payload
            };
        }
        default:
            return state;
    }
}

const Contact = () => {

    const [values, dispatch] = useReducer(reducer, initialState);

    return (
        <div className='flex p-6 items-center justify-between w-full h-max drop-shadow-custom bg-box-light md:rounded-lg'>
            <section className='hidden md:block -ml-6 lg:w-1/2'>
                <img className='max-w-sm md:w-64 lg:w-full' src={gmailImg} alt='gmail icon' />
            </section>
            <div className='flex flex-col w-full md:ml-6 lg:w-1/2'>
                <header className='text-center mb-4 md:text-left' >
                    <h3 className='text-2xl font-extrabold text-purple-dark'>
                        Let's get in touch
                    </h3>
                </header>
                <form className='flex flex-col space-y-4'>
                    <input onChange={(e) => dispatch({ type: 'EMAIL', payload: e.target.value })} id='email' value={values.emailValue} type='email' className='contact-input' placeholder='Your email...' />
                    <div className='flex space-x-2'>
                        <input onChange={(e) => dispatch({ type: 'FIRSTNAME', payload: e.target.value })} id='firstName' value={values.firstnameValue} type='text' className='contact-input flex-auto' placeholder='First name...' />
                        <input onChange={(e) => dispatch({ type: 'LASTNAME', payload: e.target.value })} id='lastName' value={values.lastnameValue} type='text' className='contact-input flex-auto' placeholder='Last name...' />
                    </div>
                    <textarea onChange={(e) => dispatch({ type: 'MSG', payload: e.target.value })} id='msg' value={values.msgValue} className='contact-textarea' placeholder='Drop me a message...'></textarea>
                    <button className='w-full rounded-3xl py-3 bg-purple-dark font-semibold text-text-light'>
                        Send it
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;