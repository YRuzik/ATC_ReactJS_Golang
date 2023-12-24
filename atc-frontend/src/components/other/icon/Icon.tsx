import {FC} from "react";
import i_menu from "../../../assets/icons/Menu.svg";

import './icon.scss'

export enum AppIcons {
    // @ts-ignore
    menu = i_menu
}

type iconProps = {
    size?: number;
    onClick?: () => void;
    icon: AppIcons;
}

const Icon: FC<iconProps> = ({icon, size = 36, onClick}) => {
    return (
        <div onClick={onClick} className={onClick ? "icon-button" : ""} style={{width: size, height: size}}>
            <img src={icon} alt={icon.toString()} width={size - 10} height={size - 10}/>
        </div>
    )
}

export default Icon