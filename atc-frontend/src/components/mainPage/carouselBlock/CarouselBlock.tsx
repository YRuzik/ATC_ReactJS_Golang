import first from "../../../assets/img/carouselBlock/first.jpg"
import second from "../../../assets/img/carouselBlock/second.jpg"
import third from "../../../assets/img/carouselBlock/third.jpg"
import {useState} from "react";
import "./carouselBlock.scss"
import CustomButton from "../../other/customButton/CustomButton.tsx";
import SearchBar from "../../other/searchBar/SearchBar.tsx";
import SliderIndicator from "../../other/sliderIndicator/SliderIndicator.tsx";


const CarouselBlock = () => {
    const mockData = [
        {
            title: "внедрение мультимедийных решений для конференц залов",
            subtitle: "Системный интегратор мультимедийных решений",
            description: "Комплексное оснащение конференц-залов, ситуационных центров, переговорных комнат, учебных центров и пр.",
            img_url: first
        },
        {
            title: "Системный интегратор мультимедийных решений и что-то там еще",
            subtitle: "внедрение мультимедийных решений для конференц залов",
            description: "Комплексное оснащение конференц-залов, ситуационных центров, переговорных комнат, учебных центров и пр.",
            img_url: second
        },
        {
            title: "внедрение мультимедийных решений для конференц залов",
            subtitle: "Системный интегратор мультимедийных решений",
            description: "Комплексное оснащение конференц-залов, ситуационных центров, переговорных комнат, учебных центров и пр.",
            img_url: third
        },
    ]

    const [slideData, setSlideData] = useState(mockData[0])
    const [slideIndex, setIndex] = useState(0)
    const [isAnimating, setAnimation] = useState(false)

    const handleOnNext = () => {
        const normalizedIndex = slideIndex + 1;
        setAnimation(true)
        setTimeout(() => {
            if (normalizedIndex === mockData.length) {
                setSlideData(mockData[0])
                setIndex(0)
            } else {
                setSlideData(mockData[slideIndex + 1])
                setIndex(slideIndex + 1)
            }
            setAnimation(false)
        }, 300)
    }

    const handleOnPrev = () => {
        const normalizedIndex = slideIndex + 1;
        setAnimation(true)
        setTimeout(() => {
            if (normalizedIndex === 1) {
                setSlideData(mockData[mockData.length - 1])
                setIndex(mockData.length - 1)
            } else {
                setSlideData(mockData[slideIndex - 1])
                setIndex(slideIndex - 1)
            }
            setAnimation(false)
        }, 300)
    }

    return (
        <div>
            <div >
                <div className={"carousel-image-tint"}></div>
                <img className={`carousel-image ${isAnimating ? "image-out" : "image-in"}`} src={slideData.img_url} alt={slideData.title} width={"100%"}/>
            </div>
            <div className={"body-container"}>
                <div className={`carousel-changeable-area ${isAnimating ? "transform-out" : "transform-in"}`}>
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
                        <CustomButton label={"ОБСУДИТЬ ПРОЕКТ"} onClick={() => {}}/>
                    </div>
                    <SearchBar/>
                </div>
                <SliderIndicator onNext={() => handleOnNext()} onPrev={() => handleOnPrev()} current={slideIndex} total={mockData.length}/>
            </div>
        </div>
    )
}

export default CarouselBlock