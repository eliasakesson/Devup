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
            <p>Vi utvecklar hemsidor åt dig, allt ifrån enkla ensidiga hemsidor till mer komplicerade hemsidor. Vi använder oss av de senaste teknikerna för att skapa en snabb och responsiv hemsida.</p>
            <Link className='link' href='/services#web'>Läs mer<CgArrowLongRight /></Link>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.icon} style={{backgroundColor: "#FDCF7650"}}>
            <FaDesktop color='#FDCF76' size={25} />
          </div>
          <div className={styles.text}>
            <h3>Webb Appar</h3>
            <p>Våra webbappar är skapade med funktion och användarvänlighet i åtanke. De senaste teknikerna används för att skapa en snabb och responsiv webbapp.</p>
            <Link className='link' href='/services#app'>Läs mer<CgArrowLongRight /></Link>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.icon} style={{backgroundColor: "#CA7E8D50"}}>
            <FaApple color='#CA7E8D' size={25} />
          </div>
          <div className={styles.text}>
            <h3>Mobil Appar</h3>
            <p>Vi utvecklar mobilappar som får dig att sticka ut från mängden. De senaste teknikerna används för att skapa en snabb och responsiv mobilapp.</p>
            <Link className='link' href='/services#mobile'>Läs mer<CgArrowLongRight /></Link>
          </div>
        </div>
      </div>
    </section>
  )
}
