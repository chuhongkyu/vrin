import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import styles from "styles/Home.module.scss";

export default function FloatBtn() {
    const { t } = useTranslation();
    return(
        <div className={styles["float-container"]}>
            <div className={styles.element}>
                <h5>{t("float.text1")}</h5>
                <Link to={"/register"}>
                    <span>{t("float.text2")}</span>
                </Link>
            </div>
        </div>
    )
}