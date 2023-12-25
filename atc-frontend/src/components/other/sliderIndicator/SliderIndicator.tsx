import "./sliderIndicator.scss"
import Icon, {AppIcons} from "../icon/Icon.tsx";
import {FC} from "react";

type sliderIndicatorProps = {
    onNext: () => void;
    onPrev: () => void;
    total: number;
    current: number;
}

const SliderIndicator: FC<sliderIndicatorProps> = ({onNext, total, current, onPrev}) => {
    return (
        <div className={"slider-indicator-container"}>
            <section className={"mb-1"}>
                <div style={{transform: "rotate(180deg)"}}>
                    <Icon icon={AppIcons.next} onClick={() => {
                        onPrev()
                    }}/>
                </div>
                <Icon icon={AppIcons.next} onClick={() => {
                    onNext()
                }}/>
            </section>
            <div className={"slider-indicator"}>
                <div style={{width: `${1 / total * 100}%`, left: `${current / total * 100}%`}}>

                </div>
            </div>
        </div>
    )
}

export default SliderIndicator