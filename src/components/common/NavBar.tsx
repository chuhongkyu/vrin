import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import styles from "styles/Component.module.scss";
import LangSwitchMenu from "./LangSwitchMenu";
import Logo from "./Logo";

export default function NavBar(){
    const { t } = useTranslation();
    const [ langMenu, setLangMenu ] = useState(false);
    const onHandleMenu = () => setLangMenu(prev => !prev)

    return(
        <>
            <Logo/>
            <nav className={styles.nav}>
                <ul>
                    <li className={styles.btn}>
                        <Link to={"/price"}>{t("menu.nav1")}</Link>
                    </li>
                    <li className={`${styles.btn} ${styles["lang-btn-wrapper"]}`}>
                        <div className={styles["open-lang-btn"]} onClick={onHandleMenu}>
                            <button type="button">
                                {t("menu.language")}
                            </button>
                            <div className={`${styles["arrow-icon"]} ${langMenu && styles["up"]}`}>
                                <svg focusable="false" aria-hidden="true" fill="rgb(111, 117, 123)" viewBox="0 0 24 24"><path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path></svg>
                            </div>
                        </div>
                        {langMenu && <LangSwitchMenu/>}
                    </li>
                    
                    <li className={styles.btn}>
                        <Link to={"/login"} className={styles["btn-login"]}>{t("menu.nav2")}</Link>
                    </li>
                    <li className={styles.btn}>
                        <Link to={"/register"} className={styles["btn-free"]}>{t("menu.btn")}</Link>
                    </li>
                </ul>
            </nav>
            <nav className={styles["apply-nav"]}>
                <h5>{t("menu.nav3")}</h5>
                <Link to={"/register"} className={styles["btn-free"]}>
                    <span>{t("menu.btn")}</span>
                </Link>
            </nav>
        </>
    )
}
