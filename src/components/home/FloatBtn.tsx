import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import styles from "styles/Home.module.scss";

export default function FloatBtn() {
    const { t } = useTranslation();
    const pointRef = useRef(null)
    const [isActive, setIsActive] = useState(true);

    useEffect(() => {
        const options = {
            root: null, // null은 viewport를 의미합니다.
            rootMargin: '0px',
            threshold: 0.5 // 요소가 화면에 50% 이상 보일 때 감지합니다.
        };

        const observer = new IntersectionObserver(([entry]) => {
            setIsActive(!entry.isIntersecting);
        }, options);

        if (pointRef.current) {
            observer.observe(pointRef.current);
        }

        return () => {
            if (pointRef.current) {
                observer.unobserve(pointRef.current);
            }
        };
    }, []);

    return(
        <>
        <div className={styles["float-container"]} ref={pointRef}>
            <div className={styles.element}>
                <h5>{t("float.text1")}</h5>
                <Link to={"/register"}>
                    <span>{t("float.text2")}</span>
                </Link>
            </div>
        </div>
        <div className={`${styles["float-container-mobile"]} ${isActive ? styles.active : ''}`}>
            <Link to={"/register"}>
                <span>{t("float.text2")}</span>
            </Link>
        </div>
        </>
    )
}