import {Routes,Route} from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Login from "../pages/Login";
import SingleProduct from "../pages/SingleProduct";
import Cart from "../pages/Cart";
import Payment from "../pages/Payment";
import PrivateRoute from "./PrivateRoute";
import Checkout from "../pages/Checkout";

export default function AllRoutes(){
    return <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/products" element={<Products/>}></Route>
        <Route path="/products/:id" element={<PrivateRoute><SingleProduct/></PrivateRoute>}></Route>
        <Route path="/cart" element={<PrivateRoute><Cart/></PrivateRoute>}></Route>
        <Route path="/payment" element={<PrivateRoute><Payment/></PrivateRoute>}></Route>
        <Route path="/checkout" element={<PrivateRoute><Checkout/></PrivateRoute>}></Route>
    </Routes>
}