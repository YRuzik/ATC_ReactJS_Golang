import CustomCard, {CardStyle} from "../../other/customCard/CustomCard.tsx";
import Icon, {AppIcons} from "../../other/icon/Icon.tsx";
import "./aboutUsBlock.scss"

const AboutUsBlock = () => {
    return (
        <div>
            <div className={"flex-sb-c body-container"}>
                <div className={"w-50 flex-sb-c card-gap"}>
                    <CustomCard child={
                        <div className={"c-flex-sb-s height-400"}>
                            <div>
                                <h1>
                                    5 лет
                                </h1>
                                <h5>Успешной работы</h5>
                            </div>
                            <Icon icon={AppIcons.calendar}/>
                        </div>
                    }
                                style={CardStyle.gradient}
                    />
                    <CustomCard child={
                        <div className={"c-flex-sb-s height-400"}>
                            <Icon icon={AppIcons.toolbox}/>
                            <div>
                                <h1>
                                    100
                                </h1>
                                <h5>
                                    Реализованных проектов
                                </h5>
                            </div>
                        </div>
                    }
                                style={CardStyle.blur}
                    />
                    <CustomCard child={
                        <div className={"c-flex-sb-c height-400"}>
                            <Icon icon={AppIcons.handshake}/>
                            <div>
                                <h1>
                                    30
                                </h1>
                                <p>
                                    партнеров-поставщиков оборудования
                                </p>
                            </div>
                        </div>
                    }
                    />
                </div>
                <div className={"w-50 p-5"}>
                    <h1 className={"mb-"}>
                        #О КОМПАНИИ
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        <br/>
                        <br/>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutUsBlock