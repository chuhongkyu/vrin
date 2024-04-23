import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import styles from "styles/Home.module.scss";

export default function Section05() {
    const { t } = useTranslation();

    const contentGroupRef = useRef(null);

    useEffect(() => {
        const contentGroup = contentGroupRef.current;
        if(!contentGroup) return

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(styles.active);
                } else {
                    entry.target.classList.remove(styles.active);
                }
            });
        });

        observer.observe(contentGroup);

        return () => observer.disconnect();
    }, []);

    return(
        <section id="section05" className={styles["static-section"]}>
            <div className={styles["container"]}>
                <div className={styles["element"]}>
                    <summary className={styles.caption}>{t("main.section05.caption")}</summary>
                    <span className={styles.title}>{t("main.section05.title")}</span>
                    <span className={styles.description}>
                        <div>{t("main.section05.description1")}</div>
                        <div>{t("main.section05.description2")}</div>
                    </span>

                    <div className={styles["content-group"]} data-type="scroll" ref={contentGroupRef}>
                        <div className={styles.content}>
                            <div className={styles["number-indicator"]}>
                                <span className={styles.number}>80%</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="57" height="56" viewBox="0 0 57 56" fill="none">
                                <path d="M25.4672 7.0828L29.427 7.0828L29.427 40.7411L44.7713 25.3969L47.5761 28.2017L27.4471 48.3307L7.31817 28.2017L10.123 25.3969L25.4672 40.7411L25.4672 7.0828Z" fill="#3737CC"></path>
                                </svg>
                            </div>
                            <span className={styles.title}>{t("main.section05.content1")}</span>
                            <span className={styles.description}>{t("main.section05.text1")}</span>
                        </div>
                        <div className={styles.content}>
                            <div className={styles["number-indicator"]}>
                                <span className={styles.number}>4H</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="57" height="56" viewBox="0 0 57 56" fill="none"><path d="M25.4672 7.0828L29.427 7.0828L29.427 40.7411L44.7713 25.3969L47.5761 28.2017L27.4471 48.3307L7.31817 28.2017L10.123 25.3969L25.4672 40.7411L25.4672 7.0828Z" fill="#3737CC"></path></svg>
                            </div>
                            <span className={styles.title}>{t("main.section05.content2")}</span>
                            <span className={styles.description}>{t("main.section05.text2")}</span>
                        </div>
                        <div className={styles.content}>
                            <div className={styles["number-indicator"]}>
                                <span className={styles.number}>90%</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="57" height="56" viewBox="0 0 57 56" fill="none"><path d="M25.4672 7.0828L29.427 7.0828L29.427 40.7411L44.7713 25.3969L47.5761 28.2017L27.4471 48.3307L7.31817 28.2017L10.123 25.3969L25.4672 40.7411L25.4672 7.0828Z" fill="#3737CC"></path>
                                </svg>
                            </div>
                            <span className={styles.title}>{t("main.section05.content3")}</span>
                            <span className={styles.description}>{t("main.section05.text3")}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

