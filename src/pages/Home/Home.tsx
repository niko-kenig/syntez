import {useState} from 'react';
import styles from "./home.module.scss";
import Button from "../../components/Button/Button.tsx";
import Card from "../../components/Card/Card.tsx";
import Slider from "../../components/Slider/Slider.tsx";
import {ContactForm} from "../../components/ContactForm/ContactForm";
import icon1 from '../../assets/images/icons/factory/1.ico';
import icon2 from '../../assets/images/icons/factory/2.ico';
import icon3 from '../../assets/images/icons/factory/3.ico';
import icon4 from '../../assets/images/icons/factory/4.ico';
import icon5 from '../../assets/images/icons/factory/5.ico';
import icon6 from '../../assets/images/icons/factory/6.ico';
import icon7 from '../../assets/images/icons/factory/7.ico';
import icon8 from '../../assets/images/icons/factory/8.ico';
import house1 from '../../assets/images/icons/whyWe/house1.png';
import house2 from '../../assets/images/icons/whyWe/house2.png';
import house3 from '../../assets/images/icons/whyWe/house3.png';
import house4 from '../../assets/images/icons/whyWe/house4.png';
import house5 from '../../assets/images/icons/whyWe/house5.png';
import house6 from '../../assets/images/icons/whyWe/house6.png';
import SecondSection from "./SecondSection/SecondSection.tsx";

export const arrayWhy = [{icon: house1, about: 'Продукция \n' + ' высокого качества'},
    {
        icon: house2, about: 'Персональный \n' +
            'подход к каждому клиенту'
    },
    {
        icon: house3, about: 'Скидки и бонусы постоянным \n' +
            'клиентам'
    },
    {icon: house4, about: 'Предоставление отсрочки оплаты'},
    {icon: house5, about: 'Помощь в подборе концентрации продуктов'},
    {icon: house6, about: 'Доставим продукцию по всей России'}
]

export const arrayIcons = [icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8]

const Home = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);

    const openForm = () => setIsFormOpen(true);

    const closeForm = () => setIsFormOpen(false);

    return (
        <>
            <section>
                <div className={styles.imgMain}>
                    <h1>Полимерные материалы</h1>
                    <div className={styles.hero}>
                        <div className={styles.heroDeg}>
                            <span className={styles.slogan}>основа роста</span>
                            <span className={styles.slogan3}>эффективности</span>
                            <span className={styles.slogan2}>производства</span>
                        </div>
                    </div>
                    <div className={styles.container}>
                        <Card className={styles.card}>
                            <span className={styles.headerSpan}>27 лет</span>
                            <span className={styles.line}></span>
                            <span>Производства</span>
                        </Card>
                        <Card className={styles.card}>
                            <span className={styles.headerSpan}>100 +</span>
                            <span className={styles.line}></span>
                            <span>Партнеров</span>
                        </Card>
                    </div>
                    <div>
                        <Button onClick={openForm}>Написать нам</Button>
                    </div>
                    {isFormOpen && (
                        <div style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            zIndex: 1000,
                            width: '100%',
                            height: '100%',
                            overflow: 'hidden'
                        }}>
                            <ContactForm onClose={closeForm}/>
                        </div>
                    )}
                </div>
            </section>
            <section>
                <h3>НАШИ ПАРТНЕРЫ</h3>
                <Slider arrayImg={arrayIcons}
                        styleBlock={styles.iconsWrapper}
                        styleContainer={styles.containerSlider}
                        styledIconContainer={styles.imgContainer}
                        caruselStyle={styles.caruselHome}
                />
            </section>
            <section>
                <h3>ПОЧЕМУ ВЫБИРАЮТ НАС? </h3>
                {/*<hr className={styles.line}/>*/}
                <SecondSection arrayWhy={arrayWhy}/>
            </section>
        </>
    );
};

export default Home;