import "./customCard.scss"
import {FC, ReactNode} from "react";

type customCardProps = {
    style?: CardStyle;
    child: ReactNode;
}

export enum CardStyle {
    default = "default-card",
    blur = "blur-card",
    max_blur = "max-blur-card",
    gradient = "gradient-card",
}

const CustomCard: FC<customCardProps> = ({style = CardStyle.default, child}) => {
    return (
        <div className={`${style}`}>
            {child}
        </div>
    )
}

export default CustomCard