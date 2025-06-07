import styles from './purchase.module.scss';

export const Purchases = () => {
  return (
    <div className={styles.purchasesContainer}>
      <div className={styles.contentContainer}>
        <div className={styles.contentWrapper}>
          <h1>Закупки</h1>
          
          <div className={styles.description}>
            <div className={styles.descriptionBlock}>
              <h2>Сырье</h2>
              <ul className={styles.features}>
                <li>Адипиновая кислота</li>
                <li>Акриловая кислота</li>
                <li>Винилсульфоновая кислота</li>
                <li>Метакриловая кислота</li>
                <li>Малеиновая кислота</li>
                <li>Олеиновая кислота</li>
                <li>Персульфат калия</li>
                <li>Гидроксид натрия</li>
                <li>Соль Мора</li>
                <li>Магниевый купорос</li>
                <li>Цинковый купорос</li>
                <li>Железный купорос</li>
                <li>Кобальтовый купорос</li>
                <li>Марганцевый купорос</li>
                <li>Медный купорос</li>
                <li>Метилметилакрилат</li>
                <li>Этилметилакрилат</li>
                <li>Акрилонитрил</li>
                <li>Этиловый эфир акриловой кислоты</li>
                <li>Этиловый эфир метакриловой кислоты</li>
                <li>Метиловый эфир акриловой кислоты</li>
                <li>Метиловый эфир метакриловой кислоты</li>
                <li>Нафтенат кобальта</li>
                <li>Серебро сульфат</li>
                <li>Тетраэтиламмоний йодистый</li>
                <li>Моноэтаноламин</li>
                <li>Триэтаноламин</li>
                <li>Карбоксиметилцеллюлоза</li>
                <li>Калий салициловокислый</li>
                <li>Натрий додецил сульфат</li>
              </ul>
            </div>

            <div className={styles.descriptionBlock}>
              <h2>Оборудование</h2>
              <ul className={styles.features}>
                <li>Реакторы нержавеющие с обогревающими рубашками от 3,2 м³ до 6,3 м³ (12Х18Н10Т)</li>
                <li>Стеклянные реакторы от 10 до 50 дм³</li>
                <li>Мерники-дозаторы до 200 дм³ (12Х18Н10Т)</li>
                <li>Насосы шестерёнчатые, вакуумные (12Х18Н10Т)</li>
                <li>Весы электронные до 250 кг</li>
                <li>Весы лабораторные</li>
                <li>Лабораторная посуда</li>
                <li>Спецодежда, обувь и перчатки КЩС</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchases;