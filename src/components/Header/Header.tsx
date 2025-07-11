import logo from '../../assets/images/logo/logo.png'
import styles from './header.module.scss'
import {Link, NavLink} from "react-router-dom";


const Header = () => {

    const getNavLinkClass = ({isActive}:{isActive:boolean}) => isActive ? styles.liActive : undefined

    return (
        <header>
            <nav className={styles.navbar}>
                <div className={styles.logo}>
                    <Link to={'/'}>
                        <img src={logo} alt="logotip" className={styles.logoImg}/>
                        <p className={styles.address}><b>АДРЕС:</b>Россия, 664001 г.Иркутск<br/>
                            ул. Байкальcкая 273А</p>
                    </Link>
                </div>
                <ul>
                    <li><NavLink to={'/about'} className={getNavLinkClass}>О компании</NavLink></li>
                    <li><NavLink to={'/products'} className={getNavLinkClass}>Продукция</NavLink></li>
                    <li><NavLink to={'/purchases'} className={getNavLinkClass}>Закупки</NavLink></li>
                    <li><NavLink to={'/contacts'} className={getNavLinkClass}>Контакты</NavLink></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;