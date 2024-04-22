import styles from "styles/Home.module.css";

function ScrollContainer() {

    return(
        <>
            <section id="no-sticky" className={styles["first"]} style={{backgroundImage : 'url("/assets/home_A-1_PC-24bf28eb.png")'}}>
                <div className={styles["container"]}>
                    <div className="MuiStack-root sc-hEwNEX bRHYvC css-1ofqig9">
                        <div className="MuiStack-root sc-eFzqdc hOmEkG css-j7qwjs">
                            <span className="sc-eqZEtd kOUWmN">AI로 만드는 3D 모델</span>
                                <span className="sc-hhTLGm eptCnI"><div>인공지능으로 자동 생성되는 3D 모델과</div>
                                <div>손쉬운 편집을 경험해보세요.</div>
                            </span>
                            <button className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium sc-gTtZWn fdexUM css-1ps8hc1" type="button">
                                <span className="sc-gKkQJw bPjlAi">무료로 시작하기</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ScrollContainer;