import { useEffect, useRef } from 'react';
import styles from './about.module.scss';
import director from '../../assets/images/director.png';

const About = () => {
    const imageRef = useRef<HTMLImageElement>(null);
    const textRefs = useRef<(HTMLParagraphElement | null)[]>([]);

    useEffect(() => {
        if (imageRef.current) {
            imageRef.current.style.opacity = '1';
            imageRef.current.style.transform = 'translateX(0)';
        }

        textRefs.current.forEach((el, index) => {
            if (el) {
                setTimeout(() => {
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0)';
                }, 100 * index);
            }
        });
    }, []);

    const addToRefs = (el: HTMLParagraphElement | null, index: number) => {
        if (el && !textRefs.current.includes(el)) {
            textRefs.current[index] = el;
        }
    };

    return (
        <div className={styles.aboutContent}>
            <div className={styles.contentWrapper}>
                <div className={styles.imageContainer}>
                    <img
                        ref={imageRef}
                        src={director}
                        alt="Директор ООО Синтез"
                        className={styles.directorImage}
                    />
                    <div className={styles.imageCaption}>
                        <strong>Зайцев Николай Владимирович</strong>
                        <span>Генеральный директор ООО «Синтез»</span>
                    </div>
                </div>
                <p ref={el => addToRefs(el, 0)} className={styles.about}>
                    ООО «Синтез» является производителем синтетических водорастворимых полимеров на основе полиакриловой
                    кислоты, расположено в г. Иркутске.
                    Производственный процесс изготовления сложных наукоёмких материалов представляет собой уникальное
                    сочетание большого количества процессов по формированию требуемых физико-химических свойств конечной
                    продукции при помощи современного оборудования, квалифицированных кадров и передовых технологий.
                    Высококвалифицированные рабочие, инженерно-технические работники и учёные обеспечивают производство
                    наукоёмкой современной продукции и постоянно работают над совершенствованием технологии и техники.
                </p>
            </div>


            <p ref={el => addToRefs(el, 2)}>
                Решают задачи по переходу от прерывистых технологических процессов к непрерывным процессам, внедрению
                безотходных технологий, что позволяет наиболее полно использовать сырье, материалы, энергию и
                способствует оздоровлению окружающей среды; особое внимание направлено на применение малооперационных
                технологий.
            </p>

            <p ref={el => addToRefs(el, 3)}>
                Приоритетная линия развития нашего предприятия – внедрение экологически чистых технологий. Реализуя
                программу расширения ассортимента выпускаемой продукции за счет инновационных продуктов, мы решаем
                важные экологические проблемы.
            </p>

            <p ref={el => addToRefs(el, 4)}>
                Для нас нет ограничений в масштабе деятельности, мы дорожим каждым клиентом: наша продукция с равным
                успехом и оперативностью будет поставлена малым, средним и крупным предприятиям в любом необходимом
                объёме.
            </p>

            <p ref={el => addToRefs(el, 5)}>
                ООО "Синтез" стремится внести достойный вклад в модернизацию и развитие российской экономики. В планах
                предприятия – увеличение объёмов производства выпускаемой продукции, дальнейшее совершенствование
                производимых материалов, особое внимание уделяется программе разработки новых материалов для российской
                промышленности.
            </p>
        </div>
    );
};

export default About;