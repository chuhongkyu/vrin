import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "styles/Home.module.scss";
import { useFullScreen } from "utils/useFullScreen";

const videoURL = "/assets/home_content_1_PC-3cb3a75d.mp4"
const initialStyle = { position: 'absolute', top: "0px", bottom: "unset" } as React.CSSProperties;
const isScrollStyle = { position: 'sticky', top: "0px", bottom: "unset" } as React.CSSProperties;
const endStyle = { position: 'absolute', top: "unset", bottom: "-2px" } as React.CSSProperties; 

export default function Section02() {
    const { t } = useTranslation();
    const { dispatch } = useFullScreen()
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
                dispatch({ type: "HANDLE_HEADER", payload: "ACTIVE"})
            } else {
                setContentStyle(initialStyle);
                dispatch({ type: "HANDLE_HEADER", payload: "NORMAL"})
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
    }, [dispatch]);

    
    return(
        <section id="section2" className={styles["video-section"]} ref={startRef}>
            <div className={styles.content} style={contentStyle}>
                <video ref={videoRef} muted width="100%" height="100%" loop playsInline autoPlay={false} src={videoURL}/>
                <div className={styles.dim}></div>
            </div>
            <div  className={styles.element} ref={endRef}>
                <div className={styles.wrapper}>
                    <div className={styles.left}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"><path d="M12.5 17C13.6167 17 14.55 16.6208 15.3 15.8625C16.05 15.1042 16.425 14.175 16.425 13.075C16.425 11.9583 16.05 11.025 15.3 10.275C14.55 9.525 13.6167 9.15 12.5 9.15C11.3833 9.15 10.45 9.525 9.7 10.275C8.95 11.025 8.575 11.9583 8.575 13.075C8.575 14.175 8.95 15.1042 9.7 15.8625C10.45 16.6208 11.3833 17 12.5 17ZM12.5 15.875C11.7 15.875 11.0333 15.6083 10.5 15.075C9.96667 14.5417 9.7 13.875 9.7 13.075C9.7 12.2583 9.96667 11.5875 10.5 11.0625C11.0333 10.5375 11.7 10.275 12.5 10.275C13.3 10.275 13.9667 10.5375 14.5 11.0625C15.0333 11.5875 15.3 12.2583 15.3 13.075C15.3 13.875 15.0333 14.5417 14.5 15.075C13.9667 15.6083 13.3 15.875 12.5 15.875ZM4.45 20.5C4.05 20.5 3.70833 20.3583 3.425 20.075C3.14167 19.7917 3 19.45 3 19.05V7.075C3 6.69167 3.14167 6.35417 3.425 6.0625C3.70833 5.77083 4.05 5.625 4.45 5.625H7.875L9.7 3.5H15.3L17.125 5.625H20.55C20.9333 5.625 21.2708 5.77083 21.5625 6.0625C21.8542 6.35417 22 6.69167 22 7.075V19.05C22 19.45 21.8542 19.7917 21.5625 20.075C21.2708 20.3583 20.9333 20.5 20.55 20.5H4.45ZM20.55 19.375C20.65 19.375 20.7292 19.3458 20.7875 19.2875C20.8458 19.2292 20.875 19.15 20.875 19.05V7.075C20.875 6.99167 20.8458 6.91667 20.7875 6.85C20.7292 6.78333 20.65 6.75 20.55 6.75H16.6L14.75 4.625H10.25L8.4 6.75H4.45C4.35 6.75 4.27083 6.78333 4.2125 6.85C4.15417 6.91667 4.125 6.99167 4.125 7.075V19.05C4.125 19.15 4.15417 19.2292 4.2125 19.2875C4.27083 19.3458 4.35 19.375 4.45 19.375H20.55Z" fill="#5D6CFA"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"><circle cx="12.5" cy="12" r="3" fill="#BDC1C7"></circle></svg><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"><circle cx="12.5" cy="12" r="3" fill="#BDC1C7"></circle></svg>
                    </div>
                    <div className={styles.right}>
                        <div className={styles["text-group"]}>
                            <span className={styles.title}>{t("main.section02.text1")}</span>
                            <span className={styles.title}>{t("main.section02.text2")}</span>
                        </div>
                        <span className={styles.description}>{t("main.section02.text3")}</span>
                        <span className={styles.description}>{t("main.section02.text4")}</span>
                    </div>
                </div>
            </div>
        </section>
    )
}