import { useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "styles/Home.module.scss";
import { setCookie, useCheckwViewPort } from "utils/helper";
import { useFullScreen } from "utils/useFullScreen";

export default function Modal() {
    const { t } = useTranslation();
    const { dispatch } = useFullScreen()
    const [checked, setChecked] = useState(false)

    const mobile = useCheckwViewPort(600 + 1);

    const handleChange = () => setChecked(!checked)

    const onClose = () => {
        dispatch({ 
            type: "CLOSE_MODAL", 
            payload: false,
        })
        if(checked){
            setCookie()
        }
    }

    return(
        <section className={styles["modal-root"]}>
            <div className={styles["modal-dim"]}>
                <div className={styles.modal}>
                    <img className={styles.banner} src="/assets/home_popup_modal-e8747bf7.png" width="100%" height="auto" alt="modal"/>
                    <div className={styles.content}>
                        <div className={styles["text-group"]}>
                            <div className={styles["modal-title"]}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none"><path d="M10.775 17.85L8.825 13.55L4.5 11.575L8.825 9.62505L10.775 5.30005L12.75 9.62505L17.05 11.575L12.75 13.55L10.775 17.85ZM17.35 19.7L16.375 17.525L14.225 16.55L16.375 15.575L17.35 13.425L18.35 15.575L20.5 16.55L18.35 17.525L17.35 19.7Z" fill="#5D6CFA"></path></svg>
                                <h5>{t("modal.text1")}</h5>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none"><path d="M10.775 17.85L8.825 13.55L4.5 11.575L8.825 9.62505L10.775 5.30005L12.75 9.62505L17.05 11.575L12.75 13.55L10.775 17.85ZM17.35 19.7L16.375 17.525L14.225 16.55L16.375 15.575L17.35 13.425L18.35 15.575L20.5 16.55L18.35 17.525L17.35 19.7Z" fill="#5D6CFA"></path></svg>
                            </div>
                            <span 
                                className={styles["modal-desc"]}
                                dangerouslySetInnerHTML={{ __html:t("modal.text2")}}/>
                              
                            <div className={styles["modal-desc-2"]}>
                                <p>{t("modal.text3")}</p>
                                {mobile ? <small>{t("modal.text7")}</small>: <small>{t("modal.text4")}</small>}
                            </div>
                        </div>

                        <button className={styles["btn-more"]} type="button">
                            <span>{t("modal.text5")}</span>
                        </button>
                        {/*  */}
                        <div className={styles["modal-caption"]}>
                            <div className={styles["modal-text-group"]}>
                                <span className={styles["checkbox-group"]} onClick={()=> setChecked(!checked)}>
                                    <input id="today" className={styles.checkbox} onChange={handleChange} checked={checked} type="checkbox"/>
                                    <svg className={styles["box-svg"]} viewBox="0 0 24 24">
                                        {checked ?
                                        <path fill="rgb(255, 255, 255)" d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>:
                                        <path fill="rgb(189, 193, 199)" d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>
                                        }
                                    </svg>
                                </span>
                                <span className={styles.text}>{t("modal.text6")}</span>
                            </div>
                            {!mobile &&
                                <button
                                    onClick={onClose}
                                    className={styles["x-btn"]}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M11.0668 21.9999L16.0002 17.0666L20.9335 21.9999L22.0002 20.9333L17.0668 15.9999L22.0002 11.0666L20.9335 9.99992L16.0002 14.9333L11.0668 9.99992L10.0002 11.0666L14.9335 15.9999L10.0002 20.9333L11.0668 21.9999ZM16.0002 28.6666C14.2668 28.6666 12.6279 28.3333 11.0835 27.6666C9.53905 26.9999 8.19461 26.0944 7.05016 24.9499C5.90572 23.8055 5.00016 22.461 4.3335 20.9166C3.66683 19.3721 3.3335 17.7333 3.3335 15.9999C3.3335 14.2444 3.66683 12.5944 4.3335 11.0499C5.00016 9.50547 5.90572 8.16658 7.05016 7.03325C8.19461 5.89992 9.53905 4.99992 11.0835 4.33325C12.6279 3.66659 14.2668 3.33325 16.0002 3.33325C17.7557 3.33325 19.4057 3.66659 20.9502 4.33325C22.4946 4.99992 23.8335 5.89992 24.9668 7.03325C26.1002 8.16658 27.0002 9.50547 27.6668 11.0499C28.3335 12.5944 28.6668 14.2444 28.6668 15.9999C28.6668 17.7333 28.3335 19.3721 27.6668 20.9166C27.0002 22.461 26.1002 23.8055 24.9668 24.9499C23.8335 26.0944 22.4946 26.9999 20.9502 27.6666C19.4057 28.3333 17.7557 28.6666 16.0002 28.6666Z" fill="#BDC1C7"></path></svg>
                                </button>
                            }
                        </div>
                    </div>
                    {mobile &&
                    <button
                        onClick={onClose}
                        className={styles["x-btn"]}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M11.0668 21.9999L16.0002 17.0666L20.9335 21.9999L22.0002 20.9333L17.0668 15.9999L22.0002 11.0666L20.9335 9.99992L16.0002 14.9333L11.0668 9.99992L10.0002 11.0666L14.9335 15.9999L10.0002 20.9333L11.0668 21.9999ZM16.0002 28.6666C14.2668 28.6666 12.6279 28.3333 11.0835 27.6666C9.53905 26.9999 8.19461 26.0944 7.05016 24.9499C5.90572 23.8055 5.00016 22.461 4.3335 20.9166C3.66683 19.3721 3.3335 17.7333 3.3335 15.9999C3.3335 14.2444 3.66683 12.5944 4.3335 11.0499C5.00016 9.50547 5.90572 8.16658 7.05016 7.03325C8.19461 5.89992 9.53905 4.99992 11.0835 4.33325C12.6279 3.66659 14.2668 3.33325 16.0002 3.33325C17.7557 3.33325 19.4057 3.66659 20.9502 4.33325C22.4946 4.99992 23.8335 5.89992 24.9668 7.03325C26.1002 8.16658 27.0002 9.50547 27.6668 11.0499C28.3335 12.5944 28.6668 14.2444 28.6668 15.9999C28.6668 17.7333 28.3335 19.3721 27.6668 20.9166C27.0002 22.461 26.1002 23.8055 24.9668 24.9499C23.8335 26.0944 22.4946 26.9999 20.9502 27.6666C19.4057 28.3333 17.7557 28.6666 16.0002 28.6666Z" fill="#BDC1C7"></path></svg>
                    </button>
                    }
                </div>
            </div>
        </section>
    )
}