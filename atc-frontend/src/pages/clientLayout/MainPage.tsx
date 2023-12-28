import CarouselBlock from "../../components/mainPage/carouselBlock/CarouselBlock.tsx";
import ContentBlock from "../../components/mainPage/contentBlock/ContentBlock.tsx";
import HowWeWorkBlock from "../../components/mainPage/howWeWorkBlock/HowWeWorkBlock.tsx";
import ForWhoBlock from "../../components/mainPage/forWhoBlock/ForWhoBlock.tsx";


const MainPage = () => {
    return (
        <div>
            <div className={"block-padding"}>
                <CarouselBlock/>
            </div>
            <div className={"block-padding"}>
                <ContentBlock index={1} child={<HowWeWorkBlock/>}/>
            </div>
            <div className={"block-padding"}>
                <ContentBlock index={2} child={<ForWhoBlock/>}/>
            </div>
        </div>
    )
}

export default MainPage