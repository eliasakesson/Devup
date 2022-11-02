import React from 'react'
import styles from '../styles/projects.module.css'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Head from 'next/head'
import { SiCsharp, SiUnity } from 'react-icons/si'

export default function projects() {
  return (
    <>
        <Head>
            <title>Projects - DevUp</title>
        </Head>
        <Navbar />
        <div className="container">
            <h4>Projects</h4>
            <h1>Explore our newest projects</h1>
            <Projects />
        </div>
        <Footer />
    </>
  )
}

function Projects(){

    const projects = [{
        name: "Whiteout Battle Royale",
        description: "A simple game made in Unity",
        type: "Game Development",
        skills: [<SiUnity color='#333' />, <SiCsharp color='#953dad' />],
        image: "https://whiteout.netlify.app/Images/whiteoutbanner.png",
        weblink: "https://whiteout.netlify.app",
        githublink: "",
    }, {
        name: "Whiteout Battle Royale",
        description: "A simple game made in Unity",
        type: "Game Development",
        skills: [<SiUnity color='#333' />, <SiCsharp color='#953dad' />],
        image: "https://whiteout.netlify.app/Images/whiteoutbanner.png",
        weblink: "https://whiteout.netlify.app",
        githublink: "",
    }]

    return (
        <div className={styles.projects}>
            {projects.map((project, index) => {
                return (
                    <div key={index} className={styles.project}>
                        <div className={styles.text}>
                            <h4>{project.type}</h4>
                            <h2>{project.name}</h2>
                            <div className="skills">
                                {project.skills.map((skill, index) => {
                                    return (
                                        <div key={index}>
                                            {skill}
                                        </div>
                                    )
                                })}
                            </div>
                            <p>{project.description}</p>
                            <div className={styles.links}>
                                {project.weblink && <a className='bluebtn' href={project.weblink} target='_blank'>Learn more</a>}
                                {project.githublink && <a className='bluebtn' href={project.githublink} target='_blank'>Github</a>}
                            </div>
                        </div>
                        <div className={styles.image}>
                            <img src={project.image} alt='' />
                        </div>
                    </div>
                )}
            )}
        </div>
    )
}