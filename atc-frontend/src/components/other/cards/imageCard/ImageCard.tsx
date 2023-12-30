
import {FC} from "react";

type imageCardProps = {
    image?: string;
    title: string;
    imageHeight?: number;
    subtitle?: string;
    goTo?: string;
}

const ImageCard: FC<imageCardProps> = ({image, imageHeight, title, subtitle, goTo}) => {
    return (
        <div>
            <img alt={title}/>
        </div>
    )
}

export default ImageCard