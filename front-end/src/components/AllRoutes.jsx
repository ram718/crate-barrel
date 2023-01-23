import {Routes,Route} from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";

export default function AllRoutes(){
    return <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/products" element={<Products/>}></Route>
    </Routes>
}