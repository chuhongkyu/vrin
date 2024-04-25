import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "styles/Home.module.scss";

const imgFrame = [
    "/assets/home_bag_1-016e6c5c.png",
    "/assets/home_bag_2-ec220ca9.png",
    "/assets/home_bag_3-58b0e494.png",
    "/assets/home_bag_4-b1fee5e3.png",
    "/assets/home_bag_5-b77afbdd.png",
    "/assets/home_bag_6-78494c33.png",
    "/assets/home_bag_7-dc30c20d.png",
    "/assets/home_bag_8-38aed96a.png",
    "/assets/home_bag_9-5e42e9c2.png",
    "/assets/home_bag_10-3c83f6b4.png"
]


export default function Section06() {
    const { t } = useTranslation();
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const imgAnimation = setTimeout(() => {
            if(currentIndex >= imgFrame.length - 1 ){
                setCurrentIndex(0);
            }else{
                setCurrentIndex((prevIndex) => (prevIndex + 1));
            }
        }, 1000);

        return () => clearTimeout(imgAnimation);
    }, [currentIndex]);

    return(
        <section id="section06" className={styles["static-section"]}>
            <div className={styles["container"]}>
                <div className={styles["element"]}>
                    <summary className={styles.caption}>{t("main.section06.caption")}</summary>
                    <span className={styles.title}>{t("main.section06.title")}</span>
                    
                    {/* video 타입 */}
                    <div className={styles["content-group"]} data-type="hover">
                        <div className={`${styles.content} ${styles.left}`}>
                            <div className={styles.element}>
                                <span 
                                    className={styles.title} 
                                    dangerouslySetInnerHTML={{ __html:t("main.section06.text1")}}>
                                </span>
                                <span 
                                    className={styles.desc} 
                                    dangerouslySetInnerHTML={{ __html:t("main.section06.text2")}}>
                                </span>
                                <ActiveBtn/>
                                <XBtn/>
                            </div>
                            <img src="/assets/home_C-1_PC_ko-093e56a1.png" alt="initial" className={styles["initial-img"]}/>
                            <img id="video-image" src="/assets/home_C-3_PC-52386fbc.png" alt="frame" className={styles["frame-img"]}/>
                            <video muted src="/assets/home_2_PC-f15f3e50.mp4" autoPlay={true} loop playsInline className={styles["video"]}/>
                        </div>

                        {/* 이미지 타입 */}
                        <div className={`${styles.content} ${styles.right}`}>
                            <div className={styles.element}>
                                <span 
                                    className={styles.title} 
                                    dangerouslySetInnerHTML={{ __html:t("main.section06.text3")}}>
                                </span>
                                <span 
                                    className={styles.desc} 
                                    dangerouslySetInnerHTML={{ __html:t("main.section06.text4")}}>
                                </span>
                                <ActiveBtn/>
                                <XBtn/>
                            </div>
                            <img src="/assets/home_C-2_PC_ko-5168634f.png"  alt="initial" className={styles["initial-img"]}/>
                            {imgFrame.map((el, i) =>{
                                return(
                                    <img 
                                        className={styles["frame-img"]} 
                                        key={i + "IMG-FRME-KEY"} 
                                        src={el} 
                                        alt={el} 
                                        style={{opacity: currentIndex === i ? 1 : 0}}
                                    />
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

function ActiveBtn(){
    return(
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.2"><path d="M18.7208 37.5996L16.8008 35.6796L33.1208 19.3596H18.2408V16.6396H37.7608V36.1596H35.0408V21.2796L18.7208 37.5996Z" fill="#F3EEFF"></path><circle cx="28" cy="28" r="27.3333" stroke="#F3EEFF" strokeWidth="1.33333"></circle></g></svg>
    )
}

function XBtn () {
    return(
        <svg className={styles["x-btn"]} width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.2"><path d="M25 11L11 25" stroke="#F3EEFF" strokeWidth="1.3"></path><path d="M11 11L25 25" stroke="#F3EEFF" strokeWidth="1.3"></path><path d="M35.5714 17.5C35.5714 26.917 27.7159 34.5714 18 34.5714C8.28411 34.5714 0.428571 26.917 0.428571 17.5C0.428571 8.08301 8.28411 0.428571 18 0.428571C27.7159 0.428571 35.5714 8.08301 35.5714 17.5Z" stroke="#F3EEFF" strokeWidth="0.857143"></path></g></svg>
    )
}