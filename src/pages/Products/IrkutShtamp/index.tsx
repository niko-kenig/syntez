import styles from './irkutShtamp.module.scss';
import image1 from '../../../assets/images/slider/shtamp/image1.jpg';
import image2 from '../../../assets/images/slider/shtamp/image2.jpg';


export const IrkutShtamp = () => {
  return (
    <div className={styles.shtampContainer}>
      <div className={styles.contentContainer}>
        <div className={styles.contentWrapper}>
          <h1>Смазочно-охлаждающая жидкость "Иркут-Штамповка"</h1>
          <div className={styles.description}>
            <div className={styles.descriptionBlock}>
              <h2>Описание</h2>
              <p>«Иркут-штамповка» — это современная синтетическая водорастворимая полимерная смазочно-охлаждающая жидкость, предназначенная для холодной штамповки черных и цветных металлов. Применяется для уменьшения трения между материалом и инструментом, снижения напряжения в металле, а также для защиты штампов и изделий от налипания, задиров и царапин.</p>
            </div>

            <div className={styles.imageContainer}>
              <img
                src={image1}
                alt="СОЖ Иркут-Штамповка в упаковке"
                className={styles.imageLeft}
              />
              <h2>Основные характеристики</h2>
              <ul className={styles.features}>
                <li><strong>Внешний вид:</strong> пастообразный непрозрачный гель от белого до жёлтого цвета; при разбавлении водой становится бесцветным и непрозрачным</li>
                <li><strong>Плотность:</strong> 980–1000 кг/м³ (изменяется при замерзании и интенсивном перемешивании)</li>
                <li><strong>pH:</strong> 9–11</li>
                <li><strong>Температура замерзания:</strong> ниже 0°C</li>
                <li><strong>Упаковка:</strong> полиэтиленовые бочки объёмом 50 литров</li>
              </ul>
            </div>

            <div className={styles.imageContainer}>
              <img 
                src={image2} 
                alt="Применение СОЖ Иркут-Штамповка" 
                className={styles.imageRight}
              />
              <h2>Преимущества</h2>
              <ul className={styles.features}>
                <li>Не содержит нефтепродуктов и агрессивных компонентов</li>
                <li>Не оказывает вредного воздействия на организм при соблюдении техники безопасности</li>
                <li>Не выделяет дым и вредные пары при работе</li>
                <li>Не является горючей жидкостью</li>
                <li>Не гидролизуется, не окисляется, не летучий и не гигроскопичен</li>
                <li>Экологически безопасен, допускается слив разбавленных отработанных растворов в канализацию после фильтрации</li>
              </ul>
            </div>

            <div className={styles.descriptionBlock}>
              <h2>Применение</h2>
              <p>Используется для приготовления водных растворов для холодной штамповки. Рекомендуемое разведение: 1:5–1:20 в зависимости от материала и технологического процесса. Раствор готовится с использованием горячей воды (80–100°C) с тщательным перемешиванием до однородной массы.</p>
            </div>

            <div className={styles.summary}>
              <h3>Безопасность и хранение</h3>
              <p>При попадании в глаза промыть водой. При работе использовать спецодежду и обувь согласно стандартам. Хранить в закрытых ёмкостях при обычных условиях, избегать ударов и падений при отрицательных температурах из-за хрупкости полиэтилена. Срок хранения — не менее 24 месяцев со дня изготовления.</p>
              
              <h3>Утилизация</h3>
              <p>Не требует специальных методов утилизации. После фильтрации и 10-кратного разбавления водой допускается слив в канализацию.</p>
              
              <p>СОЖ «Иркут-штамповка» — надежное решение для эффективной и безопасной холодной штамповки металлов.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IrkutShtamp;
