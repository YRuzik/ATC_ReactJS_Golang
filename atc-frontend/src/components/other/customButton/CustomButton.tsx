import {FC} from "react";
import "./customButton.scss";

export enum ButtonStyles {
    outlinedButton = "outlined-button",
    elevatedButton = "elevated-button"
}

type customButtonProps = {
    label: string;
    style?: ButtonStyles;
    onClick: () => void;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
}

const CustomButton: FC<customButtonProps> = ({
                                                 label,
                                                 onClick,
                                                 type = "button",
                                                 style = ButtonStyles.elevatedButton,
                                                 disabled = false
                                             }) => {
    return <button type={type} onClick={() => onClick()} disabled={disabled} className={style}>{label}</button>
}

export default CustomButton