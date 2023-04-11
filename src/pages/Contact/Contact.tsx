import React, { useState, useRef } from 'react';
import './Contact.scss';
import { Anchor, AnimatedPage, Button } from '../../components';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const formRef = useRef<HTMLFormElement>(null);
    const [status, setStatus] = useState({type: '', message: ''});

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        emailjs.sendForm('service_wbib4ob', 'template_234jnup', e.currentTarget, 'UIsk6ldu4j8ZHw4gl')
            .then((result) => {
                console.log(result.text);
                setStatus({type: 'success', message: 'Meddelande skickat'});
                formRef.current?.reset();
            }, (error) => {
                console.log(error.text);
                setStatus({type: 'error', message: 'Något gick fel, försök igen'});
            });
    };

    return (
        <AnimatedPage>
            <section className='contact-screen'>
                <div className='text'>
                    <h1>Kontakta oss</h1>
                    <h2>Har du en projekt<br /> i åtanke?</h2>
                    <div className="email">
                        <div className="icon"></div>
                        <h4>E-post</h4>
                        <Anchor variant='link' href='mailto:elias@devup.se'>elias@devup.se</Anchor>
                    </div>
                </div>
                <form ref={formRef} className='form' onSubmit={handleSubmit}>
                    <h3>Skicka ett mejl</h3>
                    <div className="input-group">
                        <input type="text" name="name" id="name" placeholder=' ' required />
                        <label htmlFor="name">Namn</label>
                    </div>
                    <div className="input-group">
                        <input type="email" name="email" id="email" placeholder=' ' required />
                        <label htmlFor="email">E-post</label>
                    </div>
                    <div className="input-group">
                        <input type="text" name="subject" id="subject" placeholder=' ' required />
                        <label htmlFor="subject">Ämne</label>
                    </div>
                    <div className="input-group">
                        <textarea name="message" id="message" cols={30} rows={5} placeholder=' ' required></textarea>
                        <label htmlFor="message">Meddelande</label>
                    </div>
                    <div className="row">
                        <div className="input-group" style={{flex: 0}}>
                            <Button variant='primary'>Skicka</Button>
                        </div>
                        {status.type && <p className={status.type}>{status.message}</p>}
                    </div>
                </form>
            </section>
        </AnimatedPage>
    );
};

export default Contact;