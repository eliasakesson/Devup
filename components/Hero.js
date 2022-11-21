import React, {useEffect, useRef, useState} from 'react'
import styles from '../styles/hero.module.css'
import { IoIosPaperPlane } from 'react-icons/io'
import Image from 'next/image'

export default function Hero() {

  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrollY(window.scrollY)
    })
  })

  return (
    <div className='container'>
      <div className={styles.wrapper}>
        <div className={styles.text}>
          <h1>Upptäck den nya<br /> generationen inom<br /> <span>webbutveckling</span></h1>
          <a href='#services' className='bluebtn pulsating'>Låt oss börja</a>
        </div>
        <div className={styles.image}>
          <Image src='/images/hero.png' alt='Hero Image' width={1000} height={1000} />
        </div>
      </div>
      <div className={styles.paperplane} style={{transform: `translateX(${scrollY / 8}vw) translateY(${scrollY / 30}vw)`}}>
        <IoIosPaperPlane />
      </div>
    </div>
  )
}
