import "./customCard.scss"
import {FC} from "react";
import {numWithZero} from "../../../utils/formatters";

type customCardProps = {
    title: string;
    subtitle?: string;
    index?: number;
    style?: CardStyle;
    image?: string;
}

export enum CardStyle {
    default = "default-card",
    blur = "blur-card",
    gradient = "gradient-card",
    image = "image-card"
}

const CustomCard: FC<customCardProps> = ({title, subtitle, style = CardStyle.default, index, image}) => {

    if (style === CardStyle.image) {
        return (
            <div className={style}>
                <img alt={title} src={image}/>
                    <h3 style={{width: "100%"}}>{title}</h3>
                <p>{subtitle}</p>
            </div>
        )
    }

    return (
        <div className={`card-container ${style}`}>
            {index ? <div className={"card-number large-outlined-text"}>
                {numWithZero(index)}
            </div> : null}
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