import { useEffect, useRef, useState } from 'react';
import { Anchor, AnimatedPage, Button, RouterLink } from '../../components';
import './Home.scss';
import { MdDesignServices, MdCode, MdDeveloperMode, MdChevronRight, MdChevronLeft } from 'react-icons/md';
import { RiDoubleQuotesL } from 'react-icons/ri';
import { VisibleControls } from '../../hooks';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

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
            <div className="right">
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
                    <motion.img animate={midControls} transition={{delay: 0.2}} variants={{
                        visible: {opacity: 1, translateY: 0},
                        hidden: {opacity: 0, translateY: "100%"},
                    }} src='/Gifs/Clock.gif' alt='Klocka' />
                    <motion.h3 animate={midControls} transition={{delay: 0.4}} variants={{
                        visible: {opacity: 1, translateY: 0},
                        hidden: {opacity: 0, translateY: "100%"},
                    }}>Snabbare</motion.h3>
                    <motion.p animate={midControls} transition={{delay: 0.6}} variants={{
                        visible: {opacity: 1, translateY: 0},
                        hidden: {opacity: 0, translateY: "100%"},
                    }}>Vi är snabba och effektiva, vilket betyder att du får din hemsida inom några dagar i genomsnitt.</motion.p>
                </div>
                <div className="item">
                    <motion.img animate={midControls} transition={{delay: 0.4}} variants={{
                        visible: {opacity: 1, translateY: 0},
                        hidden: {opacity: 0, translateY: "100%"},
                    }} src='/Gifs/Consult.gif' alt='Klocka' />
                    <motion.h3 animate={midControls} transition={{delay: 0.6}} variants={{
                        visible: {opacity: 1, translateY: 0},
                        hidden: {opacity: 0, translateY: "100%"},
                    }}>Teamwork</motion.h3>
                    <motion.p animate={midControls} transition={{delay: 0.8}} variants={{
                        visible: {opacity: 1, translateY: 0},
                        hidden: {opacity: 0, translateY: "100%"},
                    }}>Dina idéer är viktiga för oss, så vi kommer att arbeta tillsammans med dig för att skapa det bästa resultatet.</motion.p>
                </div>
                <div className="item">
                    <motion.img animate={midControls} transition={{delay: 0.6}} variants={{
                        visible: {opacity: 1, translateY: 0},
                        hidden: {opacity: 0, translateY: "100%"},
                    }} src='/Gifs/Document.gif' alt='Klocka' />
                    <motion.h3 animate={midControls} transition={{delay: 0.8}} variants={{
                        visible: {opacity: 1, translateY: 0},
                        hidden: {opacity: 0, translateY: "100%"},
                    }}>Innehåll</motion.h3>
                    <motion.p animate={midControls} transition={{delay: 1}} variants={{
                        visible: {opacity: 1, translateY: 0},
                        hidden: {opacity: 0, translateY: "100%"},
                    }}>Våra webbplatser är optimerade för sökmotorer, vilket gör att ditt innehåll kan nå fler kunder.</motion.p>
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
                <Project image='/Images/Volted.png' i={0} />
                <Project image='/Images/Workflow.png' i={1} />
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
            <h2>Priser</h2>
            <h3>Våra populäraste paket</h3>
            <ul ref={ref} className="cards">
                <motion.li className='card' animate={controls} transition={{delay: 0.2}} variants={{
                    visible: {opacity: 1, scaleY: 1},
                    hidden: {opacity: 0, scaleY: 0},
                }}>
                    <h4>Standard Webbdesign</h4>
                    <ul>
                        <li>En anpassad hemsida</li>
                        <li>Upp till 5 ytterligare sidor</li>
                        <li>Mer avancerade designelement, t.ex. grafisk design, responsiv design och användarupplevelse</li>
                    </ul>
                    <span>2500-7500</span>
                </motion.li>
                <motion.li className='card' animate={controls} transition={{delay: 0.4}} variants={{
                    visible: {opacity: 1, scaleY: 1},
                    hidden: {opacity: 0, scaleY: 0},
                }}>
                    <h4>Standard Webbutveckling</h4>
                    <ul>
                        <li>Komplex webbapplikation</li>
                        <li>Funktioner som användarautentisering och integration med databaser</li>
                    </ul>
                    <span>7500-15000</span>
                </motion.li>
                <motion.li className='card' animate={controls} transition={{delay: 0.6}} variants={{
                    visible: {opacity: 1, scaleY: 1},
                    hidden: {opacity: 0, scaleY: 0},
                }}>
                    <h4>Standard Apputveckling</h4>
                    <ul>
                        <li>Komplex app</li>
                        <li>Funktioner som användarautentisering och push-notifikationer</li>
                    </ul>
                    <span>7500-15000</span>
                </motion.li>
            </ul>
            <p>Priserna är <span>ungefärliga</span> och varierar beroende på projektet.</p>
            <RouterLink variant='link' to='/pricing' arrow>Se alla paket</RouterLink>
        </section>
    );
}

const Contact = () => {

    const ref = useRef(null);
    const controls = VisibleControls(ref);

    return (
        <section ref={ref} className='contact' id='contact'>
            <h2>Kontakta oss</h2>
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