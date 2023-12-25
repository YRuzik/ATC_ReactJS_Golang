import {Outlet} from "react-router-dom";
import Header from "../components/other/header/Header.tsx";

const ClientLayout = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    )
}

export default ClientLayout