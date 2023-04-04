import './Footer.scss'
import { Link } from 'react-router-dom'
import { MdEmail } from 'react-icons/md'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="upper">
                <div className="info">
                    <Link style={{textDecoration: "none"}} to="/">
                        <div className="logo">
                            <img src='/logo.png' alt='' />
                            <h2>DevUp</h2>
                        </div>
                    </Link>
                    <p>Devup är en webbutvecklingsbyrå som fokuserar på att skapa responsiva och användarvänliga hemsidor, som uppmanar till köp.</p>
                </div>
                <div className="links">
                    <h3>Våra Tjänster</h3>
                    <Link to='/services#web' className='link'>Webbutveckling</Link>
                    <Link to='/services#app' className='link'>Webb Appar</Link>
                    <Link to='/services#mobile' className='link'>Mobil Appar</Link>
                </div>
                <div className="contacts">
                    <h3>Kontakta oss</h3>
                    <div className="email">
                        <div className="icon">
                            <MdEmail size={20} color="#ccc" />
                        </div>
                        <div>
                        <h4>Email:</h4>
                        <a href='mailto:devupwebagency@gmail.com' className='link' >devupwebagency@gmail.com</a>
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