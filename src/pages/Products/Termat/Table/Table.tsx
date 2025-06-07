
import styles from './Table.module.scss';

const Table = () => {
    return (
        <div className={styles.tableContainer}>
            <table>
                <thead>
                <tr>
                    <th>Показатель</th>
                    <th>Масло И-20А</th>
                    <th>ТЕРМАТ</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Пожароопасность</td>
                    <td className={styles.oilCell}>Повышенная</td>
                    <td className={styles.termatCell}>Полностью отсутствует</td>
                </tr>
                <tr>
                    <td>Экологическая опасность</td>
                    <td className={styles.oilCell}>Высокая</td>
                    <td className={styles.termatCell}>Очень низкая</td>
                </tr>
                <tr>
                    <td>Санитарная безопасность</td>
                    <td className={styles.oilCell}>Превышение ПДК по содержанию масляного аэрозоля в атмосфере цехов</td>
                    <td className={styles.termatCell}>Концентрация возможных вредных выделений ниже ПДК</td>
                </tr>
                <tr>
                    <td>Наличие систем вентиляции, пожаротушения, аварийного слива</td>
                    <td className={styles.oilCell}>Обязательное</td>
                    <td className={styles.termatCell}>Необходимость в системах отсутствует</td>
                </tr>
                <tr>
                    <td>Закаливаемые материалы</td>
                    <td className={styles.neutralCell}>Стали, чугуны, цветные сплавы</td>
                    <td className={styles.neutralCell}>Стали, чугуны, цветные сплавы</td>
                </tr>
                <tr>
                    <td>Термическое оборудование</td>
                    <td className={styles.oilCell}>Все типы закалочного оборудования</td>
                    <td className={styles.termatCell}>Все типы (в т.ч. тамбурные агрегаты ХТО, ТВЧ-установки), кроме соляных ванн</td>
                </tr>
                <tr>
                    <td>Промывка закаленных деталей</td>
                    <td className={styles.oilCell}>Промывка обязательна</td>
                    <td className={styles.termatCell}>Не требуется</td>
                </tr>
                <tr>
                    <td>Дробеочистка деталей</td>
                    <td className={styles.oilCell}>Требуется всегда</td>
                    <td className={styles.termatCell}>В ряде случаев не требуется</td>
                </tr>
                <tr>
                    <td>Фактическая прокаливаемость</td>
                    <td className={styles.oilCell}>100%</td>
                    <td className={styles.termatCell}>115%</td>
                </tr>
                <tr>
                    <td>Коробление и деформация</td>
                    <td className={styles.oilCell}>100%</td>
                    <td className={styles.termatCell}>85%</td>
                </tr>
                <tr>
                    <td>Прочность</td>
                    <td className={styles.oilCell}>100%</td>
                    <td className={styles.termatCell}>110%</td>
                </tr>
                <tr>
                    <td>Пластичность</td>
                    <td className={styles.oilCell}>100%</td>
                    <td className={styles.termatCell}>120%</td>
                </tr>
                <tr>
                    <td>Ударная вязкость</td>
                    <td className={styles.oilCell}>100%</td>
                    <td className={styles.termatCell}>120%</td>
                </tr>
                <tr>
                    <td>Вынос с деталями из закалочного бака</td>
                    <td className={styles.oilCell}>Значительный</td>
                    <td className={styles.termatCell}>Незначительный</td>
                </tr>
                <tr>
                    <td>Технологический расход (кг) на 1т закаленных деталей</td>
                    <td className={styles.oilCell}>8-24</td>
                    <td className={styles.termatCell}>3</td>
                </tr>
                <tr>
                    <td>Необходимость замены среды в закалочном баке</td>
                    <td className={styles.oilCell}>Периодически полная замена</td>
                    <td className={styles.termatCell}>Не требуется. Производится только корректировка раствора концентратом и водой</td>
                </tr>
                <tr>
                    <td>Утилизация</td>
                    <td className={styles.oilCell}>Платная (в условиях спецпредприятий)</td>
                    <td className={styles.termatCell}>Слив в канализацию (после предварительной подготовки)</td>
                </tr>
            </tbody>
            </table>
        </div>
    );
};

export default Table;