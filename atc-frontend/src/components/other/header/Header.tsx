import "./header.scss"
import logo from "../../../assets/img/logo.png"
import CustomLink from "../customLink/CustomLink.tsx";
import CustomButton, {ButtonStyles} from "../customButton/CustomButton.tsx";

const Header = () => {
    return (
        <div className={'header-wrapper'}>
            <div className={"header-container flex-sb-c"}>
                <div className={"flex-s-c w-50"}>
                    <img className={"mr-5"} alt={"logo"} src={logo}/>
                    <div className={"header-content"}>
                        <CustomLink className={"mr-5"} path={"/products"} label={"Products"}/>
                        <CustomLink className={"mr-5"} path={"/features"} label={"Features"}/>
                        <CustomLink className={"mr-5"} path={"/pricing"} label={"Pricing"}/>
                        <CustomLink className={"mr-5"} path={"/support"} label={"Support"}/>
                    </div>
                </div>
                <div className={"flex-e-c w-50 header-content"}>
                    <h4 className={'mr-5'}>+7 (999)-999-99-99</h4>
                    <h4 className={'mr-5'}>test@mail.ru</h4>
                    <CustomButton style={ButtonStyles.outlinedButton} label={"Обсудить проект"} onClick={() => {
                    }}/>
                </div>
            </div>
        </div>
    )
}

export default Header