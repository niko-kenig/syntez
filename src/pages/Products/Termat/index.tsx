import styles from './termat.module.scss';
import Slider from "../../../components/Slider/Slider.tsx";
import image1 from '../../../assets/images/slider/termat/zakalka1.jpeg';
import image2 from '../../../assets/images/slider/termat/zakalka2.jpeg';
import image3 from '../../../assets/images/slider/termat/zakalka3.jpg';
import image4 from '../../../assets/images/slider/termat/znak.png';
import Table from "./Table/Table.tsx";

export const Termat = () => {
    const arrImg = [image1, image2, image3];

    return (
        <div className={styles.taigaContainer}>
            <div className={styles.contentContainer}>
                <h1>Закалочная среда "Термат"</h1>
                <div className={styles.sliderContainer}>
                    <Slider 
                        arrayImg={arrImg}
                        styleContainer={styles.slider}
                        styleBlock={styles.slide}
                        styledIconContainer={styles.slideImage}
                        caruselStyle={styles.carousel}
                    />
                </div>
                <div className={styles.contentWrapper}>
                    <div className={styles.description}>
                        <div className={styles.descriptionBlock}>
                            <h2>Описание</h2>
                            <p>Водополимерная закалочная среда "ТЕРМАТ"® производится в виде концентрата,
                                предназначенного для приготовления рабочего раствора, заменяющего минеральные (нефтяные)
                                масла при термической обработке деталей из сталей, чугунов и сплавов широкой
                                номенклатуры</p>
                        </div>
                        <div className={styles.descriptionBlock}>
                            <h2>Товарный знак</h2>
                            <img src={image4} alt="Товарный знак"/>
                            <a href="https://www1.fips.ru/fips_servl/fips_servlet?DB=RUTM&DocNumber=477139">
                            <span>ссылка на "Федеральная служба по интеллуктальной собственности"</span>
                            </a>
                        </div>
                        <div className={styles.features}>
                            <h2>Таблица сравнения с индустриальным маслом</h2>
                            <Table/>
                        </div>

                        <div className={styles.benefits}>
                            <p className={styles.summary}>
                                Закалочная среда "Термат" — это надежное решение для предприятий, занимающихся
                                термической обработкой металлов,
                                обеспечивающее стабильно высокое качество продукции и снижение производственных
                                издержек.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Termat;
