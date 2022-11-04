import React, {useEffect, useRef, useState} from 'react'
import styles from '../styles/hero.module.css'
import { IoIosPaperPlane } from 'react-icons/io'
import Image from 'next/image'

export default function Hero() {

  const ref = useRef(null)

  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  const forceX = 0.03;
  const forceY = 0.05;

  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrollY(window.scrollY)
    })
  })

  const rotateHero = (e) => {
    var bounds = ref.current.getBoundingClientRect();
    var x = (e.clientX - bounds.left - (bounds.width / 2)) * forceX;
    var y = (e.clientY - bounds.top - (bounds.height / 2)) * forceY;
    setX(x);
    setY(y);
  }

  return (
    <div ref={ref} className='container' onMouseMoveCapture={rotateHero}>
      <div className={styles.wrapper} style={{transform: `rotateY(${x}deg) rotateX(${-y}deg)`}}>
        <div className={styles.text}>
          <h1>Upptäck den nya<br /> generationen inom<br /> <span>webbutveckling</span></h1>
          <button className='bluebtn pulsating'>Låt oss börja</button>
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
