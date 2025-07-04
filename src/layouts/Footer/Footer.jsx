import './Footer.scss';
import {Link} from "react-router-dom";

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer__container container">
                <div className="footer__main">
                    <div className="footer__brand">
                        <Link to='/'><img src="/logo.svg" alt="Логотип Марка Давыдова" className="footer__logo"/></Link>
                        <p className="footer__description">
                            Марк Давыдов - создатель, креативный директор, инвестор, профессиональный ведущий.
                            Я переоткрою ваш бизнес для вас
                        </p>
                        <div className="footer__copyright">
                            © {currentYear} Марк Давыдов. Все права защищены
                        </div>
                    </div>

                    <div className="footer__nav">
                        <div className="footer__column">
                            <h3 className="footer__title">Меню</h3>
                            <ul className="footer__list">
                                <li className="footer__item"><Link to="/" className="footer__link">Главная</Link></li>
                                <li className="footer__item"><Link to="/news" className="footer__link">Новости</Link>
                                </li>
                                <li className="footer__item"><Link to="/gallery" className="footer__link">Галерея</Link>
                                </li>
                                <li className="footer__item"><Link to="/poem" className="footer__link">Стихия
                                    Феникса</Link></li>
                                <li className="footer__item"><Link to="/contacts"
                                                                   className="footer__link">Контакты</Link></li>
                            </ul>
                        </div>

                        <div className="footer__column">
                            <h3 className="footer__title">Соцсети</h3>
                            <ul className="footer__list">
                                <li className="footer__item">
                                    <a href="https://www.youtube.com/@CrazyRussianMGZ" className="footer__link footer__social-link">
                                        <svg className="footer__social-icon" width="20" height="20" viewBox="0 0 24 24">
                                            <path
                                                d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                                        </svg>
                                        YouTube
                                    </a>
                                </li>
                                <li className="footer__item">
                                    <a href="https://vk.com/marcusgamez" className="footer__link footer__social-link">
                                        <svg className="footer__social-icon" width="20" height="20" viewBox="0 0 24 24">
                                            <path
                                                d="M19.915 13.028c-.388-.49-.277-.708 0-1.146.005-.005 3.208-4.431 3.538-5.932l.002-.001c.164-.547 0-.949-.793-.949h-2.624c-.668 0-.976.345-1.141.731 0 0-1.336 3.198-3.226 5.271-.61.599-.892.791-1.225.791-.164 0-.419-.192-.419-.739v-5.105c0-.656-.187-.949-.74-.949h-4.126c-.419 0-.668.306-.668.591 0 .622.945.765 1.043 2.515v3.797c0 .832-.151.985-.486.985-.892 0-3.057-3.211-4.34-6.886-.259-.713-.512-1.001-1.185-1.001h-2.625c-.749 0-.9.345-.9.731 0 .682.892 4.073 4.148 8.553 2.17 3.058 5.226 4.715 8.006 4.715 1.671 0 1.875-.368 1.875-1.001 0-2.922-.151-3.198.686-3.198.388 0 1.056.192 2.616 1.667 1.783 1.749 2.076 2.532 3.074 2.532h2.624c.748 0 1.127-.368.909-1.094-.499-1.527-3.871-4.668-4.023-4.878z"/>
                                        </svg>
                                        VK
                                    </a>
                                </li>
                                <li className="footer__item">
                                    <a href="https://t.me/MarcusgameZ" className="footer__link footer__social-link">
                                        <svg className="footer__social-icon" width="20" height="20" viewBox="0 0 24 24">
                                            <path
                                                d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796 1.079-3.594 2.966-3.594.873 0 1.662.367 2.22.959.691-.137 1.336-.389 1.92-.733-.229.715-.711 1.315-1.341 1.694.615-.073 1.202-.236 1.747-.464-.408.616-.924 1.156-1.52 1.59z"/>
                                        </svg>
                                        Telegram
                                    </a>
                                </li>
                                <li className="footer__item">
                                    <a href="https://tenchat.ru/marcusgameZ" className="footer__link footer__social-link">
                                        <svg className="footer__social-icon" width="20" height="20" viewBox="0 0 24 24">
                                            <path
                                                d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/>
                                        </svg>
                                        TenChat
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer__bottom">
                    <div className="footer__legal">
                        <Link to="/privacy" className="footer__legal-link">Политика конфиденциальности</Link>
                        <Link to="/terms" className="footer__legal-link">Условия использования</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;