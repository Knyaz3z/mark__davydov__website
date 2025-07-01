import './Footer.scss'
import {Link} from "react-router";

function Footer() {

    return (
        <div className='footer container'>
            <div className="footer__desc">
                <img width='150' height='150' src="/logo.svg" alt=""/>
                <p className='footer__p'>Марк Давыдов - создатель, креативный директор, инвестор, профессиональный ведущий. Я переоткрою ваш
                    бизнес для вас</p>
            </div>
            <div className="footer__menu">
                <p>Меню</p>
                <ul>
                    <Link to={'/'}><li>Главная</li></Link>
                    <Link to={'/news'}><li>Новости</li></Link>
                    <Link to={'/gallery'}><li>Галерея</li></Link>
                    <Link to={'/poem'}><li>Стихия Феникса</li></Link>
                    <Link to={'/contacts'}><li>Контакты</li></Link>
                </ul>
            </div>
            <div className="footer__social">
                <p>Социальные сети</p>
                <ul>
                    <li>Youtube</li>
                    <li>VK</li>
                    <li>TenChat</li>
                    <li>Telegram</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer