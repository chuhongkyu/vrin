import { useTranslation } from "react-i18next";
import styles from "styles/Component.module.css";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import { useState } from "react";
import LangSwitchMenu from "./LangSwitchMenu";


export default function Header() {
    const { t } = useTranslation();
    const [ langMenu, setLangMenu ] = useState(false);
    
    const onHandleMenu = () => setLangMenu(prev => !prev)

    const onHandleSwitch = () => {}
    return(
        <header className={styles.header}>
            <div className={styles["header-wrapper"]}>
                <Logo/>
                <nav className={styles.nav}>
                    <ul>
                        <li className={styles.btn}>
                            <Link to={"/price"}>가격정책</Link>
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
                            <Link to={"/login"}>로그인</Link>
                        </li>
                        <li className={styles.btn}>
                            <Link to={"/login"}>무료로 시작하기</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}