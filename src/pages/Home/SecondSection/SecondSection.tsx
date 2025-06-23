import styles from "./SecondSection.module.scss";
import { useEffect, useRef, useState } from "react";

type SecondSectionType = {
    arrayWhy: arrWhyWe[]
}
type arrWhyWe = {
    icon: string
    about: string
}

export default function SecondSection({ arrayWhy }: SecondSectionType) {
    const [visible, setVisible] = useState(Array(arrayWhy.length).fill(false));
    const refs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const observer = new window.IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const idx = refs.current.findIndex(ref => ref === entry.target);
                        if (idx !== -1) {
                            setVisible((v) => {
                                const copy = [...v];
                                copy[idx] = true;
                                return copy;
                            });
                            observer.unobserve(entry.target);
                        }
                    }
                });
            },
            { threshold: 0.2 }
        );
        refs.current.forEach((ref) => ref && observer.observe(ref));
        return () => observer.disconnect();
    }, [arrayWhy.length]);

    return (
        <section className={styles.secondSection}>
            <div className={styles.container}>
                {arrayWhy.map((el, idx) => (
                    <div
                        key={el.about}
                        ref={el => { refs.current[idx] = el; }}
                        className={
                            styles.card +
                            " " +
                            (visible[idx]
                                ? idx % 2 === 0
                                    ? styles.slideInLeft
                                    : styles.slideInRight
                                : styles.cardHidden)
                        }
                    >
                        <img src={el.icon} alt="Иконка" />
                        <p>{el.about}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
