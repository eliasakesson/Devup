import { Helmet } from 'react-helmet-async';
import { AnimatedPage } from '../../components';
import './Portfolio.scss';
import { motion } from 'framer-motion';

const Portfolio = () => {
    
    return (
        <AnimatedPage>
            <Helmet>
                <title>Portfolio - Se några av våra senaste projekt</title>
                <meta name="description" content="Se några av våra senaste projekt" />
            </Helmet>
            <section className='portfolio-screen'>
                <h1>Portfolio</h1>
                <motion.h2 initial={{opacity: 0, translateY: "100%"}} animate={{opacity: 1, translateY: 0}}>Se några av våra senaste projekt</motion.h2>
                <ul className="projects">
                    <Project title='Alvesta El' type='Webbsida' image='/Images/Alvesta-el.webp' i={0} inDev />
                    <Project title='Volted' type='Mobilapplikation' image='/Images/Volted.webp' i={1} />
                    <Project title='Workflow' type='Webbapplikation' image='/Images/Workflow.webp' i={2} />
                </ul>
            </section>
        </AnimatedPage>
    );
};

const Project = ({ title, type, image, inDev, i } : { title: string, type: string, image: string, inDev?: boolean, i: number }) => {
    return (
        <li className="project">
            <motion.div className="image" initial={{opacity: 0, translateY: "20%"}} animate={{opacity: 1, translateY: 0}} transition={{delay: 0.2 * (i + 1)}}>
                <img src={image} alt={title} />
            </motion.div>
            <div className="text">
                <motion.h4 initial={{opacity: 0, translateY: "100%"}} animate={{opacity: 1, translateY: 0}} transition={{delay: 0.2 * (i + 2)}}>{title}</motion.h4>
                <motion.p initial={{opacity: 0, translateY: "100%"}} animate={{opacity: 1, translateY: 0}} transition={{delay: 0.2 * (i + 3)}}>{type}</motion.p>
                {inDev && <span className='tag'>Under utveckling</span>}
            </div>
        </li>
    );
};

export default Portfolio;