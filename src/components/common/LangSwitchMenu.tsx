import { useTranslation } from "react-i18next";
import styles from "styles/Component.module.scss";

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

export default function LangSwitchMenu (){
    const { i18n } = useTranslation();
    return(
        <div className={styles["lang-menu"]}>
            {lngs.map((lng) => {
                return(
                    <div 
                        key={lng.id + "KEY"}
                        className={`${styles["menu-btn"]} ${i18n.resolvedLanguage === lng.id && styles.active}`} 
                        onClick={() => i18n.changeLanguage(lng.id)}>
                        <span>{lng.lang}</span>
                        <span className="material-symbols-outlined">done</span>
                    </div>
                )
            })}
       </div>
    )
}