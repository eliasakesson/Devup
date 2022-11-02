import React from 'react'
import Head from 'next/head'
import styles from '../styles/services.module.css'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import { IoGameController } from 'react-icons/io5'
import { FaDesktop, FaApple, FaHtml5, FaCss3Alt } from 'react-icons/fa'
import { MdWeb } from 'react-icons/md'
import { SiJavascript, SiReact, SiGithub, SiFirebase, SiCsharp, SiUnity } from 'react-icons/si'
import Link from 'next/link'

export default function services() {
  return (
    <>
        <Head>
            <title>Services - DevUp</title>
        </Head>
        <Navbar />
        <div className="container">
            <h1>Services</h1>
            <div className={styles.cards}>
                <a href="#web" className={styles.card}>
                    <div className={styles.icon} style={{backgroundColor: "#8587fe50"}}>
                        <MdWeb color='#8587fe' size={25} />
                    </div>
                    <h3>Web<br /> Development</h3>
                </a>
                <a href="#game" className={styles.card}>
                    <div className={styles.icon} style={{backgroundColor: "#FDCF7650"}}>
                        <IoGameController color='#FDCF76' size={25} />
                    </div>
                    <h3>Game<br /> Development</h3>
                </a>
                <a href="#mobile" className={styles.card}>
                    <div className={styles.icon} style={{backgroundColor: "#CA7E8D50"}}>
                        <FaApple color='#CA7E8D' size={25} />
                    </div>
                    <h3>Mobile App<br /> Development</h3>
                </a>
            </div>
            <Services />
        </div>
        <Footer />
    </>
  )
}

function Services(){

    const services = [{
        name: 'Web Development',
        id: 'web',
        icon: <MdWeb color='#8587fe' />,
        iconbg: '#8587fe50',
        description: 'We develop websites for you, from simple landing pages to complex web applications.',
        skills: [
            <FaHtml5 color='#e34c26' />,
            <FaCss3Alt color='#264de4' />,
            <SiJavascript color='#f0db4f' />,
            <SiReact color='#7cc5d9' />,
            <SiGithub color='#333' />,
            <SiFirebase color='#ffca28' />
        ],
    }, {
        name: 'Game Development',
        id: 'game',
        icon: <IoGameController color='#FDCF76' />,
        iconbg: '#FDCF7650',
        description: 'We develop games for you, from simple 2D games to complex 3D games.',
        skills: [
            <SiUnity color='#333' />,
            <SiCsharp color='#953dad' />
        ],
    }, {
        name: 'Mobile App Development',
        id: 'mobile',
        icon: <FaApple color='#CA7E8D' />,
        iconbg: '#CA7E8D50',
        description: 'We develop mobile applications for you, from simple applications to complex applications.',
        skills: [
            <SiReact color='#7cc5d9' />
        ],
    }]

    return (
        <>
            {services.map((service, index) => (
                <section key={index} id={service.id} className={styles.service}>
                    <aside className={styles.card}>
                        <div className={`${styles.icon} icon`} style={{backgroundColor: service.iconbg}}>
                            {service.icon}
                        </div>
                        <h3>{service.name}</h3>
                    </aside>
                    <div className={styles.about}>
                        <h2>{service.name}</h2>
                        <div className="skills">
                            {service.skills.map((skill, index) => (
                                <div className={styles.skill} key={index}>
                                    {skill}
                                </div>
                            ))}
                        </div>
                        <p>{service.description}</p>
                        <div className={styles.link}>
                            <Link className='bluebtn' href="/contact">Contact Us</Link>
                        </div>
                    </div>
                </section>
            ))}
        </>
    )
}