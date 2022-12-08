import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MdEmail } from 'react-icons/md'
import styles from '../styles/navbar.module.css'

export default function Footer() {
  return (
    <footer className={styles.footercontainer}>
      <div className={styles.footer}>
        <div className={styles.footerinfo}>
          <Link style={{textDecoration: "none"}} href="/"><div className={styles.logo}><Image src='/logo.png' alt='' width={1000} height={1000} /><h2>DevUp</h2></div></Link>
          <p>Devup är en webbutvecklingsbyrå som fokuserar på att skapa responsiva och användarvänliga hemsidor, som uppmanar till köp.</p>
        </div>
        <div className={styles.links}>
          <h3>Våra Tjänster</h3>
          <Link href='/services#web' className='link'>Webbutveckling</Link>
          <Link href='/services#app' className='link'>Webb Appar</Link>
          <Link href='/services#mobile' className='link'>Mobil Appar</Link>
        </div>
        <div className={styles.contact}>
          <h3>Kontakta oss</h3>
          <div className={styles.email}>
            <div className={styles.icon}>
                <MdEmail size={20} color="#ccc" />
            </div>
            <div>
              <h4>Email:</h4>
              <a href='mailto:devupwebagency@gmail.com' className='link' >devupwebagency@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.separator}></div>
      <p>Copyright © 2022 Devup AB</p>
    </footer>
  )
}
