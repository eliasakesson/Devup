import Link from 'next/link'
import React from 'react'
import styles from '../styles/navbar.module.css'

export default function Footer() {
  return (
    <div className={styles.footercontainer}>
      <div className={styles.links}>
        <Link href='/'>Home</Link>
        <Link href='/projects'>Projects</Link>
        <Link href='/services'>Services</Link>
        <Link href='/about'>About Us</Link>
        <Link href='/contact'>Contact</Link>
      </div>
      <div className={styles.footerlogo}>
        <Link style={{textDecoration: "none"}} href="/"><div className={styles.logo}><img src='/logo.png' alt='' /><h2>DevUp</h2></div></Link>
      </div>
    </div>
  )
}
