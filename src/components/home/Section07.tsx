import { useTranslation } from "react-i18next";
import styles from "styles/Home.module.scss";
import SlickSlider from "./SlickSlider";

export default function Section07() {
    const { t } = useTranslation();
    
    return(
        <section id="section07" className={styles["static-section"]}>
            <div className={styles["container"]}>
                <div className={styles["element"]}>
                    <summary className={styles.caption}>{t("main.section07.caption")}</summary>
                    <span className={styles.title}>{t("main.section07.title")}</span>
                    <span className={styles.description}>
                        <div>{t("main.section07.description1")}</div>
                        <div>{t("main.section07.description2")}</div>
                    </span>
                    <img src="/assets/home_D-1_PC-0b362984.png" alt="background" className={styles["background-img"]}/>
                </div>
                <SlickSlider/>
            </div>
        </section>
    )
}

