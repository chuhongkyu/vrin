import React, { useCallback, useRef } from "react";
import Slider from "react-slick";
import styles from "styles/Home.module.scss";
import { useTranslation } from "react-i18next";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SlickSlider() {

    const { t } = useTranslation();
    const slickRef = useRef<Slider>(null);

    const previous = useCallback(() => slickRef?.current?.slickPrev(), []);
    const next = useCallback(() => slickRef?.current?.slickNext(), []);


    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false
    };
    return (
        <div className={styles["content-slider"]}>
            <Slider {...settings} ref={slickRef}>
                <div>
                    <div 
                        className={styles.card}
                        style={{backgroundImage: "url(/assets/carousel_thumbnail_1_PC-6a00eedf.png)"}}>
                        <div className={styles["text-group"]}>
                            <span className={styles.text}>{t("main.section07.content1")}</span>
                            <img alt="icon" src="/assets/arrow_outward-dd85a638.svg" className={styles.icon}/>
                        </div>
                        <div className={styles.dim}/>
                    </div>
                </div>
                <div>
                    <div 
                        className={styles.card}
                        style={{backgroundImage: "url(/assets/carousel_thumbnail_2_PC-774a2af5.png)"}}>
                        <div className={styles["text-group"]}>
                            <span className={styles.text}>{t("main.section07.content2")}</span>
                            <img alt="icon" src="/assets/arrow_outward-dd85a638.svg" className={styles.icon}/>
                        </div>
                        <div className={styles.dim}/>
                    </div>
                </div>
                <div>
                    <div 
                        className={styles.card}
                        style={{backgroundImage: "url(/assets/carousel_thumbnail_3_PC-471f312e.png)"}}>
                        <div className={styles["text-group"]}>
                            <span className={styles.text}>{t("main.section07.content3")}</span>
                            <img alt="icon" src="/assets/arrow_outward-dd85a638.svg" className={styles.icon}/>
                        </div>
                        <div className={styles.dim}/>
                    </div>
                </div>
                
            </Slider>
            <div className={styles["arrow-content"]}>
                <div className={styles["prev"]} onClick={previous}>
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><circle opacity="0.8" cx="18" cy="18" r="18" fill="white"></circle><path d="M20.7 11.7002L14.4 18.0002L20.7 24.3002" stroke="#6F757B" stroke-width="2" stroke-linecap="round"></path></svg>
                </div>
                <div className={styles["next"]} onClick={next}>
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><circle opacity="0.8" cx="18" cy="18" r="18" transform="matrix(-1 0 0 1 36 0)" fill="white"></circle><path d="M15.3 11.7002L21.6 18.0002L15.3 24.3002" stroke="#6F757B" stroke-width="2" stroke-linecap="round"></path></svg>
                </div>
            </div>
            <div className={styles.dim}/>
        </div>
  );
}