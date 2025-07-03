import './Header.scss'
import {Link} from "react-router";
import { useState } from 'react';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const links = [
        {
            id: 1,
            link:'',
            title:'Главная',
        },
        {
            id: 2,
            link:'news',
            title:'Новости',
        },
        {
            id: 3,
            link:'gallery',
            title:'Галерея',
        },
        {
            id: 4,
            link:'poem',
            title:'Стихия Феникса',
        },
        {
            id: 5,
            link:'contacts',
            title:'Контакты',
        },
    ]

    return (
        <header className='header'>
            <nav className='nav container'>
                <Link to='/'><img src="/logo.svg" alt="" className="nav__logo"/></Link>
                <div
                    className={`hamburger ${isMenuOpen ? 'active' : ''}`}
                    onClick={toggleMenu}
                >
                    <div className="hamburger__line"></div>
                    <div className="hamburger__line"></div>
                    <div className="hamburger__line"></div>
                </div>
                <ul className={`nav__list ${isMenuOpen ? 'active' : ''}`}>
                    {links.map((i) => (
                        <HeaderItem
                            key={i.id}
                            link={i.link}
                            title={i.title}
                            onClick={() => setIsMenuOpen(false)}
                        />
                    ))}
                </ul>
            </nav>
        </header>
    )
}

function HeaderItem({title, link, onClick}){
    return(
        <Link to={`/${link}`} onClick={onClick}>
            <li className='nav__item'>{title}</li>
        </Link>
    )
}

export default Header