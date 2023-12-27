import CarouselBlock from "../../components/mainPage/carouselBlock/CarouselBlock.tsx";
import ContentBlock from "../../components/mainPage/contentBlock/ContentBlock.tsx";
import HowWeWorkBlock from "../../components/mainPage/howWeWorkBlock/HowWeWorkBlock.tsx";


const MainPage = () => {
    return (
        <div>
            <div className={"block-padding"}>
                <CarouselBlock/>
            </div>
            <div className={"block-padding"}>
                <ContentBlock index={1} child={<HowWeWorkBlock/>}/>
            </div>
        </div>
    )
}

export default MainPage