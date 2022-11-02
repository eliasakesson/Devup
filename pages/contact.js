import React from 'react'
import styles from '../styles/contact.module.css'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import { MdEmail } from 'react-icons/md'

export default function contact() {
  return (
    <>
        <Head>
            <title>Contact - DevUp</title>
        </Head>
        <Navbar />
        <Contact />
        <Footer />
    </>
  )
}
