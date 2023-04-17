import { AnimatedPage, RouterLink } from '../../components';
import './About.scss';
import {
    ComposableMap,
    Geographies,
    Geography,
    ZoomableGroup,
    Marker
} from "react-simple-maps"
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const About = () => {

    const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/continents/europe.json";

    return (
        <AnimatedPage>
            <Helmet>
                <title>Om oss - Vi är DevUp</title>
                <meta name="description" content="Vi är DevUp. Vi är ett företag som erbjuder tjänster inom webbdesign, webbutveckling och mobilapplikationer." />
            </Helmet>
            <div className='about-screen'>
                <h1>Om oss</h1>
                <motion.h2 initial={{opacity: 0, translateX: "-100%"}} animate={{opacity: 1, translateX: 0}}>Vi är DevUp</motion.h2>
                <div className="wrapper">
                    <motion.div initial={{opacity: 0, translateX: "-100%"}} animate={{opacity: 1, translateX: 0}} transition={{delay: 0.4}} className="map">
                        <ComposableMap projection="geoMercator">
                            <ZoomableGroup center={[14.5, 57]} zoom={10} maxZoom={15} minZoom={5}>
                                <Geographies className="countries" geography={geoUrl}>
                                    {({ geographies }) =>
                                    geographies.map((geo) => (
                                        <Geography key={geo.rsmKey} geography={geo} />
                                    ))
                                    }
                                </Geographies>
                                <Marker className="marker" coordinates={[14.5, 57]}>
                                    <g
                                        fill="none"
                                        stroke="#FF5533"
                                        strokeWidth="1"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        transform="translate(-4.8, -9.6) scale(0.4)"
                                    >
                                        <circle cx="12" cy="10" r="3" />
                                        <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
                                    </g>
                                    <text
                                        textAnchor="middle"
                                        y={3}
                                    >
                                        Värnamo, Sverige
                                    </text>
                                </Marker>
                            </ZoomableGroup>
                        </ComposableMap>
                    </motion.div>
                    <div className="text">
                        <motion.h3 initial={{opacity: 0, translateY: "100%"}} animate={{opacity: 1, translateY: 0}} transition={{delay: 0.2}}>Om oss</motion.h3>
                        <motion.p initial={{opacity: 0, translateY: "100%"}} animate={{opacity: 1, translateY: 0}} transition={{delay: 0.4}}>Vi är en webbutvecklingsbyrå som ligger i Värnamo, Sverige.</motion.p>
                        <motion.p initial={{opacity: 0, translateY: "100%"}} animate={{opacity: 1, translateY: 0}} transition={{delay: 0.6}}>Vår passion är att skapa hemsidor som är användarvänliga,<br /> och som uppmanar till köp.</motion.p>
                        <motion.div initial={{opacity: 0, translateY: "100%"}} animate={{opacity: 1, translateY: 0}} transition={{delay: 0.8}}>
                            <RouterLink variant='link' to="/contact" arrow>Kontakta Oss</RouterLink>
                        </motion.div>
                    </div>
                </div>
            </div>
        </AnimatedPage>
    );
};

export default About;