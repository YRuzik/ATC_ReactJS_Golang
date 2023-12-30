import "../specific.scss"
import {CardStyle} from "../../other/customCard/CustomCard.tsx";
import IndexedCard from "../../other/cards/indexedCard/IndexedCard.tsx";

const HowWeWorkBlock = () => {
    const cardHeight = 250;
    return (
        <div className={"body-container"}>
            <div className={"title-text mb-1"}>
                как мы работаем
            </div>
            <div className={"mb-1"}>
                <h1>#4 ПРОСТЫХ ШАГА</h1>
                <div>
                    <span className={"outlined-h1"}>ОТ РАСЧЕТА </span><span
                    className={"gradient-h1"}>ДО ВНЕДРЕНИЯ</span>
                </div>
            </div>
            <div className={"card-grid"}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                <IndexedCard height={cardHeight} title={"Сначала аудит"} subtitle={"Идем от потребностей заказчика."} index={1}/>
                <IndexedCard height={cardHeight} title={"Опыт федеральных проектов"} subtitle={"Двукратный рост проектов и команды."} index={2} style={CardStyle.blur}/>
                <IndexedCard height={cardHeight} title={"Оперативное взаимодействие"} subtitle={"Работаем на территории заказчика."} index={3} style={CardStyle.blur}/>
                <IndexedCard height={cardHeight} title={"Правильные решения"} subtitle={"Смело беремся за новые и сложные задачи."} index={4}/>
                <IndexedCard height={cardHeight} title={"Сервис и поддержка"} subtitle={"Поддержка 24/7"} index={5} style={CardStyle.gradient}/>
            </div>
        </div>
    )
}

export default HowWeWorkBlock;