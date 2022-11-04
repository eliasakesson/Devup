import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from '../styles/navbar.module.css'

export default function Footer() {
  return (
    <div className={styles.footercontainer}>
      <div className={styles.links}>
        <Link href='/'>Hem</Link>
        <Link href='/services'>Tjänster</Link>
        <Link href='/portfolio'>Portfolio</Link>
        <Link href='/about'>Om oss</Link>
        <Link href='/contact'>Kontakt</Link>
      </div>
      <div className={styles.footerlogo}>
        <Link style={{textDecoration: "none"}} href="/"><div className={styles.logo}><Image src='/logo.png' alt='' width={1000} height={1000} /><h2>DevUp</h2></div></Link>
      </div>
    </div>
  )
}
