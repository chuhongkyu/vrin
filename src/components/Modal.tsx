import styles from "styles/Home.module.scss";

export default function Modal() {
    return(
        <section className={styles["modal-root"]}>
            <div className={styles["modal-dim"]}>
                <div className={styles.modal}>
                    <img className={styles.banner} src="/assets/home_popup_modal-e8747bf7.png" width="100%" height="auto" alt="modal"/>
                    <div className={styles.content}>
                        <div className={styles["text-group"]}>
                            <div className={styles["modal-title"]}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none"><path d="M10.775 17.85L8.825 13.55L4.5 11.575L8.825 9.62505L10.775 5.30005L12.75 9.62505L17.05 11.575L12.75 13.55L10.775 17.85ZM17.35 19.7L16.375 17.525L14.225 16.55L16.375 15.575L17.35 13.425L18.35 15.575L20.5 16.55L18.35 17.525L17.35 19.7Z" fill="#5D6CFA"></path></svg>
                                <h5>3D 프린팅 이벤트</h5>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none"><path d="M10.775 17.85L8.825 13.55L4.5 11.575L8.825 9.62505L10.775 5.30005L12.75 9.62505L17.05 11.575L12.75 13.55L10.775 17.85ZM17.35 19.7L16.375 17.525L14.225 16.55L16.375 15.575L17.35 13.425L18.35 15.575L20.5 16.55L18.35 17.525L17.35 19.7Z" fill="#5D6CFA"></path></svg>
                            </div>
                            <span className={styles["modal-desc"]}>
                                <div>나의 소중한 물건을</div>
                                <div>3D 피규어로 받아보세요</div>
                            </span>
                            <div className={styles["modal-desc-2"]}>
                                <p>기록하고 싶은 사물, 혹은 사람을 VRIN 3D로 촬영하고 피규어로 만들어보세요. 3D 프린팅하여 배송까지 해드립니다.</p>
                                <small>*이 이벤트는 한국, 일본 지역에서만 참여 가능합니다.</small>
                            </div>
                            
                        </div>
                        <button className={styles["btn-more"]} type="button">
                            <span>자세히 알아보기</span>
                        </button>
                        {/*  */}
                        <div className={styles["modal-caption"]}>
                            <div className={styles["modal-text-group"]}>
                                <span className="MuiButtonBase-root MuiCheckbox-root MuiCheckbox-colorPrimary MuiCheckbox-sizeMedium PrivateSwitchBase-root MuiCheckbox-root MuiCheckbox-colorPrimary MuiCheckbox-sizeMedium MuiCheckbox-root MuiCheckbox-colorPrimary MuiCheckbox-sizeMedium css-sda9pp" role="checkbox">
                                    <input className={styles.checkbox} type="checkbox" data-indeterminate="false"/>
                                    <svg className={styles["box-svg"]} focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                                        <path fill="rgb(189, 193, 199)" d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path></svg>
                                </span>
                                <span className={styles.text}>오늘 하루 보지 않기</span>
                            </div>
                            <div className={styles["x-btn"]}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M11.0668 21.9999L16.0002 17.0666L20.9335 21.9999L22.0002 20.9333L17.0668 15.9999L22.0002 11.0666L20.9335 9.99992L16.0002 14.9333L11.0668 9.99992L10.0002 11.0666L14.9335 15.9999L10.0002 20.9333L11.0668 21.9999ZM16.0002 28.6666C14.2668 28.6666 12.6279 28.3333 11.0835 27.6666C9.53905 26.9999 8.19461 26.0944 7.05016 24.9499C5.90572 23.8055 5.00016 22.461 4.3335 20.9166C3.66683 19.3721 3.3335 17.7333 3.3335 15.9999C3.3335 14.2444 3.66683 12.5944 4.3335 11.0499C5.00016 9.50547 5.90572 8.16658 7.05016 7.03325C8.19461 5.89992 9.53905 4.99992 11.0835 4.33325C12.6279 3.66659 14.2668 3.33325 16.0002 3.33325C17.7557 3.33325 19.4057 3.66659 20.9502 4.33325C22.4946 4.99992 23.8335 5.89992 24.9668 7.03325C26.1002 8.16658 27.0002 9.50547 27.6668 11.0499C28.3335 12.5944 28.6668 14.2444 28.6668 15.9999C28.6668 17.7333 28.3335 19.3721 27.6668 20.9166C27.0002 22.461 26.1002 23.8055 24.9668 24.9499C23.8335 26.0944 22.4946 26.9999 20.9502 27.6666C19.4057 28.3333 17.7557 28.6666 16.0002 28.6666Z" fill="#BDC1C7"></path></svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}