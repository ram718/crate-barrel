import {Routes,Route} from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Login from "../pages/Login";

export default function AllRoutes(){
    return <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/products" element={<Products/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
    </Routes>
}