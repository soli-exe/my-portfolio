import React, { useState } from 'react';
import gmailImg from '../assets/imgs/gmail.png';

const Contact = () => {

    const [emailValue, setEmailValue] = useState("");
    const [firstNameValue, setFirstNameValue] = useState("");
    const [lastNameValue, setLastNameValue] = useState("");
    const [msgValue, setMsgValue] = useState("");


    const formChangeHandler = (e) => {
        switch (e.target.id) {
            case 'email':
                setEmailValue(e.target.value);
                break;
            case 'firstName':
                setFirstNameValue(e.target.value);
                break;
            case 'lastName':
                setLastNameValue(e.target.value);
                break;
            case 'msg':
                setMsgValue(e.target.value);
                break;
            default:
                break;
        }
    }

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
                <form onChange={formChangeHandler} className='flex flex-col space-y-4'>
                    <input id='email' value={emailValue} type='email' className='contact-input' placeholder='Your email...' />
                    <div className='flex space-x-2'>
                        <input id='firstName' value={firstNameValue} type='text' className='contact-input flex-auto' placeholder='First name...' />
                        <input id='lastName' value={lastNameValue} type='text' className='contact-input flex-auto' placeholder='Last name...' />
                    </div>
                    <textarea id='msg' value={msgValue} className='contact-textarea' placeholder='Drop me a message...'></textarea>
                    <button className='w-full rounded-3xl py-3 bg-purple-dark font-semibold text-text-light'>
                        Send it
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;