import { RouterLink } from '../../components';
import './About.scss';
import {
    ComposableMap,
    Geographies,
    Geography,
    ZoomableGroup,
    Marker
} from "react-simple-maps"

const About = () => {

    const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/continents/europe.json";

    return (
        <div className='about-screen'>
            <h1>Om oss</h1>
            <h2>Vi är DevUp</h2>
            <div className="wrapper">
                <div className="map">
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
                </div>
                <div className="text">
                    <h3>Om oss</h3>
                    <p>Vi är en webbutvecklingsbyrå som ligger i Värnamo, Sverige.</p>
                    <p>Vår passion är att skapa hemsidor som är användarvänliga,<br /> och som uppmanar till köp.</p>
                    <div className='quote'>
                        <span>“</span>
                        <p>We don't just build websites,<br /> we build websites that SELLS</p>
                        <span>”</span>
                    </div>
                    <RouterLink variant='primary' to="/contact">Kontakta Oss</RouterLink>
                </div>
            </div>
        </div>
    );
};

export default About;