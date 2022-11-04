import Head from 'next/head'
import styles from '../styles/LandingPage.module.css'
import Navbar from '../components/Navbar'
import Top from '../components/Top'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import SlidingText from '../components/SlidingText'
import PortfolioSlideshow from '../components/PortfolioSlideshow'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - DevUp</title>
      </Head>
      <Navbar notFixed />  
      <Hero />
      <Services />
      <SlidingText text="Fast. Functional. Responsive" speed={-0.1} offset={1800} />
      <PortfolioSlideshow />
      <Contact />
      <Footer />
    </>
  )
}
