import { AnimatedPage } from '../../components';
import './Portfolio.scss';

const Portfolio = () => {
    return (
        <AnimatedPage>
            <section className='portfolio-screen'>
                <h1>Portfolio</h1>
                <h2>Se några av våra senaste projekt</h2>
                <ul className="projects">
                    <li className="project">
                        <div className="image">
                            <img src='/Images/Volted.png' alt='Volted' />
                        </div>
                        <div className="text">
                            <h4>Volted</h4>
                            <p>Mobilapplikation</p>
                        </div>
                    </li>
                </ul>
            </section>
        </AnimatedPage>
    );
};

export default Portfolio;