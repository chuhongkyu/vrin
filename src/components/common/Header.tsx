import { useTranslation } from "react-i18next";
import styles from "styles/Component.module.css";
import Logo from "./Logo";

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

export default function Header() {
    const { i18n } = useTranslation();

    return(
        <header className={styles.header}>
            <div className={styles["header-wrapper"]}>
                <Logo/>
                <nav>
                    <ul>
                        <li className={styles.btn}>
                            가격측정
                        </li>
                        {lngs.map((lng) => (
                            <li className={styles.btn}>
                                <button key={lng.id + "KEY"} 
                                    style={{ fontWeight: i18n.resolvedLanguage === lng.id ? 'bold' : 'normal' }} 
                                    type="submit"
                                    onClick={() => i18n.changeLanguage(lng.id)}>
                                    {lng.lang}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    )
}