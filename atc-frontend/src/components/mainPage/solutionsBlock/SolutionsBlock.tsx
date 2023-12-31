import image from "../../../assets/img/carouselBlock/first.jpg"
import "../specific.scss"
import ImageCard from "../../other/cards/imageCard/ImageCard.tsx";

const SolutionsBlock = () => {
    return (
        <div>
            <div className={"body-container"}>
                <div className={"title-text mb-1"}>
                    решения
                </div>
                <h1>#НАЙДИТЕ СВОЕ</h1>
                <div className={"gradient-h1"}>ИДЕАЛЬНОЕ РЕШЕНИЕ</div>
                <h1 className={"mb-1"}>В ПАРУ КЛИКОВ</h1>
                <div className={"card-grid"}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                    <ImageCard title={"Сначала аудит"} image={image}/>
                    <ImageCard title={"Опыт федеральных проектов"} image={image}/>
                    <ImageCard title={"Оперативное взаимодействие"} image={image}/>
                    <ImageCard title={"Правильные решения"} image={image}/>
                    <ImageCard title={"Смотреть все услуги"}/>
                </div>
            </div>
        </div>
    )
}

export default SolutionsBlock