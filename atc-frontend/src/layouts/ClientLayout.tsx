import {Outlet} from "react-router-dom";

const ClientLayout = () => {
    return (
        <div className={"body-container"}>
            <Outlet/>
        </div>
    )
}

export default ClientLayout