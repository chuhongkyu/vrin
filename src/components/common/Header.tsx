import { useTranslation } from "react-i18next";
import styles from "styles/Component.module.scss";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import { useState } from "react";
import LangSwitchMenu from "./LangSwitchMenu";
import { useFullScreen } from "utils/useFullScreen";
import { useCheckwViewPort } from "utils/helper";
import NavBar from "./NavBar";
import MobileNavBar from "./MobileNavBar";


export default function Header() {
    const { state } = useFullScreen()
    const { headerType } = state
    const mobile = useCheckwViewPort(600 + 1);
    
    return(
        <header className={styles.header} id="header" data-type={headerType}>
            <div className={styles["header-wrapper"]}>
                {mobile ? 
                    <MobileNavBar/>:
                    <NavBar/>
                }
            </div>
        </header>
    )
}