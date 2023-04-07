import { useEffect, useRef, useState } from 'react';
import './Navbar.scss';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const ref = useRef(null)
    const [scrollY, setScrollY] = useState(0)
  
    useEffect(() => {
        if (ref.current !== null){
            setScrollY(-document.body.getBoundingClientRect().top)
        }

        window.addEventListener('scroll', () => {
            if (ref.current !== null){
                setScrollY(-document.body.getBoundingClientRect().top)
            }
        })
    }
    , [])

    return (
        <header ref={ref} className={`navbar ${scrollY < 72 && "notfixed"}`}>
            <Link to="/">
                <div className="logo">
                    <img src='/logo.png' alt='' />
                    <h2>DevUp</h2>
                </div>
            </Link>
            <Nav />
        </header>
    )
};

const Nav = () => {
    const navItemProps = [
        {label: "Hem", link: "/"},
        {label: "Prissättning", link: "/pricing"},
        {label: "Portfolio", link: "/portfolio"},
        // {label: "Om oss", link: "/about"},
        {label: "Kontakt", link: "/contact"}
    ]

    const [burgerOpen, setBurgerOpen] = useState(false)

    return (
        <nav>
            <ul className={`nav ${burgerOpen && "open"}`}>
                {navItemProps.map((item, i) => {
                    return <NavItem key={i} {...item} closeBurger={() => setBurgerOpen(false)} />
                })}
            </ul>
            <button title={burgerOpen ? "Close" : "Open"} className={`burgerbutton ${burgerOpen && "active"}`} onClick={() => setBurgerOpen(!burgerOpen)}><div /><div /><div /></button>
        </nav>
    )
}

const NavItem = ({ label, link, closeBurger } : { label: string, link: string, closeBurger: () => void}) => {
    const location = useLocation()

    return (
        <li className={`navitem ${location.pathname == link && "active"}`}>
            <Link to={link} onClick={closeBurger}>
                {label}
            </Link>
        </li>
    )
}

export default Navbar;