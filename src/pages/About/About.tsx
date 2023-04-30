import { AnimatedPage, RouterLink } from '../../components';
import './About.scss';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const About = () => {

    return (
        <AnimatedPage>
            <Helmet>
                <title>Om oss - Vi är DevUp</title>
                <meta name="description" content="Vi är DevUp. Vi är ett företag som erbjuder tjänster inom webbdesign, webbutveckling och mobilapplikationer." />
            </Helmet>
            <div className='about-screen'>
                <div className="hero">
                    <h1>Om oss</h1>
                    <motion.h2 initial={{opacity: 0, translateY: "100%"}} animate={{opacity: 1, translateY: 0}}>Hej. Vi är Devup</motion.h2>
                    <motion.p initial={{opacity: 0, translateY: "100%"}} animate={{opacity: 1, translateY: 0}} transition={{delay: 0.2}}>Vi är en solobaserad webbutvecklingsbyrå som strävar efter att erbjuda innovativa lösningar för att hjälpa företag och organisationer att bygga en stark närvaro online. Vår målsättning är att förse våra kunder med högkvalitativt arbete som är anpassat efter deras individuella behov och mål.</motion.p>
                </div>
                <div className="about">
                    <motion.div className="member" initial={{opacity: 0, translateX: "-100%"}} animate={{opacity: 1, translateX: 0}} transition={{delay: 0.8}}>
                        <img src="/Images/me.JPG" alt="Bild på medlem" />
                        <h3>Elias</h3>
                        <p>VD / Utvecklare</p>
                    </motion.div>
                    <div className="text">
                        <motion.h2 initial={{opacity: 0, translateY: "100%"}} animate={{opacity: 1, translateY: 0}} transition={{delay: 0.4}}>Om mig</motion.h2>
                        <motion.p initial={{opacity: 0, translateY: "100%"}} animate={{opacity: 1, translateY: 0}} transition={{delay: 0.6}}>Som en enskild utvecklare och designer, är jag fast besluten att tillhandahålla den bästa möjliga service och att säkerställa att mina kunder är nöjda med mitt arbete. Med min expertis inom webbutveckling och design, är jag säker på att jag kan hjälpa ditt företag att nå sina mål på en stark och framgångsrik online-plattform.</motion.p>
                    </div>
                </div>
                <div className="contact">
                    <h2>Kontakta oss</h2>
                    <p>Vi är alltid öppna för nya projekt och samarbeten. Om du är intresserad av att arbeta med oss, tveka inte att kontakta oss.</p>
                    <RouterLink to='/contact' variant='primary'>Kontakta oss</RouterLink>
                </div>
            </div>
        </AnimatedPage>
    );
};

export default About;