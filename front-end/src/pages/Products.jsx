import { useState,useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import ProductCard from "./ProductCard";
import Loader from "../components/Loader";
import {Button} from "@chakra-ui/react";


export default function Products(){
    const [data,setData] = useState([]);
    const [page,setPage] = useState(1);
    const [search,setSearch] = useState("");
    const [loading,setLoading] = useState(false);
    const [item,setItem] = useState("AllProducts");
    const [orderBy,setOrderBy] = useState("");

    const getData = () => {
     return fetch(`http://localhost:8080/${item}?_limit=10&_page=${page}&q=${search}&_sort=price&_order=${orderBy}`)
        .then((res) => res.json())
    }

    useEffect(() => {
        setLoading(true)
        getData()
        .then((res) => {
            setData(res)
            setLoading(false)
        })
        .catch((err) => setLoading(false)) 
    },[page,item,search,orderBy])

    const handleClick = (val) => {
        setItem(val);
        getData()
    }

    const handleSearch = (val) => {
        val ? setSearch(val) : setSearch("");
        getData()
    }

    const handleOrder = (val) => {
        val ? setOrderBy(val) : setOrderBy("");
        getData()
    }
    


    return loading ? <Loader/> : 
    <div>
        <div style={{display:"flex"}}>
        <div>
            <Sidebar handleClick={handleClick} handleSearch={handleSearch} handleOrder={handleOrder}/>
            
        </div>
        <div style={{
                display:"grid",
                gridTemplateColumns:"repeat(2,1fr)",
                gap:"25px"
            }}>
            {data?.map((e) => {
                return <div key={e.id}  >
                    {/* <ProductCard id={e.id} image={e.image} title={e.title} category={e.category} price={e.price}/> */}
                    <ProductCard id={e.id} image={e.image} title={e.title} category={e.category} price={e.price}/>
                </div>
            })}
            </div>
        
        
        </div>
        <div style={{margin:"3% 0 4% 18%"}}>
            <button onClick={() => setPage(page - 1)} disabled={page === 1} style={{backgroundColor:"black",borderRadius:"20%",padding:"1%",marginRight:"25px",width:"70px",color:"white"}}>Prev</button>
            <button disabled>{page}</button>
            <button onClick={() => setPage(page + 1)} disabled={page === Math.ceil(20/10)} style={{backgroundColor:"black",borderRadius:"20%",padding:"1%",marginLeft:"25px",width:"70px",color:"white"}}>Next</button>
        </div>
        <hr />
        <div style={{padding:"2%",backgroundColor:"black",color:"whiteSmoke",marginLeft:"17%"}}>
            <Footer/>
        </div>
    </div>
    
};