import { Link } from "react-router-dom";
import styles from "styles/Component.module.scss";
import Logo from "./Logo";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const lngs = [
    { 
        id: "ko",
        lang: 'KOR'
    },
    {
        id: "en",
        lang: 'ENG'
    }
]

export default function MobileNavBar(){
    const { t, i18n } = useTranslation();
    const [ menu, setMenu ] = useState(false);

    const onClick = () => setMenu(!menu)

    return(
        <header className={styles.header} id="header" style={menu ?{ height: "fit-content"}: {}}>
            <div className={styles["header-wrapper"]}>
                <div className={styles["menu-left"]}>
                    <span className={styles["mobile-menu"]} onClick={onClick}>
                        {menu ? <XBtn/> : <MenuBtn/>}
                    </span>
                    <Logo/>
                </div>
                <nav className={styles.nav}>
                    <ul>
                        <li className={styles.btn}>
                            <Link to={"/login"} className={styles["btn-login"]}>{t("menu.nav2")}</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            {menu &&
            <div className={styles["menu-container"]}>
                <div className={styles["menu-nav"]}>
                    <Link to={"/pricing"}>{t("menu.nav1")}</Link>
                </div>
                <div className={styles["lang-group"]}>
                    {lngs.map((lng) => {
                        return(
                            <div key={lng.id + "KEY"}
                                className={`${styles.lang} ${i18n.resolvedLanguage === lng.id && styles.active}`} 
                                onClick={() => i18n.changeLanguage(lng.id)}>{lng.lang}
                            </div>
                        )
                    })}
                </div>
            </div>
            }
        </header>
    )
}

function MenuBtn (){
    return(
        <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 12H18V10H0V12ZM0 7H18V5H0V7ZM0 0V2H18V0H0Z" fill="#FFFFFF"></path>
        </svg>
    )
}


function XBtn (){
    return(
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_2786_9881)"><path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="#FFFFFF"></path></g><defs><clipPath id="clip0_2786_9881"><rect width="24" height="24" fill="#FFFFFF"></rect></clipPath></defs></svg>
    )
}

