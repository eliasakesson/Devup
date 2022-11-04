import React, { useState, useRef, useEffect } from 'react'
import styles from '../styles/navbar.module.css'
import Link from 'next/link'
import {useRouter} from 'next/router'
import { useMediaQuery } from 'react-responsive'
import Image from 'next/image'

export default function Navbar(props) {

    const ref = useRef(null)
    const [scrollY, setScrollY] = useState(0)
  
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (ref.current !== null){
                setScrollY(-document.body.getBoundingClientRect().top)
            }
        })
    }
    , [])

  return (
    <header ref={ref} className={`${styles.container} ${(scrollY < 72) ? styles.notfixed : ""}`}>
        <Link style={{textDecoration: "none"}} href="/"><div className={styles.logo}><Image src='/logo.png' alt='' width={1000} height={1000} /><h2>DevUp</h2></div></Link>
        <Nav />
    </header>
  )
}

function Nav(props){

    // {label: "Services", dropdown: [
    //     {label: "Web Development", link: "/web"},
    //     {label: "Mobile App Development", link: "/mobile"},
    //     {label: "Desktop App Development", link: "/desktop"},
    //     {label: "Game Development", link: "/game"}
    // ]},

    const navItemProps = [
        {label: "Hem", link: "/"},
        {label: "Tjänster", link: "/services"},
        {label: "Portfolio", link: "/portfolio"},
        {label: "Om oss", link: "/about"},
        {label: "Kontakt", link: "/contact"}
    ]

    const [burgerOpen, setBurgerOpen] = useState(false)

    const burgerButton = <button className={`${styles.burgerbutton} ${burgerOpen && styles.active}`} onClick={() => setBurgerOpen(!burgerOpen)}><div /><div /><div /></button>

    return (
        <nav style={props.style}>
            <ul className={`${styles.nav} ${burgerOpen && styles.open}`}>
                {navItemProps.map((item, i) => {
                    return <NavItem key={i} item={item} i={i} />
                })}
            </ul>
            {burgerButton}
        </nav>
    )
}

function NavItem(props){

    const router = useRouter()

    const [dropdownActive, setDropdownActive] = useState(false)

    const { link, label, dropdown} = props.item

    const matches = useMediaQuery({query: '(min-width: 768px)'});

    return (
        <li key={props.i} className={`${styles.navitem} ${router.pathname == link && styles.active}`} onPointerLeave={() => matches && setDropdownActive(false)}>
            <Link href={link || ""} onPointerEnter={() => matches && setDropdownActive(true)} onTouchStart={() => setDropdownActive(!dropdownActive)}>
                {label}
                {dropdown && <svg className={styles.arrow} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>}
            </Link>
            {dropdown && dropdownActive && <Dropdown dropdown={dropdown} />}
        </li>
    )
}

function Dropdown(props){
    
    const router = useRouter()

    return (
        <ul className={styles.dropdown}>
            {props.dropdown.map((drop, i) => {
                return <li key={i} className={`${styles.dropitem} ${router.pathname == drop.link && styles.active}`}><Link href={drop.link}>{drop.label}</Link></li>
            })}
        </ul>
    )
}