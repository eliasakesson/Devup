import React from 'react'
import Head from 'next/head'
import styles from '../styles/services.module.css'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import { IoGameController } from 'react-icons/io5'
import { FaDesktop, FaApple, FaHtml5, FaCss3Alt } from 'react-icons/fa'
import { MdWeb } from 'react-icons/md'
import { SiJavascript, SiReact, SiGithub, SiFirebase, SiCsharp, SiUnity, SiExpo } from 'react-icons/si'
import Link from 'next/link'
import Image from 'next/image'
import { CgArrowLongRight } from 'react-icons/cg'

export default function services() {
  return (
    <>
        <Head>
            <title>Tjänster - DevUp</title>
        </Head>
        <Navbar />
        <div className="container">
            <div className='title'>
                <h4>Tjänster</h4>
                <h1>Våra Tjänster</h1>
            </div>
            <Services />
        </div>
        <Footer />
    </>
  )
}

function Services(){

    const services = [{
        name: 'Webbutveckling',
        id: 'web',
        image: "/images/webdev.png",
        description: 'Vi utvecklar hemsidor åt dig, allt ifrån enkla ensidiga hemsidor till stora flersidiga hemsidor.',
        skills: [
            <FaHtml5 key={1} color='#e34c26' />,
            <FaCss3Alt key={2} color='#264de4' />,
            <SiJavascript key={3} color='#f0db4f' />,
            <SiReact key={4} color='#7cc5d9' />,
            <SiGithub key={5} color='#333' />
        ],
    }, {
        name: 'Webb Appar',
        id: 'app',
        image: "/images/webapps.png",
        description: 'Vi utvecklar webbapplikationer åt dig, allt ifrån enkla applikationer till komplexa applikationer med databaser och inloggning.',
        skills: [
            <SiJavascript key={3} color='#f0db4f' />,
            <SiReact key={4} color='#7cc5d9' />,
            <SiGithub key={3} color='#333' />,
            <SiFirebase key={4} color='#ffca28' />
        ],
    }, {
        name: 'Mobil Appar',
        id: 'mobile',
        image: "/images/mobileapps.png",
        description: 'Vi utvecklar mobilapplikationer åt dig, allt ifrån enkla appar till komplexa appar med databaser och inloggning.',
        skills: [
            <SiReact key={1} color='#7cc5d9' />,
            <SiExpo key={2} color='#1173b6' />,
            <SiFirebase key={3} color='#ffca28' />
        ],
    }]

    return (
        <>
            {services.map((service, index) => (
                <section key={index} id={service.id} className={styles.service}>
                    <div className={styles.text}>
                        <h3>{service.name}</h3>
                        <div className="skills">
                            {service.skills.map((skill, index) => (
                                <div className={styles.skill} key={index}>
                                    {skill}
                                </div>
                            ))}
                        </div>
                        <p>{service.description}</p>
                        <Link className='link' href="/contact">Mer Info<CgArrowLongRight /></Link>
                    </div>
                    <div className={styles.image}>
                        <Image src={service.image} alt="" width={1280} height={720} />
                    </div>
                </section>
            ))}
        </>
    )
}