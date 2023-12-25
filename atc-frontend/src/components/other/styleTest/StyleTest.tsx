import CustomButton, {ButtonStyles} from "../customButton/CustomButton.tsx";
import CustomLink from "../customLink/CustomLink.tsx";

const StyleTest = () => {
    return (
        <div>
            <h1>
                IT trader soft Внедрение МУЛЬТИМЕДИЙНЫХ РеШеНиЙ
            </h1>
            <h2>
                Сначала аудит Talking first
            </h2>
            <h3>
                Системный ИНТЕГРАТОР system INTEGRATOR
            </h3>
            <h4>
                ОТРАСЛИ отрасли WAYS ways
            </h4>
            <h4>test@mail.ru TEST тестмаил ТЕСТМАИЛ</h4>
            <div className={"title-text"}>
                как мы работаем
            </div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
            </p>
            <div className={"outlined-h1"}>
                ОТ РАСЧЕТА
            </div>
            <div className={"gradient-h1"}>
                ДО ВНЕДРЕНИЯ
            </div>
            <div className={"large-outlined-text"}>
                05
            </div>
            <hr/>
            <CustomButton label={"Обсудить проект"} onClick={() => {}} style={ButtonStyles.outlinedButton}/>
            <CustomButton label={"ОБСУДИТЬ ПРОЕКТ"} onClick={() => {}}/>
            <CustomLink path={""} label={"Кастомный ЛИНК"}/>
        </div>
    )
}

export default StyleTest