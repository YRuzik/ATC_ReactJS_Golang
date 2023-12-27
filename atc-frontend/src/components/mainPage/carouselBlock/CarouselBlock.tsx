import first from "../../../assets/img/carouselBlock/first.jpg"
import second from "../../../assets/img/carouselBlock/second.jpg"
import third from "../../../assets/img/carouselBlock/third.jpg"
import {useRef, useState} from "react";
import "./carouselBlock.scss"
import CustomButton from "../../other/customButton/CustomButton.tsx";
import SearchBar from "../../other/searchBar/SearchBar.tsx";
import SliderIndicator from "../../other/sliderIndicator/SliderIndicator.tsx";


const CarouselBlock = () => {
    const mockData = [
        {
            index: 0,
            title: "внедрение мультимедийных решений для конференц залов",
            subtitle: "Системный интегратор мультимедийных решений",
            description: "Комплексное оснащение конференц-залов, ситуационных центров, переговорных комнат, учебных центров и пр.",
            img_url: first
        },
        {
            index: 1,
            title: "Системный интегратор мультимедийных решений и что-то там еще",
            subtitle: "внедрение мультимедийных решений для конференц залов",
            description: "Комплексное оснащение конференц-залов, ситуационных центров, переговорных комнат, учебных центров и пр.",
            img_url: second
        },
        {
            index: 2,
            title: "внедрение мультимедийных решений для конференц залов",
            subtitle: "Системный интегратор мультимедийных решений",
            description: "Комплексное оснащение конференц-залов, ситуационных центров, переговорных комнат, учебных центров и пр.",
            img_url: third
        },
    ]

    const [slideData, setSlideData] = useState(mockData[0])
    const imageAnimatingRef = useRef<HTMLImageElement>(null)
    const contentAnimatingRef = useRef<HTMLDivElement>(null)

    const handleOnNext = () => {
        const normalizedIndex = slideData.index + 1;
        if ((imageAnimatingRef !== null) && (contentAnimatingRef !== null)) {
            imageAnimatingRef.current!.className = "carousel-image image-out";
            contentAnimatingRef.current!.className = "carousel-changeable-area transform-out";
            setTimeout(() => {
                if (normalizedIndex === mockData.length) {
                    setSlideData(mockData[0])
                } else {
                    setSlideData(mockData[slideData.index + 1])
                }
                imageAnimatingRef.current!.className = "carousel-image image-in";
                contentAnimatingRef.current!.className = "carousel-changeable-area transform-in";
            }, 300)
        }

    }

    const handleOnPrev = () => {
        const normalizedIndex = slideData.index + 1;
        imageAnimatingRef.current!.className = "carousel-image image-out";
        contentAnimatingRef.current!.className = "carousel-changeable-area transform-out";
        setTimeout(() => {
            if (normalizedIndex === 1) {
                setSlideData(mockData[mockData.length - 1])
            } else {
                setSlideData(mockData[slideData.index - 1])
            }
            imageAnimatingRef.current!.className = "carousel-image image-in";
            contentAnimatingRef.current!.className = "carousel-changeable-area transform-in";
        }, 300)
    }

    return (
        <div>
            <div>
                <div className={"carousel-image-tint"}></div>
                <img ref={imageAnimatingRef} className={`carousel-image`}
                     src={slideData.img_url} alt={slideData.title} width={"100%"}/>
            </div>
            <div className={"body-container"}>
                <div ref={contentAnimatingRef} className={`carousel-changeable-area`}>
                    <h3 className={"mb-1"}>
                        {slideData.subtitle.toUpperCase()}
                    </h3>
                    <h1 className={"mb-1"}>
                        {slideData.title.toUpperCase()}
                    </h1>
                    <p style={{maxWidth: "500px"}}>
                        {slideData.description}
                    </p>
                </div>
                <div className={"carousel-actions"}>
                    <div>
                        <CustomButton label={"ОБСУДИТЬ ПРОЕКТ"} onClick={() => {
                        }}/>
                    </div>
                    <SearchBar/>
                </div>
                <SliderIndicator onNext={() => handleOnNext()} onPrev={() => handleOnPrev()} current={slideData.index}
                                 total={mockData.length}/>
            </div>
        </div>
    )
}

export default CarouselBlock