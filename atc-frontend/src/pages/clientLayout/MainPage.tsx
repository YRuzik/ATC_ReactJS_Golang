import CarouselBlock from "../../components/mainPage/carouselBlock/CarouselBlock.tsx";
import ContentBlock from "../../components/mainPage/contentBlock/ContentBlock.tsx";
import HowWeWorkBlock from "../../components/mainPage/howWeWorkBlock/HowWeWorkBlock.tsx";
import ForWhoBlock from "../../components/mainPage/forWhoBlock/ForWhoBlock.tsx";
import SolutionsBlock from "../../components/mainPage/solutionsBlock/SolutionsBlock.tsx";
import AllRegionsBlock from "../../components/mainPage/allRegionsBlock/AllRegionsBlock.tsx";
import AboutUsBlock from "../../components/mainPage/aboutUsBlock/aboutUsBlock.tsx";


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
            <div className={"block-padding"}>
                <ContentBlock index={3} child={<SolutionsBlock/>}/>
            </div>
            <div className={"block-padding"}>
                <ContentBlock index={4} child={<AboutUsBlock/>}/>
            </div>
            <div className={"block-padding"}>
                <ContentBlock index={5} child={<AllRegionsBlock/>}/>
            </div>
        </div>
    )
}

export default MainPage