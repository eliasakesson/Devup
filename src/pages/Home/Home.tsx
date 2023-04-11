import { useEffect, useRef, useState } from 'react';
import { Anchor, AnimatedPage, Button, RouterLink } from '../../components';
import './Home.scss';
import { MdDesignServices, MdCode, MdDeveloperMode, MdChevronRight, MdChevronLeft } from 'react-icons/md';
import { RiDoubleQuotesL } from 'react-icons/ri';
import { IsVisible } from '../../hooks';

const Home = () => {
    return (
        <AnimatedPage>
            <div className="home-screen">
                <Hero />
                <Help />
                <Services />
                <WhyUs />
                {/* <Portfolio />
                <Testimony />
                <Pricing />
                <Contact /> */}
            </div>
        </AnimatedPage>
    );
};

const Hero = () => {
    return (
        <section className='hero'>
            <h1>Upptäck den nya<br /> generationen inom<br /> <span>webbutveckling</span></h1>
            <RouterLink variant='primary' to='/contact' className='pulsating'>Kontakta oss</RouterLink>
        </section>
    );
};

const Help = () => {
    return (
        <section className='help'>
            <h2>Devup hjälper små & medelstora företag med sin digitala närvaro</h2>
            <div className="right">
                <p>Vi erbjuder skräddarsydda digitala lösningar som hjälper företag att förbättra sin digitala närvaro och öka sin synlighet online, vilket kan locka fler kunder och stärka företagens konkurrenskraft i den digitala världen.</p>
                <RouterLink variant='link' to='/about' arrow>Läs mer om oss</RouterLink>
            </div>
        </section>
    );
};

const Services = () => {

    const cardsRef = useRef<HTMLUListElement>(null)
    const cardsVisible = IsVisible(cardsRef);

    const [serviceIndex, setServiceIndex] = useState(0);

    useEffect(() => {
        if (cardsRef.current === null || cardsRef.current.children?.length === 0) return;
        
        cardsRef.current.scrollTo({
            left: cardsRef.current.children[0].clientWidth * serviceIndex,
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
            <ul ref={cardsRef ? cardsRef : null} className={`cards ${cardsVisible ? "visible" : ""}`}>
                <li className='card'>
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
                </li>
                <li className='card' style={{transitionDelay: "0.2s"}}>
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
                </li>
                <li className='card' style={{transitionDelay: "0.4s"}}>
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
                </li>
            </ul>
        </section>
    );
};

const WhyUs = () => {
    return (
        <section className='whyus'>
            <h2>Helt enkelt bättre - du kommer<br /> aldrig vilja gå tillbaka.</h2>
            <p>Betala bara för den tid du behöver och få högkvalitativa resultat<br /> som överträffar dina förväntningar."</p>
            <div className="grid">
                <div className="item">
                    <img src='/Gifs/Clock.gif' alt='Klocka' />
                    <h3>Snabbare</h3>
                    <p>Vi är snabba och effektiva, vilket betyder att du får din hemsida inom några dagar i genomsnitt.</p>
                </div>
                <div className="item">
                    <img src='/Gifs/Consult.gif' alt='Konsultera' />
                    <h3>Teamwork</h3>
                    <p>Dina idéer är viktiga för oss, så vi kommer att arbeta tillsammans med dig för att skapa det bästa resultatet.</p>
                </div>
                <div className="item">
                    <img src='/Gifs/Document.gif' alt='Dokument' />
                    <h3>Innehåll</h3>
                    <p>Våra webbplatser är optimerade för sökmotorer, vilket gör att ditt innehåll kan nå fler kunder.</p>
                </div>
            </div>
            <div className="next-step">
                <h3>Redo att ta nästa steg?</h3>
                <RouterLink to='/contact' variant='white'>Kontakta oss</RouterLink>
            </div>
        </section>
    );
};

const Testimony = () => {
    return (
        <div className="testimony">
            <RiDoubleQuotesL className='icon' />
            <span className='quote'>Design är allt och dom har verkligen<br /> lyckats med det.</span>
            <span className='author'>- Elias</span>
        </div>
    )
}

const Portfolio = () => {
    return (
        <section className='portfolio' id='portfolio'>
            <h2>Portfolio</h2>
            <h3>Se några av våra senaste projekt</h3>
            <ul className="projects">
                <Project image='/Images/Volted.png' />
                <Project image='/Images/Workflow.png' />
            </ul>
            <RouterLink to='/portfolio' variant='link' arrow>Se fler projekt</RouterLink>
        </section>
    );
};

const Project = ({ image } : { image: string }) => {

    const ref = useRef(null);
    const isVisible = IsVisible(ref);

    return (
        <li ref={ref} className={`project ${isVisible ? "visible" : ""}`}>
            <img src={image} alt="" />
        </li>
    );
};

const Pricing = () => {
    return (
        <section className='pricing' id='pricing'>
            <h2>Priser</h2>
            <h3>Våra populäraste paket</h3>
            <ul className="cards">
                <li className='card'>
                    <h4>Standard Webbdesign</h4>
                    <ul>
                        <li>En anpassad hemsida</li>
                        <li>Upp till 5 ytterligare sidor</li>
                        <li>Mer avancerade designelement, t.ex. grafisk design, responsiv design och användarupplevelse</li>
                    </ul>
                    <span>2500-7500</span>
                </li>
                <li className='card'>
                    <h4>Standard Webbutveckling</h4>
                    <ul>
                        <li>Komplex webbapplikation</li>
                        <li>Funktioner som användarautentisering och integration med databaser</li>
                    </ul>
                    <span>7500-15000</span>
                </li>
                <li className='card'>
                    <h4>Standard Apputveckling</h4>
                    <ul>
                        <li>Komplex app</li>
                        <li>Funktioner som användarautentisering och push-notifikationer</li>
                    </ul>
                    <span>7500-15000</span>
                </li>
            </ul>
            <p>Priserna är <span>ungefärliga</span> och varierar beroende på projektet.</p>
            <RouterLink variant='link' to='/pricing' arrow>Se alla paket</RouterLink>
        </section>
    );
}

const Contact = () => {
    return (
        <section className='contact' id='contact'>
            <h2>Kontakta oss</h2>
            <h3>Intresserad?<br /> Skicka ett meddelande</h3>
            <RouterLink variant='primary' to='/contact' className='pulsating'>Kontakta oss</RouterLink>
        </section>
    );
};

export default Home;