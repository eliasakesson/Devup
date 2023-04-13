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
                <h1>Prissättning</h1>
                <motion.h2 initial={{opacity: 0, translateX: "-100%"}} animate={{opacity: 1, translateX: 0}}>Våra prispaket</motion.h2>
                <motion.p initial={{opacity: 0, translateY: "100%"}} animate={{opacity: 1, translateY: 0}} transition={{delay: 0.2}}>Priserna nedan är ungefärliga och varierar beroende på storlek och tid som projektet tar.</motion.p>
                <motion.p initial={{opacity: 0, translateY: "100%"}} animate={{opacity: 1, translateY: 0}} transition={{delay: 0.4}}>För en bättre uppskattning på pris, <RouterLink to='/contact' variant='link' arrow>Kontakta Oss</RouterLink></motion.p>
                <motion.table initial={{opacity: 0, translateY: "20%"}} animate={{opacity: 1, translateY: 0}} transition={{delay: 0.6}}>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Basic</th>
                            <th>Standard</th>
                            <th>Premium</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><h3>Webbdesign</h3></td>
                            <td>
                                <h4>Basic</h4>
                                <ul>
                                    <li>En anpassad hemsida</li>
                                    <li>Upp till 3 ytterligare sidor</li>
                                    <li>Grundläggande designelement, t.ex. val av typsnitt och färgscheman</li>
                                </ul>
                                <span>1500-2500</span>
                            </td>
                            <td>
                                <h4>Standard</h4>
                                <ul>
                                    <li>En anpassad hemsida</li>
                                    <li>Upp till 5 ytterligare sidor</li>
                                    <li>Mer avancerade designelement, t.ex. grafisk design, responsiv design och användarupplevelse</li>
                                </ul>
                                <span>2500-7500</span>
                            </td>
                            <td>
                                <h4>Premium</h4>
                                <ul>
                                    <li>En anpassad hemsida</li>
                                    <li>Upp till 10 sidor</li>
                                    <li>Avancerade designelement, t.ex. animationer och multimedia</li>
                                </ul>
                                <span>7500-15000</span>
                            </td>
                        </tr>
                        <tr>
                            <td><h3>Webbutveckling</h3></td>
                            <td>
                                <h4>Basic</h4>
                                <ul>
                                    <li>Grundläggande webbapplikation</li>
                                    <li>Begränsad funktionalitet och funktioner</li>
                                </ul>
                                <span>2500-7500</span>
                            </td>
                            <td>
                                <h4>Standard</h4>
                                <ul>
                                    <li>Komplex webbapplikation</li>
                                    <li>Funktioner som användarautentisering och integration med databaser</li>
                                </ul>
                                <span>7500-15000</span>
                            </td>
                            <td>
                                <h4>Premium</h4>
                                <ul>
                                    <li>Utveckling av en högst komplex webbapplikation</li>
                                    <li>Avancerade funktioner som realtidsdataprocessering och integration med tredjeparts-API:er</li>
                                </ul>
                                <span>15000-25000</span>
                            </td>
                        </tr>
                        <tr>
                            <td><h3>Apputveckling</h3></td>
                            <td>
                                <h4>Basic</h4>
                                <ul>
                                    <li>Grundläggande app</li>
                                    <li>Begränsad funktionalitet och funktioner</li>
                                </ul>
                                <span>2500-7500</span>
                            </td>
                            <td>
                                <h4>Standard</h4>
                                <ul>
                                    <li>Komplex app</li>
                                    <li>Funktioner som användarautentisering och push-notifikationer</li>
                                </ul>
                                <span>7500-15000</span>
                            </td>
                            <td>
                                <h4>Premium</h4>
                                <ul>
                                    <li>Utveckling av en högst komplex app</li>
                                    <li>Avancerade funktioner som realtidsdataprocessering och integration med tredjeparts-API:er</li>
                                </ul>
                                <span>15000-25000</span>
                            </td>
                        </tr>
                    </tbody>
                </motion.table>
            </div>
        </AnimatedPage>
    )
}

export default Pricing