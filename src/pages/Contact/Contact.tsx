import React, { useState, useRef } from 'react';
import './Contact.scss';
import { Anchor, AnimatedPage, Button } from '../../components';
import emailjs from '@emailjs/browser';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { MdEmail } from 'react-icons/md';

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
            <Helmet>
                <title>Kontakta oss - Vi hjälper dig digitalisera ditt företag</title>
                <meta name="description" content="Kontakta oss så hjälper vi dig digitalisera ditt företag. Vi erbjuder tjänster inom webbutveckling, webbdesign, grafisk design, SEO och mycket mer." />
            </Helmet>
            <section className='contact-screen'>
                <div className='text'>
                    <h1>Kontakta oss</h1>
                    <motion.h2 initial={{opacity: 0, translateX: "-100%"}} animate={{opacity: 1, translateX: 0}}>Har du en projekt<br /> i åtanke?</motion.h2>
                    <motion.div className="email" initial={{opacity: 0, translateY: "100%"}} animate={{opacity: 1, translateY: 0}} transition={{delay: 0.2}}>
                        <div className="icon">
                            <MdEmail />
                        </div>
                        <div className="emailtext">
                            <h4>E-post</h4>
                            <Anchor variant='link' href='mailto:elias@devup.se'>elias@devup.se</Anchor>
                        </div>
                    </motion.div>
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
                        <textarea name="message" id="message" cols={30} rows={10} placeholder=' ' required></textarea>
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