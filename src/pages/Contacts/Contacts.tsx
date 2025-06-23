
import styles from './contacts.module.scss';

const Contacts = () => {
    return (
        <div className={styles.contactsContainer}>
            <div className={styles.contentWrapper}>
                <h1>Контакты</h1>
                
                <div className={styles.contactInfo}>
                    <h2>По вопросам консультаций</h2>
                    <div className={styles.contactItem}>
                        <span className={styles.contactLabel}>Телефон:</span>
                        <a href="tel:+73952564497" className={styles.contactLink}>+7 (3952) 56-44-97</a>
                    </div>
                    <div className={styles.contactItem}>
                        <span className={styles.contactLabel}>Мобильный:</span>
                        <a href="tel:+79648007745" className={styles.contactLink}>+7 (964) 800-77-45</a>
                    </div>
                    <div className={styles.contactItem}>
                        <span className={styles.contactLabel}>Email:</span>
                        <a href="mailto:info@syntez.net" className={styles.contactLink}>info@syntez.net, synthesis.zn@yandex.ru</a>
                    </div>
                    <div className={styles.contactItem}>
                        <span className={styles.contactLabel}>Адрес:</span>
                        <span className={styles.contactText}>г. Иркутск, ул. Байкальская, 273а</span>
                    </div>
                </div>

                <div className={styles.mapContainer}>
                    <h2>Как нас найти</h2>
                    <div className={styles.mapWrapper}>
                        <iframe
                            src="https://yandex.ru/map-widget/v1/?ll=104.357798%2C52.256552&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NjE1MjUwNxJG0KDQvtGB0YHQuNGPLCDQmNGA0LrRg9GC0YHQuiwg0JHQsNC50LrQsNC70YzRgdC60LDRjyDRg9C70LjRhtCwLCAyNzPQkCIKDTG30EIVtgZRQg%2C%2C&z=16.83"
                            width="100%"
                            height="450"
                            frameBorder="0"
                            allowFullScreen={true}
                            style={{ border: 0 }}
                            aria-hidden="false"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;