
import "./customCard.scss"
import {FC} from "react";
import {numWithZero} from "../../../utils/formatters";

type customCardProps = {
    title: string;
    subtitle: string;
    index: number;
    style?: CardStyle
}

export enum CardStyle {
    default = "default-card",
    blur = "blur-card",
    gradient = "gradient-card"
}

const CustomCard: FC<customCardProps> = ({title, subtitle, style = CardStyle.default, index}) => {
    return (
        <div className={`card-container ${style}`}>
            <div className={"card-number large-outlined-text"}>
                {numWithZero(index)}
            </div>
            <h2>
                {title}
            </h2>
            <p>
                {subtitle}
            </p>
        </div>
    )
}

export default CustomCard