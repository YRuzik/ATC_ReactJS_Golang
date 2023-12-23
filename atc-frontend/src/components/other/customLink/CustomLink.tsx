import {Link} from "react-router-dom";
import {FC} from "react";
import './customLink.scss'

type customLinkProps = {
    path: string;
    label: string;
    className?: string;
}

const CustomLink: FC<customLinkProps> = ({path, label, className}) => {
    return <Link to={path} className={`custom-link ${className}`}>{label}</Link>
}

export default CustomLink