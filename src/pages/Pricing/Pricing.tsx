import { Helmet } from 'react-helmet-async'
import { AnimatedPage, RouterLink } from '../../components'
import './Pricing.scss'
import { motion } from 'framer-motion'

const Pricing = () => {
    return (
        <AnimatedPage>
            <Helmet>
                <title>Prissättning - Våra prispaket</title>
                <meta name="description" content="Detta är priserna för våra tjänster. Vi erbjuder ett brett utbud av tjänster som passar alla behov. Vi erbjuder även en gratis konsultation där vi går igenom dina behov och ger dig en uppskattning på pris." />
            </Helmet>
            <div className='pricing-screen'>
                <div className="hero-text">
                    <div className="left">
                        <h1>Prissättning</h1>
                        <motion.h2 initial={{opacity: 0, translateX: "-100%"}} animate={{opacity: 1, translateX: 0}}>Våra prispaket på webbsidor</motion.h2>
                    </div>
                    <div className="right">
                        <motion.p initial={{opacity: 0, translateY: "100%"}} animate={{opacity: 1, translateY: 0}} transition={{delay: 0.2}}>Priserna nedan är för hemsidor med endast det angivna innehållet. Priset går upp vid extra tilägg.</motion.p>
                        <motion.p initial={{opacity: 0, translateY: "100%"}} animate={{opacity: 1, translateY: 0}} transition={{delay: 0.4}}>För en bättre uppskattning på pris, <RouterLink to='/contact' variant='link' arrow>Kontakta Oss</RouterLink></motion.p>
                    </div>
                </div>
                <div className="packages">
                    <motion.div initial={{opacity: 0, translateY: "100%"}} animate={{opacity: 1, translateY: 0}} transition={{delay: 0.2}} className="package">
                        <span className='tag'>Basic</span>
                        <span className='from'>Från</span>
                        <span className='price'>999 kr</span>
                        <ul>
                            <li>3 sidor</li>
                            <li>Responsiv Design</li>
                            <li>Kontaktformulär</li>
                        </ul>
                    </motion.div>
                    <motion.div initial={{opacity: 0, translateY: "100%"}} animate={{opacity: 1, translateY: 0}} transition={{delay: 0.4}} className="package">
                        <span className='tag'>Standard</span>
                        <span className='from'>Från</span>
                        <span className='price'>2499 kr</span>
                        <ul>
                            <li>5 sidor</li>
                            <li>Responsiv Design</li>
                            <li>Kontaktformulär</li>
                            <li>SEO</li>
                            <li>UX</li>
                        </ul>
                    </motion.div>
                    <motion.div initial={{opacity: 0, translateY: "100%"}} animate={{opacity: 1, translateY: 0}} transition={{delay: 0.6}} className="package">
                        <span className='tag'>Premium</span>
                        <span className='from'>Från</span>
                        <span className='price'>4999 kr</span>
                        <ul>
                            <li>8 sidor</li>
                            <li>Responsiv Design</li>
                            <li>Kontaktformulär</li>
                            <li>SEO</li>
                            <li>UX</li>
                            <li>Blogg / Databas</li>
                        </ul>
                    </motion.div>
                </div>
                <div className="lower-text">
                    <h2>Söker du även funktionalitet?</h2>
                    <p>Vi erbjuder även utveckling av webbapplikationer och mobilapplikationer</p>
                </div>
                <div className="packages">
                    <motion.div initial={{opacity: 0, translateY: "100%"}} animate={{opacity: 1, translateY: 0}} transition={{delay: 0.2}} className="package">
                        <span className='tag'>Basic</span>
                        <span className='from'>Från</span>
                        <span className='price'>1999 kr</span>
                        <ul>
                            <li>Enklare design</li>
                            <li>Grundläggande funktioner</li>
                        </ul>
                    </motion.div>
                    <motion.div initial={{opacity: 0, translateY: "100%"}} animate={{opacity: 1, translateY: 0}} transition={{delay: 0.4}} className="package">
                        <span className='tag'>Standard</span>
                        <span className='from'>Från</span>
                        <span className='price'>3999 kr</span>
                        <ul>
                            <li>Responsiv Design</li>
                            <li>Användarautentisering</li>
                            <li>Push-notifikationer</li>
                            <li>Databaser</li>
                        </ul>
                    </motion.div>
                    <motion.div initial={{opacity: 0, translateY: "100%"}} animate={{opacity: 1, translateY: 0}} transition={{delay: 0.6}} className="package">
                        <span className='tag'>Premium</span>
                        <span className='from'>Från</span>
                        <span className='price'>7999 kr</span>
                        <ul>
                            <li>Responsiv Design</li>
                            <li>Användarautentisering</li>
                            <li>Push-notifikationer</li>
                            <li>Databaser</li>
                            <li>Realtidsdataprocessering</li>
                            <li>Tredjeparts-API:er</li>
                            <li>Webbshop</li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </AnimatedPage>
    )
}

export default Pricing