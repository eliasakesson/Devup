import React from 'react'
import styles from '../styles/about.module.css'
import Head from 'next/head'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import {
    ComposableMap,
    Geographies,
    Geography,
    ZoomableGroup,
    Marker
  } from "react-simple-maps";
import Image from 'next/image'
import Link from 'next/link'

export default function about() {

    const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/continents/europe.json";   

  return (
    <>
        <Head>
            <title>Om oss - DevUp</title>
        </Head>
        <Navbar />
        <div className='container'>
            <h4>Om oss</h4>
            <h1>Vi är DevUp</h1>
            <div className={styles.wrapper}>
                <div className={styles.map}>
                    <ComposableMap projection="geoMercator">
                        <ZoomableGroup center={[14.5, 57]} zoom={10} maxZoom={15} minZoom={5}>
                            <Geographies className={styles.countrys} geography={geoUrl}>
                                {({ geographies }) =>
                                geographies.map((geo) => (
                                    <Geography key={geo.rsmKey} geography={geo} />
                                ))
                                }
                            </Geographies>
                            <Marker className={styles.marker} coordinates={[14.5, 57]}>
                                <g
                                    fill="none"
                                    stroke="#FF5533"
                                    strokeWidth="1"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    transform="translate(-4.8, -9.6) scale(0.4)"
                                >
                                    <circle cx="12" cy="10" r="3" />
                                    <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
                                </g>
                                <text
                                    textAnchor="middle"
                                    y={3}
                                >
                                    Värnamo, Sverige
                                </text>
                            </Marker>
                        </ZoomableGroup>
                    </ComposableMap>
                </div>
                <div className={styles.text}>
                    <h3>Om oss</h3>
                    <p>Vi är en webbutvecklingsbyrå som ligger i Värnamo, Sverige.</p>
                    <p>Vår passion är att skapa hemsidor som är användarvänliga,<br /> och som uppmanar till köp.</p>
                    <div className='quote'>
                        <span>“</span>
                        <p>We don’t just build websites,<br /> we build websites that SELLS</p>
                        <span>”</span>
                    </div>
                    <Link className='bluebtn' href="/contact">Kontakta Oss</Link>
                </div>
            </div>
            </div>
        <Footer />
    </>
  )
}
