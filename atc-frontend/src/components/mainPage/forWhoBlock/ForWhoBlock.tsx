import "./forWhoBlock.scss"
import {useRef} from "react";

const ForWhoBlock = () => {
    return (
        <div className={"for-who-container"}>
            <div className={"infinity-text-container"}>
                <div className={"scroll"}>
                    <div className={"large-outlined-text m-scroll f-scroll"}>
                        <span>#корпоративный сектор #государственные учреждения</span>
                        <span> #корпоративный сектор #государственные учреждения</span>
                    </div>
                </div>
                <div className={"scroll"}>
                    <h1 className={"m-scroll s-scroll"}>
                        <span>#спортивные залы #медицинские учреждения #торговые учреждения</span>
                        <span> #спортивные залы #медицинские учреждения #торговые учреждения</span>
                    </h1>
                </div>
                <div className={"scroll"}>
                    <div className={"large-outlined-text m-scroll t-scroll"}>
                        <span>#корпоративный сектор #государственные учреждения</span>
                        <span> #корпоративный сектор #государственные учреждения</span>
                    </div>
                </div>
            </div>
            <div className={"body-container"}>
                <div className={"title-text mb-1"}>
                    для кого
                </div>
                <h1>
                    #ИМЕЕМ ГОТОВЫЕ РЕШЕНИЯ
                </h1>
                <span className={"gradient-h1"}>
                ДЛЯ ВСЕХ ОСНОВНЫХ СФЕР
            </span>
                <h1 className={"mb-1"}>
                    ПРОИЗВОДСТВ
                </h1>
                <p className={"w-50"}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam
                </p>
            </div>
        </div>
    )
}

export default ForWhoBlock