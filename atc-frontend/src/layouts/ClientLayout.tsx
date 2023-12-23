import {Outlet} from "react-router-dom";
import Header from "../components/other/header/Header.tsx";

const ClientLayout = () => {
    return (
        <div>
            <Header/>
            <div className={"body-container"}>
                <Outlet/>
            </div>
        </div>
    )
}

export default ClientLayout