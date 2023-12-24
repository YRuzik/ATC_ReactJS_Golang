import {FC, useEffect, useRef, useState} from "react";
import "./burgerMenu.scss"
import {createPortal} from "react-dom";
import logo from "../../../../assets/img/logo.png"
import {useNavigate} from "react-router-dom";
import CustomButton, {ButtonStyles} from "../../customButton/CustomButton.tsx";

type burgerMenuProps = {
    isOpen: boolean;
    onClose: () => void;
}

const domElement = document.getElementById("burger-menu")

const BurgerMenu: FC<burgerMenuProps> = ({isOpen, onClose}) => {
    const [isIn, setAnimation] = useState(true)
    const menuRef = useRef<HTMLDivElement>(null);
    let timerId: number;

    useEffect(() => {
        if (menuRef !== null && isOpen) {
            const listener = (e: any) => {
                if (e.target?.contains(menuRef.current) && e.target !== menuRef.current) {
                    setAnimation(false)
                    timerId = setTimeout(() => {
                        onClose()
                    }, 300)
                }
            }
            document.addEventListener("click", listener)
            return () => {
                document.removeEventListener("click", listener)
                setAnimation(true)
                if (timerId) {
                    clearTimeout(timerId)
                }
            }
        }
    }, [onClose, isOpen]);

    if (isOpen && domElement) return createPortal(
        <div className={`menu-wrapper ${isIn ? "wrapper-in" : "wrapper-out"}`}>
            <div ref={menuRef} className={`menu-container ${isIn ? "menu-in" : "menu-out"}`}>
                <div className={"menu-first-section"}>
                    <div>
                        <img src={logo} alt={logo.toString()}/>
                    </div>
                    <BurgerMenuLink label={"Products"} path={"/products"}/>
                    <BurgerMenuLink label={"Features"} path={"/features"}/>
                    <BurgerMenuLink label={"Pricing"} path={"/pricing"}/>
                    <BurgerMenuLink label={"Support"} path={"/support"}/>
                </div>
                <div className={"menu-second-section m-5"}>
                    <span className={"mb-5"}>Контакты</span>
                    <p>
                        tel: +7 (999)-999-99-99
                    </p>
                    <p className={"mb-5"}>
                        e-mail: test@mail.ru
                    </p>
                    <CustomButton label={"Обсудить проект"} onClick={() => {}} style={ButtonStyles.outlinedButton}/>
                </div>
            </div>
        </div>,
        domElement)
}

type burgerMenuLinkProps = {
    label: string;
    path: string;
}

const BurgerMenuLink: FC<burgerMenuLinkProps> = ({label, path}) => {
    const navigate = useNavigate()
    return (
        <div className={"burger-menu-link"} onClick={() => navigate(path)}>
            {label}
        </div>
    )
}

export default BurgerMenu