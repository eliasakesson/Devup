import React, { useState } from 'react'
import styles from '../styles/contact.module.css'
import { MdEmail } from 'react-icons/md'
import emailjs from '@emailjs/browser';

export default function Contact() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')  

  const [emailSuccess, setEmailSuccess] = useState(false)

  function sendEmail(e) {
    e.preventDefault();

    if (emailSuccess){
      setEmailSuccess(false)
      setName('')
      setEmail('')
      setSubject('')
      setMessage('')
      return
    }

    if (!name || !email || !subject || !message) {
      alert('Please fill in all fields')
      return
    }

    emailjs.sendForm('service_wbib4ob', 'template_234jnup', e.target, 'UIsk6ldu4j8ZHw4gl')
      .then((result) => {
        setEmailSuccess(true)
      }, (error) => {
        console.log('error')
      });
  }

  return (
    <div className={`${styles.container} container`}>
      <div className={styles.text}>
        <h4>Kontakt</h4>
        <h1>Har du en projekt<br /> i åtanke?</h1>
        <div className={styles.contact}>
          <div className={styles.icon}>
              <MdEmail size={20} color="#8587fe" />
          </div>
          <div>
            <h5>Email:</h5>
            <a href='mailto:devupwebagency@gmail.com' className='link' >devupwebagency@gmail.com</a>
          </div>
        </div>
      </div>
      <form className={styles.inputs} onSubmit={sendEmail}>
        <h3>Skicka ett mejl</h3>
        <div style={{display: "flex"}}>
          <div style={{flex: 1}} className='inputbox'>
            <input name='name' type="text" required value={name} onChange={(e) => setName(e.target.value)} disabled={emailSuccess} />
            <label>{!emailSuccess && "Namn"}</label>
          </div>
          <div style={{flex: 1.5}} className='inputbox'>
            <input name='email' type="text" required value={email} onChange={(e) => setEmail(e.target.value)} disabled={emailSuccess} />
            <label>{!emailSuccess && "Mejladdress"}</label>
          </div>
        </div>
        <div className='inputbox'>
          <input name='subject' type="text" required value={subject} onChange={(e) => setSubject(e.target.value)} disabled={emailSuccess} />
          <label>{!emailSuccess && "Ämne"}</label>
        </div>
        <div className='inputbox'>
          <textarea name='message' rows="6" placeholder=' ' value={message} onChange={(e) => setMessage(e.target.value)} disabled={emailSuccess} />
          <label>{!emailSuccess && "Meddelande"}</label>
        </div>
        <div style={{display: "flex", alignItems: "center", marginTop: "2rem", gap: "1rem"}}>
          <input type="submit" style={{marginLeft: "1rem"}} className='bluebtn' value={emailSuccess ? "Skicka ett till" : "Skicka"} />
          {emailSuccess && <p className={styles.sendtext}>Mejl skickat</p>}
        </div>
      </form>
    </div>
  )
}
