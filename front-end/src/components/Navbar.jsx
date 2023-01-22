import { Link } from "react-router-dom";
import {Button,Text} from "@chakra-ui/react";
import {useContext} from "react";
import { AuthContext } from "../Context/AuthContext";
import {BsCart2} from "react-icons/bs"

export default function Navbar(){
    const {isAuth,logoutUser} = useContext(AuthContext);

    const cartItem = JSON.parse(localStorage.getItem("cart"))

    const Links = [
      {path:"/",title:"Home"},
      {path:"/products",title:"Products"},
      // {path:"/login",title:"Login"},
      {path:"/cart",title:"Cart"},
    ]

    return <div style={{display:"flex",backgroundColor:"black",color:"whitesmoke",alignItems:"center",justifyContent:"space-around",marginLeft:"-5%"}}>
      <div style={{display:"flex"}}>
        {Links.map((e) => {
          return <div key={e.path}>
            <Link  to={e.path}><Button colorScheme={'blackAlpha.500'} variant={'ghost'}>{e.title}</Button></Link>
          </div>
        })}
      </div>

      <div>
        <img src="https://i.ibb.co/PQSC3Lz/crate.png" alt="logo" width="100px"/>
      </div>

      {isAuth ? <div style={{display:"flex",alignItems:"center",marginRight:"-10%"}}>
        <Text fontWeight="semibold" style={{marginRight:"20px"}}>Welcome Back, Ram</Text>
        <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" alt="avatar" width="50px"/>
        <div style={{marginLeft:"25px",display:"flex",alignItems:"center"}}>
          <Link to="/cart"><BsCart2/></Link>
          <Text style={{marginLeft:"5px"}}>{cartItem.length}</Text>
          <Button onClick={logoutUser} variant={'ghost'} colorScheme={'blackAlpha.500'}>Logout</Button>
        </div>
        
      </div> : <div>
        <Link to="/login"><Button variant={'ghost'} colorScheme={'blackAlpha.500'}>Sign in</Button></Link>
      </div>
      }
      
    </div>
}