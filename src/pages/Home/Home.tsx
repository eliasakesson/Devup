import { useEffect, useRef, useState } from 'react';
import { AnimatedPage, Button, Checkmark, Clock, RouterLink, Sliders } from '../../components';
import './Home.scss';
import { MdDesignServices, MdCode, MdDeveloperMode, MdChevronRight, MdChevronLeft } from 'react-icons/md';
import { RiDoubleQuotesL } from 'react-icons/ri';
import { VisibleControls } from '../../hooks';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <AnimatedPage>
            <Helmet>
                <title>DevUp - Skapa en digital närvaro</title>
                <meta name="description" content="Vi hjälper företag att skapa en digital närvaro som lockar fler kunder och ökar företagets konkurrenskraft" />
            </Helmet>
            <div className="home-screen">
                <Hero />
                <Help />
                <Services />
                <WhyUs />
                <Portfolio />
                <Testimony />
                <Pricing />
                <Contact />
            </div>
        </AnimatedPage>
    );
};

const Hero = () => {

    const blob = useRef<HTMLDivElement>(null);

    useEffect(() => {
        document.body.addEventListener('mousemove', (e) => {
            if (blob.current === null) return;
            
            blob.current.animate({
                left: `${e.pageX}px`,
                top: `${Math.min(e.pageY + document.body.scrollTop, screen.height)}px`
            }, { duration: 3000, easing: 'ease-in-out', fill: "forwards"})
        });
    }, [])

    return (
        <section className="hero">
            <div ref={blob} className="mouse-follow"></div>
            <div className="animated-blob"></div>
            <h1>
                <motion.div initial={{translateY: "100%", opacity: 0}} animate={{translateY: 0, opacity: 1}}>Upptäck den nya</motion.div>
                <motion.div initial={{translateY: "100%", opacity: 0}} animate={{translateY: 0, opacity: 1}} transition={{delay: 0.15}}>generationen inom</motion.div>
                <motion.div initial={{translateY: "100%", opacity: 0}} animate={{translateY: 0, opacity: 1}} transition={{delay: .5}}>webbutveckling</motion.div>
            </h1>
            <motion.p initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 1, damping: 1}}>Vi hjälper företag att skapa en digital närvaro som lockar fler kunder och ökar företagets konkurrenskraft.</motion.p>
            <motion.div initial={{translateY: "200%", opacity: 0}} animate={{translateY: 0, opacity: 1}} transition={{delay: 1.5}}>
                <RouterLink variant='primary' to='/contact' className='pulsating'>Kontakta oss</RouterLink>
            </motion.div>
        </section>
    );
};

const Help = () => {

    const ref = useRef<HTMLElement>(null)
    const controls = VisibleControls(ref)

    return (
        <section ref={ref} className='help'>
            <motion.h2 animate={controls} transition={{delay: 0.2}} variants={{
                visible: {opacity: 1, translateX: 0},
                hidden: {opacity: 0, translateX: "-50%"}
            }}>Devup hjälper små & medelstora företag med sin digitala närvaro</motion.h2>
            <div className="bottom">
                <motion.p animate={controls} transition={{delay: 0.5, damping: 1}} variants={{
                    visible: {opacity: 1},
                    hidden: {opacity: 0}
                }}>Vi erbjuder skräddarsydda digitala lösningar som hjälper företag att förbättra sin digitala närvaro och öka sin synlighet online, vilket kan locka fler kunder och stärka företagens konkurrenskraft i den digitala världen.</motion.p>
                <RouterLink variant='link' to='/about' arrow>Läs mer om oss</RouterLink>
            </div>
        </section>
    );
};

const Services = () => {

    const ref = useRef<HTMLUListElement>(null)
    const controls = VisibleControls(ref)

    const [serviceIndex, setServiceIndex] = useState(0);

    useEffect(() => {
        if (ref.current === null || ref.current.children?.length === 0) return;
        
        ref.current.scrollTo({
            left: ref.current.children[0].clientWidth * serviceIndex,
            behavior: 'smooth'
        });
    }, [serviceIndex]);

    return (
        <section className='services' id='services'>
            <div className="text">
                <h2>Våra tjänster</h2>
                <h3>Effektivisera ert företag<br /> genom våra tjänster</h3>
            </div>
            <ul className="options">
                <li className='option'><Button variant='choice' className={serviceIndex === 0 ? "active" : ""} onClick={() => setServiceIndex(0)}>Webbdesign</Button></li>
                <li className='option'><Button variant='choice' className={serviceIndex === 1 ? "active" : ""} onClick={() => setServiceIndex(1)}>Webbutveckling</Button></li>
                <li className='option'><Button variant='choice' className={serviceIndex === 2 ? "active" : ""} onClick={() => setServiceIndex(2)}>Apputveckling</Button></li>
                <li className='buttons'>
                    <button aria-label='Föregående tjänst' disabled={serviceIndex <= 0} onClick={() => setServiceIndex(index => index - 1)}><MdChevronLeft /></button>
                    <button aria-label='Nästa tjänst' disabled={serviceIndex >= 2} onClick={() => setServiceIndex(index => index + 1)}><MdChevronRight /></button>
                </li>
            </ul>
            <ul ref={ref ? ref : null} className="cards">
                <motion.li className='card' animate={controls} transition={{delay: 0.2}} variants={{
                    visible: {opacity: 1, scaleX: 1},
                    hidden: {opacity: 0, scaleX: 0}
                }}>
                    <div className="top">
                        <div className="icon">
                            <MdDesignServices />
                        </div>
                        <h4>Webbdesign</h4>
                    </div>
                    <p>Vi skapar anpassade webbplatser som är intuitiva och lättanvända, vilket leder till en förbättrad användarupplevelse. Våra webbplatser är också responsiva och optimerade för alla enheter och plattformar, vilket säkerställer att dina kunder alltid kan hitta det de söker.</p>
                    <ul>
                        <li>Koncept</li>
                        <li>Layout</li>
                        <li>Design</li>
                        <li>Ikoner</li>
                        <li>Animationer</li>
                        <li>Typsnitt</li>
                        <li>Loggor</li>
                        <li>Hosting</li>
                        <li>Domain</li>
                        <li>SEO</li>
                    </ul>
                </motion.li>
                <motion.li className='card' animate={controls} transition={{delay: 0.4}} variants={{
                    visible: {opacity: 1, scaleX: 1},
                    hidden: {opacity: 0, scaleX: 0}
                }}>
                    <div className="top">
                        <div className="icon">
                            <MdCode />
                        </div>
                        <h4>Webbutveckling</h4>
                    </div>
                    <p>Vi utvecklar kraftfulla webbapplikationer som möter dina unika behov. Vårt team av erfarna utvecklare kan skapa allt från enkla webbplatser till avancerade e-handelsplattformar, med fokus på prestanda och skalbarhet.</p>
                    <ul>
                        <li>Frontend</li>
                        <li>Backend</li>
                        <li>API</li>
                        <li>Databas</li>
                        <li>Inloggning</li>
                        <li>Hosting</li>
                        <li>Domain</li>
                        <li>SEO</li>
                    </ul>
                </motion.li>
                <motion.li className='card' animate={controls} transition={{delay: 0.6}} variants={{
                    visible: {opacity: 1, scaleX: 1},
                    hidden: {opacity: 0, scaleX: 0}
                }}>
                    <div className="top">
                        <div className="icon">
                            <MdDeveloperMode />
                        </div>
                        <h4>Apputveckling</h4>
                    </div>
                    <p>Vi skapar anpassade mobilapplikationer för både Android och iOS-enheter. Vårt team av apputvecklare kan skapa allt från enkla appar till mer komplexa plattformar med realtidsdataprocessering och integration med tredjeparts-API:er.</p>
                    <ul>
                        <li>Frontend</li>
                        <li>Backend</li>
                        <li>API</li>
                        <li>Databas</li>
                        <li>Inloggning</li>
                    </ul>
                </motion.li>
            </ul>
        </section>
    );
};

const WhyUs = () => {

    const topRef = useRef<HTMLElement>(null)
    const topControls = VisibleControls(topRef)

    const midRef = useRef<HTMLDivElement>(null)
    const midControls = VisibleControls(midRef)

    const bottomRef = useRef<HTMLDivElement>(null)
    const bottomControls = VisibleControls(bottomRef)

    return (
        <section ref={topRef} className='whyus'>
            <motion.h2 animate={topControls} transition={{delay: 0.2}} variants={{
                visible: {opacity: 1, translateY: 0},
                hidden: {opacity: 0, translateY: "100%"},
            }}>Helt enkelt bättre - du kommer<br /> aldrig vilja gå tillbaka.</motion.h2>
            <motion.p animate={topControls} transition={{delay: 0.5}} variants={{
                visible: {opacity: 1, translateY: 0},
                hidden: {opacity: 0, translateY: "100%"},
            }}>Betala bara för den tid du behöver och få högkvalitativa resultat<br /> som överträffar dina förväntningar."</motion.p>
            <div ref={midRef} className="grid">
                <div className="item">
                    <motion.div animate={midControls} transition={{delay: 0.2}} variants={{
                        visible: {opacity: 1, translateY: 0},
                        hidden: {opacity: 0, translateY: "100%"},
                    }}>
                        <Clock />
                    </motion.div>
                    <motion.h3 animate={midControls} transition={{delay: 0.4}} variants={{
                        visible: {opacity: 1, translateY: 0},
                        hidden: {opacity: 0, translateY: "100%"},
                    }}>Snabbare</motion.h3>
                    <motion.p animate={midControls} transition={{delay: 0.6}} variants={{
                        visible: {opacity: 1, translateY: 0},
                        hidden: {opacity: 0, translateY: "100%"},
                    }}>Vi arbetar effektivt för att leverera högkvalitativa projekt i tid, på några dagar i genomsnitt.</motion.p>
                </div>
                <div className="item">
                    <motion.div animate={midControls} transition={{delay: 0.2}} variants={{
                        visible: {opacity: 1, translateY: 0},
                        hidden: {opacity: 0, translateY: "100%"},
                    }}>
                        <Checkmark />
                    </motion.div>
                    <motion.h3 animate={midControls} transition={{delay: 0.6}} variants={{
                        visible: {opacity: 1, translateY: 0},
                        hidden: {opacity: 0, translateY: "100%"},
                    }}>Kvalitet</motion.h3>
                    <motion.p animate={midControls} transition={{delay: 0.8}} variants={{
                        visible: {opacity: 1, translateY: 0},
                        hidden: {opacity: 0, translateY: "100%"},
                    }}>Vi upprätthåller höga standarder i vårt arbete genom att använda bästa praxis och kvalitetsverktyg.</motion.p>
                </div>
                <div className="item">
                    <motion.div animate={midControls} transition={{delay: 0.2}} variants={{
                        visible: {opacity: 1, translateY: 0},
                        hidden: {opacity: 0, translateY: "100%"},
                    }}>
                        <Sliders />
                    </motion.div>
                    <motion.h3 animate={midControls} transition={{delay: 0.8}} variants={{
                        visible: {opacity: 1, translateY: 0},
                        hidden: {opacity: 0, translateY: "100%"},
                    }}>Anpassningsbarhet</motion.h3>
                    <motion.p animate={midControls} transition={{delay: 1}} variants={{
                        visible: {opacity: 1, translateY: 0},
                        hidden: {opacity: 0, translateY: "100%"},
                    }}>Vi arbetar med olika teknologier och plattformar för att uppfylla dina specifika behov.</motion.p>
                </div>
            </div>
            <div ref={bottomRef} className="next-step">
                <motion.h3 animate={bottomControls} transition={{delay: 0.8}} variants={{
                    visible: {opacity: 1, translateY: 0},
                    hidden: {opacity: 0, translateY: "100%"},
                }}>Redo att ta nästa steg?</motion.h3>
                <motion.div animate={bottomControls} transition={{delay: 1}} variants={{
                    visible: {opacity: 1, translateY: 0},
                    hidden: {opacity: 0, translateY: "100%"},
                }}>
                    <RouterLink to='/contact' variant='white'>Kontakta oss</RouterLink>
                </motion.div>
            </div>
        </section>
    );
};

const Testimony = () => {

    const ref = useRef(null);
    const controls = VisibleControls(ref);

    return (
        <section ref={ref} className="testimony">
            <motion.div animate={controls} transition={{delay: 0.2}} variants={{
                visible: {opacity: 1, translateY: 0},
                hidden: {opacity: 0, translateY: "100%"},
            }}>
                <RiDoubleQuotesL className='icon' />
            </motion.div>
            <motion.span animate={controls} transition={{delay: 0.4}} variants={{
                visible: {opacity: 1, translateY: 0},
                hidden: {opacity: 0, translateY: "100%"},
            }} className='quote'>Design är allt och dom har verkligen<br /> lyckats med det.</motion.span>
            <motion.span animate={controls} transition={{delay: 0.6}} variants={{
                visible: {opacity: 1, translateY: 0},
                hidden: {opacity: 0, translateY: "100%"},
            }} className='author'>- Elias</motion.span>
        </section>
    )
}

const Portfolio = () => {
    return (
        <section className='portfolio' id='portfolio'>
            <h2>Portfolio</h2>
            <h3>Se några av våra senaste projekt</h3>
            <ul className="projects">
                <Project image='/Images/Volted.webp' i={0} />
                <Project image='/Images/Workflow.webp' i={1} />
            </ul>
            <RouterLink to='/portfolio' variant='link' arrow>Se fler projekt</RouterLink>
        </section>
    );
};

const Project = ({ image, i } : { image: string, i: number }) => {

    const ref = useRef(null);
    const controls = VisibleControls(ref);

    return (
        <motion.li ref={ref} className="project" animate={controls} transition={{delay: 0.2 * (i + 1)}} variants={{
            visible: {opacity: 1, translateY: 0},
            hidden: {opacity: 0, translateY: "20%"},
        }}>
            <img src={image} alt="" />
        </motion.li>
    );
};

const Pricing = () => {

    const ref = useRef(null);
    const controls = VisibleControls(ref);

    return (
        <section className='pricing' id='pricing'>
            <div className="left">
                <h2>Priser</h2>
                <motion.h3 animate={controls} transition={{delay: 0.2}} variants={{
                    visible: {opacity: 1, translateX: 0},
                    hidden: {opacity: 0, translateX: "-100%"},
                }}>Få en responsiv hemsida för endast 999kr</motion.h3>
                <RouterLink variant='link' to='/pricing' arrow>Se alla paket</RouterLink>
            </div>
            <div className="right">
                <Link to="/pricing">
                    <motion.div className='package' ref={ref} animate={controls} transition={{delay: 0.4}} variants={{
                        visible: {opacity: 1, translateY: 0},
                        hidden: {opacity: 0, translateY: "100%"},
                    }}>
                        <span className='tag'>Basic</span>
                        <span className='from'>Från</span>
                        <span className='price'>999 kr</span>
                        <ul>
                            <li>3 sidor</li>
                            <li>Responsiv Design</li>
                            <li>Kontaktformulär</li>
                        </ul>
                    </motion.div>
                </Link>
            </div>
        </section>
    );
}

const Contact = () => {

    const ref = useRef(null);
    const controls = VisibleControls(ref);

    return (
        <section ref={ref} className='contact' id='contact'>
            <h2>Kontakt</h2>
            <h3>
                <motion.div animate={controls} transition={{delay: 0.2}} variants={{
                    visible: {opacity: 1, translateY: 0},
                    hidden: {opacity: 0, translateY: "200%"},
                }}>Intresserad?</motion.div>
                <motion.div animate={controls} transition={{delay: 0.4}} variants={{
                    visible: {opacity: 1, translateY: 0},
                    hidden: {opacity: 0, translateY: "200%"},
                }}>Skicka ett meddelande</motion.div>
            </h3>
            <motion.div animate={controls} transition={{delay: 1}} variants={{
                visible: {opacity: 1, translateY: 0},
                hidden: {opacity: 0, translateY: "200%"},
            }}>
                <RouterLink variant='primary' to='/contact' className='pulsating'>Kontakta oss</RouterLink>
            </motion.div>
        </section>
    );
};

export default Home;