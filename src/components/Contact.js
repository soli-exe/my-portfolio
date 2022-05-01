import React, { useReducer, useRef } from 'react';
import gmailImg from '../assets/imgs/gmail.png';
import exclamationIcon from '../assets/icons/exclamation.svg';
import { sendForm } from 'emailjs-com';

const apiKey = {
    SERVICE_ID: 'service_et3htf6',
    PUBLIC_KEY: 'rmd4-r0x3uieCDsnd',
    TEMPLATE_ID: 'template_09f2ate'
}

const initialState = {
    'emailValue': '',
    'firstnameValue': '',
    'lastnameValue': '',
    'msgValue': '',
    'hasError': false,
    'errorMsg': 'An error has occured while sending Email, Please try again later!',
    'sendBtnStatus': 'Send it'
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
        case "SENDING": {
            return {
                ...state,
                'sendBtnStatus': action.payload
            }
        }
        case "SUCCESS": {
            return initialState
        }
        case 'FAILED': {
            return {
                ...state,
                'hasError': action.payload,
                'sendBtnStatus': 'Send it'
            }
        }
        default:
            return state;
    }
}

const Contact = () => {

    const [values, dispatch] = useReducer(reducer, initialState);

    const form = useRef();


    const sendEmail = (event) => {
        event.preventDefault();
        dispatch({ type: 'SENDING', payload: 'Sending...' })

        sendForm(apiKey.SERVICE_ID, apiKey.TEMPLATE_ID, form.current, apiKey.PUBLIC_KEY)
            .then(res => {
                void res
                dispatch({ type: 'SUCCESS' })
            }, (error) => {
                void error
                return dispatch({ type: 'FAILED', payload: true })
            });
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
                <form ref={form} onSubmit={sendEmail} className='flex flex-col space-y-4'>
                    <input onChange={(e) => dispatch({ type: 'EMAIL', payload: e.target.value })} id='email' value={values.emailValue} name='user_email' type='email' className='contact-input' placeholder='Your email...' required />
                    <div className='flex space-x-2'>
                        <input onChange={(e) => dispatch({ type: 'FIRSTNAME', payload: e.target.value })} id='firstName' value={values.firstnameValue} name='first_name' type='text' className='contact-input flex-auto' placeholder='First name...' required />
                        <input onChange={(e) => dispatch({ type: 'LASTNAME', payload: e.target.value })} id='lastName' value={values.lastnameValue} name='last_name' type='text' className='contact-input flex-auto' placeholder='Last name...' required />
                    </div>
                    <textarea onChange={(e) => dispatch({ type: 'MSG', payload: e.target.value })} id='msg' value={values.msgValue} name='message' className='contact-textarea' placeholder='Drop me a message...' required></textarea>
                    {values.hasError &&
                        <span className='flex items-center justify-center gap-2 px-3'>
                            <img src={exclamationIcon} alt='exclamation icon' />
                            <p className='text-justify text-sm text-text-dark font-black'>
                                {values.errorMsg}
                            </p>
                        </span>
                    }
                    <button type='submit' className='w-full rounded-3xl py-3 bg-purple-dark font-semibold text-text-light'>
                        {values.sendBtnStatus}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;