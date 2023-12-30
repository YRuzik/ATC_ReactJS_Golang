import CustomCard, {CardStyle} from "../../customCard/CustomCard.tsx";
import "./indexedCard.scss"
import {FC} from "react";
import {numWithZero} from "../../../../utils/formatters";

type indexedCardProps = {
    index: number;
    title: string;
    subtitle: string;
    height?: number;
    style?: CardStyle;
}

const IndexedCard: FC<indexedCardProps> = ({index, title, subtitle, height, style}) => {
    return (
        <CustomCard
            style={style}
            child={
            <div className={'indexed-card-container'} style={{height: `${height}px`}}>
                <h1 className={"index-container large-outlined-text"}>
                    {numWithZero(index)}
                </h1>
                <div>
                    <h2>
                        {title}
                    </h2>
                    <p>
                        {subtitle}
                    </p>
                </div>
            </div>
        }/>
    )
}

export default IndexedCard