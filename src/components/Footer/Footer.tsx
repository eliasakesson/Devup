import './Footer.scss'
import { Link } from 'react-router-dom'
import { MdEmail } from 'react-icons/md'
import { Anchor, RouterLink } from '../Buttons'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="upper">
                <div className="info">
                    <Link style={{textDecoration: "none"}} to="/">
                        <div className="logo">
                            <img src='/Images/Logo.webp' alt='' />
                            <h2>DevUp</h2>
                        </div>
                    </Link>
                    <p>Devup är en dedikerad till att leverera skräddarsydda och högkvalitativa webblösningar som möter dina specifika affärsbehov. 
                        Vårt team bygger responsiva, sökmotoroptimerade och användarvänliga webbplatser som attraherar besökare och genererar affärsmöjligheter.
                    </p>
                </div>
                <div className="links">
                    <h3>Navigation</h3>
                    <RouterLink to='/portfolio' variant='link'>Portfolio</RouterLink>
                    <RouterLink to='/prices' variant='link'>Prissättning</RouterLink>
                    <RouterLink to='/about' variant='link'>Om oss</RouterLink>
                    <RouterLink to='/contact' variant='link'>Kontakt</RouterLink>
                </div>
                <div className="contacts">
                    <h3>Kontakta oss</h3>
                    <div className="email">
                        <div className="icon">
                            <MdEmail size={20} color="#ccc" />
                        </div>
                        <div>
                        <h4>Email:</h4>
                        <Anchor href='mailto:elias@devup.se' variant='link' >elias@devup.se</Anchor>
                        </div>
                    </div>
                </div>
            </div>
            <div className="separator"></div>
            <p   className='copyright'>Copyright © 2022 Devup AB</p>
        </footer>
    )
}

export default Footer