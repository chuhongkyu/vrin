import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import styles from "styles/Home.module.scss";

export default function FloatBtn() {
    const { t } = useTranslation();
    const pointRef = useRef(null)
    const [isActive, setIsActive] = useState(true);

    useEffect(() => {

        const currentRef = pointRef.current
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver(([entry]) => {
            setIsActive(!entry.isIntersecting);
        }, options);

        if (currentRef ) {
            observer.observe(currentRef );
        }

        return () => {
            if (currentRef ) observer.unobserve(currentRef);
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