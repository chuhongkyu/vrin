import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import styles from "styles/Home.module.scss";

export default function Section01() {
    const { t } = useTranslation();

    return(
        <section id="section1" className={styles.first} style={{backgroundImage : 'url("/assets/home_A-1_PC-24bf28eb.png")'}}>
            <div className={styles.container}>
                <div className="root">
                    <div className={styles.element}>
                        <span className={styles["text-group"]}>{t("main.section01.text1")}</span>
                        <span className={styles.description}>
                            <div>{t("main.section01.text2")}</div>
                            <div>{t("main.section01.text3")}</div>
                        </span>
                        <button className={styles["btn-free"]} type="button">
                            <Link to={"/login"}>{t("main.section01.btn")}</Link>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}