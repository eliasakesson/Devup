import Head from 'next/head'
import styles from '../styles/LandingPage.module.css'
import Navbar from '../components/Navbar'
import Top from '../components/Top'
import Services from '../components/Services'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - DevUp</title>
      </Head>
      <Navbar notFixed />  
      <Top height="80vh">
        <div className={styles.top}>
          <h1>Focus on your business</h1>
          <h2>We'll handle your website</h2>
          <button className={styles.button}>Get Started</button>
        </div>
      </Top>
      <Services />
      <Contact />
      <Footer />
    </>
  )
}
