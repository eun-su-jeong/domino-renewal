import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "../pages/Main";
import Menu from "../pages/Menu";
import Detail from '../pages/Detail';
import Cart from '../pages/Cart';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/menu" element={<Menu />} />
                <Route path="/menu/:id" element={<Detail />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;