import styles from './taiga.module.scss';
import Slider from "../../../components/Slider/Slider.tsx";
import image1 from '../../../assets/images/slider/taiga/image1.jpeg';
import image2 from '../../../assets/images/slider/taiga/image2.jpeg';
import image3 from '../../../assets/images/slider/taiga/image3.jpeg';

export const Taiga = () => {
    const arrImg = [image1, image2, image3];

    return (
        <div className={styles.taigaContainer}>
            <div className={styles.contentContainer}>
                <h1>Смывка смолы "Тайга"</h1>
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
                            <h2>Применение</h2>
                            <p>Применяется на ленточных и дисковых пилорамах для предотвращения налипания
                            древесной смолы на кромки пильного инструмента, снижения трения и повышения
                            качества распиловки.</p>
                        </div>
                        
                        <div className={styles.features}>
                            <h2>Характеристики</h2>
                            <ul>
                                <li>Поставляется в форме концентрата, разбавляется водой в 200 раз</li>
                                <li>Подается на инструмент капельным способом, имеет минимальный расход</li>
                                <li>Не имеет цвета и запаха, не окрашивает и не напитывает древесину</li>
                                <li>Обладает превосходными смазывающими свойствами</li>
                                <li>Не допускает выгорания и задиров</li>
                                <li>Абсолютно пожаробезопасна</li>
                                <li>Не имеет склонности к пенообразованию</li>
                                <li>Безопасна для кожных покровов и дыхательных путей, экологична</li>
                            </ul>
                        </div>

                        <div className={styles.benefits}>
                            <h2>Преимущества смывки «Тайга»</h2>
                            <ul>
                                <li>Растворяет смолу в процессе работы оборудования и препятствует ее налипанию на пильный инструмент</li>
                                <li>Оставляет древесину чистой и сухой</li>
                                <li>Снижает трение и нагрузки, увеличивает производительность, экономит электроэнергию</li>
                                <li>Утилизируется без затрат – после очистки от опилок и механических примесей сливается в канализацию</li>
                            </ul>
                            <p className={styles.summary}>
                                Смывка «Тайга» позволяет снизить время простоя и обслуживания, повысить
                                производительность, улучшить качество продукции и минимизировать брак, а также
                                сократить расходы на электроэнергию и инструмент.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Taiga;
