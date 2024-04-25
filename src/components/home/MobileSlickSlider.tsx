
import Slider from "react-slick";
import styles from "styles/Home.module.scss";
import { useTranslation } from "react-i18next";

export default function MobileSlickSlider() {
    const { t } = useTranslation();
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false
    };

    return(
        <div className={styles["content-slider"]}>
            <Slider {...settings}>
                <a href="https://www.instagram.com/p/Ckze-2mgevQ" rel="noreferrer" target="_blank" aria-label="Go to Instagram">
                    <div
                        className={styles.card}
                        style={{backgroundImage: "url(/assets/carousel_thumbnail_1_tablet-3d999a05.png)"}}>
                        <img alt="showroom" src="/assets/carousel_arrow-0a86d1b9.svg" className={styles.icon}/>
                        <span className={styles.text}>{t("main.section07.content1")}</span>
                        <div className={styles.dim}/>
                    </div>
                </a>
                <a href="https://www.youtube.com/watch?v=FxhqKo1b5hA&feature=youtu.be" rel="noreferrer" target="_blank" aria-label="Go to Youtube">
                    <div
                        className={styles.card}
                        style={{backgroundImage: "url(/assets/carousel_thumbnail_2_tablet-862ac944.png)"}}>
                        <img alt="exhibition" src="/assets/carousel_arrow-0a86d1b9.svg" className={styles.icon}/>
                        <span className={styles.text}>{t("main.section07.content2")}</span>
                        <div className={styles.dim}/>
                    </div>
                </a>
                <a href="https://www.instagram.com/p/Ciw4xWSAhWU" rel="noreferrer" target="_blank" aria-label="Go to Instagram">
                    <div
                        className={styles.card}
                        style={{backgroundImage: "url(/assets/carousel_thumbnail_3_tablet-c70ea0d9.png)"}}>
                        <img alt="product" src="/assets/carousel_arrow-0a86d1b9.svg" className={styles.icon}/>
                        <span className={styles.text}>{t("main.section07.content3")}</span>
                        <div className={styles.dim}/>
                    </div>
                </a>
            </Slider>
        </div>
    )
}