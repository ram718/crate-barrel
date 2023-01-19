import { useState,useEffect } from "react";

export default function Products(){
    const [data,setData] = useState([])

    useEffect(() => {
        fetch(`http://localhost:8080/furniture`)
        .then((res) => res.json())
        .then((res) => setData(res))
        .catch((err) => console.log(err)) 
    },[])



    return <div style={{
        display:"grid",
        gridTemplateColumns:"repeat(3,1fr)",
        gap:"25px"
    }}>
        {data?.map((e) => {
            return <div key={e.id}>
                <img src={e.image} alt={e.title} />
            </div>
        })}
    </div>
}