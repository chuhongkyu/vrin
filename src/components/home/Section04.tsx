import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "styles/Home.module.scss";

const videoURL = "/assets/home_content_3_PC-706ebb88.mp4"

const initialStyle = { position: 'absolute', top: "0px", bottom: "unset" } as React.CSSProperties;
const isScrollStyle = { position: 'sticky', top: "0px", bottom: "unset" } as React.CSSProperties;
const endStyle = { position: 'absolute', top: "unset", bottom: "-2px" } as React.CSSProperties; 


export default function Section04() {
    const { t } = useTranslation();
    const [contentStyle, setContentStyle] = useState(initialStyle);
    const startRef = useRef<HTMLDivElement>(null);
    const endRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            const startRect = startRef?.current?.getBoundingClientRect();
            const endRect = endRef?.current?.getBoundingClientRect();

            if (startRect && startRect.top <= 0) {
                setContentStyle(isScrollStyle);
            } else {
                setContentStyle(initialStyle);
            }

            if (endRect && endRect.top <= 0) {
                setContentStyle(endStyle);
            }
        };

        const handleViewport = () => {
            const startRect = startRef.current?.getBoundingClientRect();

            if (startRect && startRect.top <= window.innerHeight && startRect.bottom >= 0) {
                videoRef?.current?.play();
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('scroll', handleViewport);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('scroll', handleViewport);
        };
    }, []);

    
    return(
        <section id="section4" className={styles.second} ref={startRef}>
            <div className={styles.content} style={contentStyle}>
                <video ref={videoRef} muted width="100%" height="100%" loop playsInline autoPlay={false} src={videoURL}/>
                <div className={styles.dim}></div>
            </div>
            <div  className={styles.element} ref={endRef}>
                <div className={styles.wrapper}>
                    <div className={styles.left}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                            <circle cx="12.5" cy="12" r="3" fill="#BDC1C7"></circle>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                            <circle cx="12.5" cy="12" r="3" fill="#BDC1C7"></circle>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"><path d="M19.2251 7.9499L18.3001 5.7999L16.0501 4.7999L18.3001 3.8499L19.2251 1.7749L20.1501 3.8499L22.4001 4.7999L20.1501 5.7999L19.2251 7.9499ZM19.2251 22.1999L18.3001 20.1249L16.0501 19.1499L18.3001 18.1749L19.2251 15.9999L20.1501 18.1749L22.4001 19.1499L20.1501 20.1249L19.2251 22.1999ZM8.9001 18.1749L6.9251 13.9249L2.6001 11.9749L6.9251 10.0499L8.9001 5.8249L10.8751 10.0499L15.2001 11.9749L10.8751 13.9249L8.9001 18.1749ZM8.9001 15.3749L10.0251 13.0499L12.4001 11.9749L10.0251 10.9249L8.9001 8.5999L7.7751 10.9249L5.3751 11.9749L7.7751 13.0499L8.9001 15.3749Z" fill="#5D6CFA"></path></svg>
                    </div>
                    <div className={styles.right}>
                        <div className={styles["text-group"]}>
                            <span className={styles.title}>{t("main.section04.text1")}</span>
                            <span className={styles.title}>{t("main.section04.text2")}</span>
                        </div>
                        <span className={styles.description}>{t("main.section04.text3")}</span>
                    </div>
                </div>
            </div>
        </section>
    )
}