import './Portfolio.scss';

const Portfolio = () => {
    return (
        <section className='portfolio-screen'>
            <h1>Portfolio</h1>
            <h2>Se några av våra senaste projekt</h2>
            <ul className="projects">
                <li className="project">
                    <img src='/Images/Volted.png' alt='Volted' />
                    <div className="text">
                        <h4>Volted</h4>
                        <p>Volted is a mobile application that allows users to learn and experience with electricity. It is built with React Native and uses the Expo framework.</p>
                    </div>
                </li>
                <li className="project">
                    <img src='/Images/Chatterly.png' alt='Chatterly' />
                    <div className="text">
                        <h4>Chatterly</h4>
                        <p>Chatterly is a discord clone built with React, Firebase and Electron. It is a desktop messaging app that allows users to create servers, channels, and send messages to one another in real-time.</p>
                    </div>
                </li>
                <li className="project">
                    <img src='/Images/Volted.png' alt='Volted' />
                    <div className="text">
                        <h4>Taskeer</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                    </div>
                </li>
            </ul>
        </section>
    );
};

export default Portfolio;