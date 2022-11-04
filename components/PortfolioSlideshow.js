import React from 'react'
import styles from '../styles/portfolio.module.css'
import portfoliodata from '../public/portfolio.json'
import Image from 'next/image'

export default function PortfolioSlideshow() {
  return (
    <div className={styles.container}>
        <div className={styles.centertext}>
            <h4>Vårt Portfolio</h4>
            <h2>Några av våra projekt</h2>
        </div>
        <div className={styles.slideshow}>
            <div className={styles.slides}>
                {portfoliodata.map((item, index) => (
                    <div className={styles.slide} key={index}>
                        <Image src={item.image} alt="" width={1920} height={1080} />
                    </div>
                ))}
            </div>
            <div className={styles.slides}>
                {portfoliodata.map((item, index) => (
                    <div className={styles.slide} key={index}>
                        <Image src={item.image} alt="" width={1920} height={1080} />
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}
