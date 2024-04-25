import { useTranslation } from "react-i18next";
import styles from "styles/Home.module.scss";
import SlickSlider from "./SlickSlider";
import FloatBtn from "./FloatBtn";
import { useCheckwViewPort } from "utils/helper";
import MobileSlickSlider from "./MobileSlickSlider";

export default function Section07() {
    const { t } = useTranslation();
    const tablet = useCheckwViewPort(1024 + 1);
    const bigMobile = useCheckwViewPort(768 + 1);

    return(
        <section id="section07" className={styles["static-section"]}>
            <div className={styles["container"]}>
                <div className={styles["element"]}>
                    <summary className={styles.caption}>{t("main.section07.caption")}</summary>
                    <span className={styles.title}>{t("main.section07.title")}</span>
                    <span className={styles.description}>
                        <div>{t("main.section07.description1")}</div>
                    </span>
                    <img src={tablet ? "/assets/home_D-1_Laptop-1ca25de5.png": "/assets/home_D-1_PC-0b362984.png"} alt="background" className={styles["background-img"]}/>
                </div>
                {bigMobile ? <MobileSlickSlider/> : <SlickSlider/>}
            </div>
            <FloatBtn/>
        </section>
    )
}

