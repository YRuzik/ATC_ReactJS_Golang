import {BrowserRouter, Route, Routes} from "react-router-dom";
import ClientLayout from "./layouts/ClientLayout.tsx";
import MainPage from "./pages/clientLayout/MainPage.tsx";

function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<ClientLayout/>}>
                <Route index element={<MainPage/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
