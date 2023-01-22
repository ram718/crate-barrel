import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    Box,Image,Button
  } from '@chakra-ui/react';
import { Link as Link } from 'react-router-dom';
import Footer from '../components/Footer';

function Payment() {

    return  <div>
                <Box style={{marginTop:"5%",marginBottom:"5%"}}>
                {/* <Image style={{marginLeft:"50%"}} src="https://images.ctfassets.net/wtodlh47qxpt/E2WVSq4FOeSCRAGy6LZZa/11c68fb3611baabb79e0ae892338098d/3_Strips.png" alt="image" ></Image> */}
                    <Alert
                        status='success'
                        variant='subtle'
                        flexDirection='column'
                        alignItems='center'
                        justifyContent='center'
                        textAlign='center'
                        height='auto'
                        backgroundColor={"black"}
                        >
                        <AlertIcon boxSize='50px' mr={0} />
                        <AlertTitle mt={4} mb={1} fontSize='xl' style={{color:"whiteSmoke"}}>
                            Payment Successful !
                        </AlertTitle>
                        <br />
                        <AlertDescription maxWidth='sm' style={{color:"whiteSmoke"}}>
                            Thanks for choosing <b>Crate&Barrel.</b>
                            <br/> 
                            <br />
                            Your Shipment will be delivered as soon as possible.
                        </AlertDescription>
                        <img style={{marginTop:"2%"}} src="https://media0.giphy.com/media/XzfgnmZVTnaOrAGFi3/200w.webp?cid=ecf05e4700wx5nlqe5f603srr5pyw3tupmqgsdyprqendhgt&rid=200w.webp&ct=g" alt="" />
                        
                    </Alert>
                </Box>
                <Box justifyContent={"space-evenly"}>
                    <Link to="/"><Button backgroundColor={"black"} padding="1%" marginBottom={"2%"} color="white">Got to Home</Button></Link>
                    <Link to="/products"><Button backgroundColor={"black"} padding="1%" marginBottom={"2%"} marginLeft={"2%"} color="white">Pick up from our nearest store 📍</Button></Link>
                </Box> 
                <Box style={{backgroundColor:"black",color:"white"}}>
                    <Footer/>
                </Box>
            </div>
    
}
export default Payment;