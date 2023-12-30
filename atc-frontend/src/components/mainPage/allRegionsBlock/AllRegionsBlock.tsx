import CustomCard, {CardStyle} from "../../other/customCard/CustomCard.tsx";

const AllRegionsBlock = () => {
    return (
        <div>
            <div className={"body-container"}>
                <h1>
                    #РЕАЛИЗУЕМ
                </h1>
                <h1>
                    ПРОЕКТЫ <span className={'gradient-h1'}> ВО ВСЕХ</span>
                </h1>
                <h1>
                    <span className={"gradient-h1"}>РЕГИОНАХ </span> <span className={"outlined-h1"}>РОССИИ</span>
                </h1>
                <div className={"w-25"}>
                    <CustomCard style={CardStyle.max_blur} child={
                        <div className={"flex-sb-c"}>
                            <h3>14</h3>
                            <p>регионов, где реализовали проекты</p>
                        </div>
                    }/>
                </div>
            </div>
        </div>
    )
}

export default AllRegionsBlock