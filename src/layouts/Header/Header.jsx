import './Header.scss'
import {Link} from "react-router";

function Header() {
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
                <img src="/logo.svg" alt="" className="nav__logo"/>
                <ul className="nav__list">
                    {
                        links.map((i)=> <HeaderItem key={i.id} link={i.link} title={i.title}/>)
                    }
                </ul>
            </nav>
        </header>
    )
}

export default Header

function HeaderItem({title,link}){
return(
    <Link to={`/${link}`}><li className='nav__item'>{title}</li></Link>
)
}