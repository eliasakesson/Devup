import React, { useRef } from 'react'
import styles from '../styles/LandingPage.module.css'
import { IoGameController } from 'react-icons/io5'
import { FaDesktop, FaApple } from 'react-icons/fa'
import { MdWeb } from 'react-icons/md'
import { FiArrowDownRight } from 'react-icons/fi'
import { useIsVisible } from 'react-is-visible'
import Link from 'next/link'

export default function Services() {

  const ref = useRef(null)
  const isVisible = useIsVisible(ref)

  return (
    <section className={styles.container}>
      <h3>Our Services</h3>
      <h2>Save time managing your business<br /> with our best services</h2>
      <div ref={ref} className={`${styles.cards} ${isVisible ? styles.visible : ""}`}>
        <div className={styles.card}>
          <div className={styles.icon} style={{backgroundColor: "#8587fe50"}}>
            <MdWeb color='#8587fe' size={25} />
          </div>
          <h3>Web<br /> Development</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <Link href='/services#web'><FiArrowDownRight color='#fff' size={20} /></Link>
        </div>
        <div className={styles.card}>
          <div className={styles.icon} style={{backgroundColor: "#FDCF7650"}}>
            <IoGameController color='#FDCF76' size={25} />
          </div>
          <h3>Game<br /> Development</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <Link href='/services#game'><FiArrowDownRight color='#fff' size={20} /></Link>
        </div>
        <div className={styles.card}>
          <div className={styles.icon} style={{backgroundColor: "#CA7E8D50"}}>
          <FaApple color='#CA7E8D' size={25} />
          </div>
          <h3>Mobile App<br /> Development</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <Link href='/services#mobile'><FiArrowDownRight color='#fff' size={20} /></Link>
        </div>
      </div>
    </section>
  )
}
