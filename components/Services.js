import React from 'react'
import styles from '../styles/services.module.css'
import { FaDesktop, FaApple } from 'react-icons/fa'
import { MdWeb } from 'react-icons/md'
import { CgArrowLongRight } from 'react-icons/cg'
import Link from 'next/link'

export default function Services() {

  return (
    <section className={styles.container}>
      <div id='services' className={styles.sticky}>
        <h4>Våra Tjänster</h4>
        <h2>Spara tid inom ditt företag genom att<br /> utnyttja våra tjänster</h2>
      </div>
      <div className={styles.cards}>
        <div className={styles.card}>
          <div className={styles.icon} style={{backgroundColor: "#8587fe50"}}>
            <MdWeb color='#8587fe' size={25} />
          </div>
          <div className={styles.text}>
            <h3>Webb Utveckling</h3>
            <p>Vi utvecklar hemsidor åt dig, allt ifrån enkla ensidiga hemsidor till stora flersidiga hemsidor.</p>
            <Link className='link' href='/services#web'>Läs mer<CgArrowLongRight /></Link>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.icon} style={{backgroundColor: "#FDCF7650"}}>
            <FaDesktop color='#FDCF76' size={25} />
          </div>
          <div className={styles.text}>
            <h3>Webb Appar</h3>
            <p>Vi utvecklar webbapplikationer åt dig, allt ifrån enkla applikationer till komplexa applikationer med databaser och inloggning.</p>
            <Link className='link' href='/services#app'>Läs mer<CgArrowLongRight /></Link>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.icon} style={{backgroundColor: "#CA7E8D50"}}>
            <FaApple color='#CA7E8D' size={25} />
          </div>
          <div className={styles.text}>
            <h3>Mobil Appar</h3>
            <p>Vi utvecklar mobilapplikationer åt dig, allt ifrån enkla appar till komplexa appar med databaser och inloggning.</p>
            <Link className='link' href='/services#mobile'>Läs mer<CgArrowLongRight /></Link>
          </div>
        </div>
      </div>
    </section>
  )
}
