import {Image,Text} from "@chakra-ui/react";
import {Link,NavLink} from "react-router-dom"

export default function Home(){
    return <div>

        {/* top section */}

        <div>
            <div>
            <Image src="https://cb.scene7.com/is/image/Crate/cb_dHP_20230111_HeroV2?wid=1440&qlt=80&op_sharpen=1"></Image>
            <Text fontSize="3xl" fontWeight="bold" style={{marginTop:"-51%"}}>the great living room refresh</Text>
            </div>
            <div style={{color:"white",border:"1px solid black",margin:"10px 0 0 40%",width:"300px",backgroundColor:"black"}}>
                <Text fontWeight="bold" fontSize="xl">SHOP TOP-RATED SOFAS</Text>
            </div>
            <div style={{margin:"42% 75% 0 0"}}>
                <Link to="/products"><Text fontWeight="bold" fontSize="xl">SHOP ALL IN - STOCK FURNITURE →</Text></Link>
            </div>
        </div>

        <div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)"}}>
                <Image src="https://cb.scene7.com/is/image/Crate/cb_dHP_20230111_AccentChairs?wid=720&qlt=80"></Image>
                <Image src="https://cb.scene7.com/is/image/Crate/cb_dHP_20230111_ThrowPillows?wid=720&qlt=80&op_sharpen=1"></Image>
                <Image src="https://cb.scene7.com/is/image/Crate/cb_dHP_20230111_CoffeeTables?wid=720&qlt=80"></Image>
                <Image src="https://cb.scene7.com/is/image/Crate/cb_dHP_20230112_CurtainsV2?wid=720&qlt=80&op_sharpen=1"></Image>
            </div>
        </div>

        <div>
            <video autoPlay width="100%">
                <source  src="https://s7d5.scene7.com/is/content/Crate/Video/cb_dHP_20230111_NewArrivals_V4_Flash9_Autox720p_2600k.mp4" type="video/mp4"></source>
            </video>
            <Image src="https://cb.scene7.com/is/image/Crate/cb_dHP_20230111_DiningRoom?wid=1440&qlt=80&op_sharpen=1"></Image> 
            <Image src="https://cb.scene7.com/is/image/Crate/cb_dHP_20230111_Rugs?wid=1440&qlt=80&op_sharpen=1"></Image>
            <Image src="https://cb.scene7.com/is/image/Crate/cb_dHP_20230103_Hero?wid=1440&qlt=90&op_sharpen=1"></Image>
            <div style={{margin:"-55.5% 0 0 84%"}}>
                <Image src="https://cb.scene7.com/is/image/Crate/cb_dHP_20220908_GRLogo?wid=277&qlt=90&fmt=png-alpha&op_sharpen=1" width="150px" height="200px"></Image>
            </div>
            
        </div>

        <Image style={{display:"flex",marginTop:"41%"}} src="https://cb.scene7.com/is/image/Crate/cb_dHP_20230102_Partyslate?wid=1440&qlt=90&op_sharpen=1"></Image>

        <Image src="https://cb.scene7.com/is/image/Crate/cb_dHP_20230110_Electrics?wid=1440&qlt=90&op_sharpen=1"></Image>

        <div style={{display:"flex"}}>
            <Image src="https://cb.scene7.com/is/image/Crate/cb_dHP_20230112_CoffeeMaker?wid=720&qlt=80&op_sharpen=1"></Image>    
            <Image src="https://cb.scene7.com/is/image/Crate/cb_dHP_20230112_CoffeeCups?wid=720&qlt=80&op_sharpen=1"></Image>
        </div> 

        <Image src="https://cb.scene7.com/is/image/Crate/cb_dHP_20230102_Organization?wid=1440&qlt=80&op_sharpen=1" ></Image>   
        <Image src="https://cb.scene7.com/is/image/Crate/cb_dHP_20221225_8_Cookware?wid=1440&qlt=80&op_sharpen=1"></Image>    

        <div style={{display:"flex"}}>
            <Image src="https://cb.scene7.com/is/image/Crate/cb_dHP_20230102_CrateKitchen_Portrait?wid=720&qlt=80" width="50%"></Image>
            <video autoPlay width="50%">
                <source src="https://s7d5.scene7.com/is/content/Crate/Video/cb_dHP_20230102_CrateKitchenVideo.mp4" type="video/mp4"/>
            </video>
        </div>

        <div>
            <Image src="https://cb.scene7.com/is/image/Crate/cb_dHP_20230102_Italian?wid=1440&qlt=80&op_sharpen=1"></Image>
            <Image src="https://cb.scene7.com/is/image/Crate/cb_dHP_20230102_CrateKids?wid=1440&qlt=80&op_sharpen=1"></Image>
        </div>
        
        <div>
             <video>
                <source autoPlay src="https://s7d5.scene7.com/is/content/Crate/Video/cb_dHP_20230102_BabyRegistry.mp4" type="video/mp4"/>
            </video>
            <Image style={{margin:"-40% 0 0 40%"}} src="https://cb.scene7.com/is/image/Crate/cb_dHP_20220908_BRLogo?wid=455&qlt=90&fmt=png-alpha&op_sharpen=1" width="20%"></Image>
        </div>
        
        <div >
            <Text style={{margin:"18% 70% 0 0"}} fontWeight="semibold">Crate and Barrel History</Text>
            <Text style={{margin:"5px 0 0 5.4%",width:"80%"}}>With over 100 stores in North America and franchise partners in 9 countries, Crate & Barrel, Crate & Kids and CB2 are the international destination</Text>
            <Text style={{margin:"0 0 0 -39%"}}>for lasting, modern <Link to="/products">furniture</Link>, textiles, <Link to="/products">kitchen</Link>, <Link to="/products">tableware</Link> and <Link to="/products">home decor</Link>. <NavLink style={{textDecoration:"underline"}} to="/">See More →</NavLink></Text>
        </div>
    </div>
}