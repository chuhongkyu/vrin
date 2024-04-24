import styles from "styles/Home.module.scss";
import Slider from "react-slick";
import { useFullScreen } from "utils/useFullScreen";
import { useEffect, useRef, useState } from "react";

interface VideoData {
    [key: string]: VideoItem[];
}

interface VideoItem {
    id: string;
    src: string;
    type?: string;
}

const videoData:VideoData = {
    showroom : [
        {
            id: "001",
            src: "https://vrin.co.kr/assets/showroom_1-87aa7ee5.mp4"
        },
        {
            id: "002",
            src: "https://vrin.co.kr/assets/showroom_2-fef2efc1.mp4"
        },
        {
            id: "003",
            src: "https://vrin.co.kr/assets/showroom_3-6da92c3a.mp4"
        }
    ],
    exhibition: [
        {
            id: "001",
            src: "https://vrin.co.kr/assets/exhibition_1-f061a282.mp4"
        },
        {
            id: "002",
            src: "https://vrin.co.kr/assets/exhibition_2-65efd129.mp4"
        },
    ],
    product : [
        {
            id: "001",
            src: "https://vrin.co.kr/assets/product_1-f0774ba2.mp4"
        },
        {
            id: "002",
            src: "https://vrin.co.kr/assets/product_2-ffb1e91b.mp4"
        },
        {
            id: "003",
            src: "https://vrin.co.kr/assets/product_3-51f3ffbb.mp4"
        },
        {
            id: "004",
            type: "img",
            src: "https://vrin.co.kr/assets/modal_advertise_1-f640c29d.png"
        },
        {
            id: "005",
            type: "img",
            src: "https://vrin.co.kr/assets/modal_advertise_2-5df5e985.png"
        },
        {
            id: "006",
            type: "img",
            src: "https://vrin.co.kr/assets/modal_advertise_3-8fde8ba8.png"
        },
        {
            id: "006",
            type: "img",
            src: "https://vrin.co.kr/assets/modal_advertise_4-39e2be2b.png"
        },
    ]
}

export default function SliderView(){
    const { state, dispatch } = useFullScreen()
    const { viewData } = state
    const [ list, setList] = useState<VideoItem[]>([])
    const [ percent, setPercent] = useState(1)
    const sliderRef = useRef(null)

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        // afterChange: ( current:number) => {
        //     const totalSlides = list.length;
        //     const progress = (current / (totalSlides - 1)) * 100;
        //     setPercent(progress);
        // },
        beforeChange: ( current:number, next:number) => {
            const totalSlides = list.length;
            const progress = ((next + 1) / (totalSlides - 1)) * 100;
            setPercent(progress);
        },
    };

    const onClick = () => {
        dispatch({ 
            type: "OPEN_VIEW_MODE", 
            payload: false
        })
    }

    useEffect(()=>{
        if(viewData){
            const data = videoData[viewData]
            setList(data);
        }
    },[viewData])

    useEffect(()=>{
        const totalSlides = list.length;
        const progress = (1 / (totalSlides - 1)) * 100;
        setPercent(progress);
    },[list])

    return(
        <section className={styles["full-view-root"]}>
            <div className={styles["full-view"]}>
                <div  className={styles["view-container"]}>
                    <Slider {...settings} ref={sliderRef}>
                        {list.map((el)=>{
                            return(
                                <div key={el.id + "KEY"}>
                                    <div className={styles.content}>
                                        {el.type === "img" ?
                                        <img className={styles.video} src={el.src} alt="img"/> : 
                                        <video className={styles.video} src={el.src} autoPlay muted loop></video>}
                                    </div>
                                </div>
                            )
                        })}
                    </Slider>
                    <div className={styles["view-ui"]}>
                        <div className={styles["ui-wrapper"]} onClick={onClick}>
                            <img alt="x-icon" src="/assets/modal_close-3dfdf935.svg" className={styles["x-icon"]}/>
                            <span className={styles.progressbar} style={{ width : "345px"}}>
                                <span className={styles.bar} style={{transform: `translateX(${percent}%)`}}></span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}