import styles from './footer.module.scss'
import logo from "../../assets/images/logo/logo.png";
import {NavLink} from "react-router-dom";

const Footer = () => {
    return (
        <footer  className={styles.footer}>
            <div>
                <img src={logo} alt="logotip" className={styles.logoImg}/>
            </div>
            <div>
                <h3>Каталог</h3>
                <hr/>
                <ul>
                    <li><NavLink to={'/products/termat'}>Закалочная среда "Термат"</NavLink></li>
                    <li><NavLink to={'/products/irkut'}>СОЖ "Иркут"</NavLink></li>
                    <li><NavLink to={'/products/irkut-volochenie'}>СОЖ "Иркут Волочение"</NavLink></li>
                    <li><NavLink to={'/products/irkut-shtamp'}>СОЖ "Иркут Штамповка"</NavLink></li>
                    <li><NavLink to={'/products/taiga'}>Смывка смолы "Тайга"</NavLink></li>
                </ul>
            </div>
            <div>
                <h3>Компания</h3>
                <hr/>
                <ul>
                    <li><NavLink to={'/'}>Главная</NavLink></li>
                    <li><NavLink to={'/about'}>О компании</NavLink></li>
                </ul>
            </div>
            <div>
                <h3>Контакты</h3>
                <hr/>
                <ul>
                    <li>
                        Email: <a href="mailto:info@syntez.net">info@syntez.net</a>
                    </li>
                    <li>
                        Телефон: <a href="tel:+79648007745">+7 (964) 800-77-45</a>
                    </li>
                </ul>

            </div>
        </footer>
    );
};

export default Footer;