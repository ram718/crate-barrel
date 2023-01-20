import { useState,useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import SingleProduct from "./SingleProduct";
import {Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image} from "@chakra-ui/react";

//     const IMAGE =
//   'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80';

function ProductCard({id,title,category,price,image}) {
  return (
    <Center py={12}>
      <Box
        key={id}
        role={'group'}
        p={6}
        maxW={'35%'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={10}>
        <Box
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          height='230px'
          width="100%"
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            // backgroundImage: `url(${IMAGE})`,
            filter: 'blur(15px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}>
          <Image
            rounded={'lg'}
            height="auto"
            width="100%"
            objectFit={'cover'}
            src={image}
          />
        </Box>
        <Stack pt={10} align={'center'}>
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={300}>
            {title}
          </Heading>
          <Text color={'gray.500'} fontSize={'lg'} textTransform={'uppercase'}>
            {category}
          </Text>
          <Stack direction={'row'} align={'center'}>
            <Text fontWeight={800} fontSize={'xl'}>
              $ {price}
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}

export default function Products(){
    const [data,setData] = useState([]);
    const [page,setPage] = useState(1);

    useEffect(() => {
        fetch(`http://localhost:8080/AllProducts`)
        .then((res) => res.json())
        .then((res) => setData(res))
        .catch((err) => console.log(err)) 
    },[])



    return <div style={{display:"flex"}}>
            <div>
                <Sidebar/>
            </div>
            <div style={{
                display:"grid",
                gridTemplateColumns:"repeat(2,1fr)",
                gap:"25px"
            }}>
            {data?.map((e) => {
                return <div key={e.id} style={{border:"1px solid black"}} >
                    {/* <ProductCard id={e.id} image={e.image} title={e.title} category={e.category} price={e.price}/> */}
                    <SingleProduct id={e.id} image={e.image} title={e.title} category={e.category} price={e.price}/>
                </div>
            })}
        </div>
    </div>
}

{/* <Image src={e.image} alt={e.title} width="85%"/>
                    <Text fontSize="lg" fontWeight="bold">{e.title}</Text>
                    <Text fontSize="l" fontWeight="semibold">{e.category}</Text>
                    <Text fontSize="xl" fontWeight="bold">{e.price}</Text> */}