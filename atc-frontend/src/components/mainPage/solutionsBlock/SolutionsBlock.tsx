import CustomCard, {CardStyle} from "../../other/customCard/CustomCard.tsx";
import image from "../../../assets/img/carouselBlock/first.jpg"
import "../specific.scss"

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
                    <CustomCard title={"Сначала аудит"}
                                style={CardStyle.image} image={image}/>
                    <CustomCard title={"Опыт федеральных проектов"}
                                style={CardStyle.image} image={image}/>
                    <CustomCard title={"Оперативное взаимодействие"}
                                style={CardStyle.image} image={image}/>
                    <CustomCard title={"Правильные решения"}
                                style={CardStyle.image} image={image}/>
                    <CustomCard title={"Сервис и поддержка"}
                                style={CardStyle.image} image={image}/>
                </div>
            </div>
        </div>
    )
}

export default SolutionsBlock