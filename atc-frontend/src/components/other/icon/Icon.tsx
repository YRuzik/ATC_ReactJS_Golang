// @ts-nocheck

/// ts error while using enum with paths to files
///TODO find fix error

import {FC} from "react";
import i_menu from "../../../assets/icons/Menu.svg";
import i_search from "../../../assets/icons/Search.svg";
import i_next from "../../../assets/icons/Next.svg";
import i_circle from "../../../assets/icons/Circle.svg";

import './icon.scss'

export enum AppIcons {
    menu = i_menu,
    search = i_search,
    next = i_next,
    circle = i_circle
}

type iconProps = {
    size?: number;
    onClick?: () => void;
    icon: AppIcons;
}

const Icon: FC<iconProps> = ({icon, size = 36, onClick}) => {
    return (
        <div onClick={onClick} className={onClick ? "icon-button" : undefined}>
            <img src={icon} alt={icon.toString()} width={size} height={size}/>
        </div>
    )
}

export default Icon