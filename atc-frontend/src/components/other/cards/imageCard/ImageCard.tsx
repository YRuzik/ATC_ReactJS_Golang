import {FC} from "react";
import {useNavigate} from "react-router-dom";
import Icon, {AppIcons} from "../../icon/Icon.tsx";
import "./imageCard.scss"

type imageCardProps = {
    image?: string;
    title: string;
    imageHeight?: number;
    subtitle?: string;
    goTo?: string;
}

const ImageCard: FC<imageCardProps> = ({image, imageHeight = 400, title, subtitle, goTo}) => {
    const navigate = useNavigate()
    return (
        <div className={`image-card-container ${image ? 'has-image' : 'no-image'}`}
             onClick={goTo ? () => navigate(goTo) : undefined} style={goTo ? {cursor: "pointer"} : undefined}>
            {image ? <img src={image} alt={title} height={imageHeight}/> :
                <div style={{height: `${imageHeight}px`}}></div>}
            <div className={"flex-sb-c"}>
                <h3 style={{width: "90%"}}>
                    {title}
                </h3>
                <Icon icon={AppIcons.upward_arrow} size={30}/>
            </div>
            <p>
                {subtitle}
            </p>
        </div>
    )
}

export default ImageCard