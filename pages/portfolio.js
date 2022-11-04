import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styles from '../styles/portfolio.module.css'
import portfoliodata from '../public/portfolio.json'
import { CgArrowLongRight } from 'react-icons/cg'
import Image from 'next/image'
import Head from 'next/head'

export default function portfolio() {

  const [category, setCategory] = useState("All")

  let buttonLeft = category === "All" ? 0 : category === "Website" ? 25 : category === "WebApp" ? 50 : 75

  let filteredData = portfoliodata.filter((item) => {
    if (category === "All") {
      return item
    } else if (item.category === category) {
      return item
    }
  })

  return (
    <>
      <Head>
        <title>Portfolio - DevUp</title>
      </Head>
      <Navbar />
      <div className='container'>
        <div className={styles.center}>
          <div className='title'>
            <h4>Portfolio</h4>
            <h1>Vårt Portfolio</h1>
          </div>
          <p>För att se vad vi kan göra, ta en titt på våra projekt.</p>
          <ul className={styles.tabs}>
            <span style={{left: `${buttonLeft}%`}} />
            <li className={category === "All" && styles.active}><button onClick={() => setCategory("All")}>Alla</button></li>
            <li className={category === "Website" && styles.active}><button onClick={() => setCategory("Website")}>Webbsidor</button></li>
            <li className={category === "WebApp" && styles.active}><button onClick={() => setCategory("WebApp")}>Webb Appar</button></li>
            <li className={category === "MobileApp" && styles.active}><button onClick={() => setCategory("MobileApp")}>Mobil Appar</button></li>
          </ul>
        </div>
        <div className={styles.portfolio}>
          {filteredData.length > 0 ? filteredData.map((item, index) => {
            return (
              <div className={styles.portfolioitem} key={index}>
                <Image src={item.image} alt={item.title} width={1920} height={1080} />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <a href={item.link} className="link" target='_blank' rel='noreferrer'>Besök <CgArrowLongRight /></a>
              </div>
          )}) : <p>Inga projekt än.</p>}
        </div>
      </div>
      <Footer />
    </>
  )
}