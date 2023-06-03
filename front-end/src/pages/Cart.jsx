import {
    Box,
    Center,
    Button,
    Heading,
    Text,
    Stack,
    Image,
  } from '@chakra-ui/react';
  import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
  import Footer from '../components/Footer';
  
  
export default function Cart() {
    const [data,setData] = useState([]);

    const getCartData = () => {
      let cartData = JSON.parse(localStorage.getItem("cart"));
      setData(cartData)
    }

    const getTotalPrice = data.reduce((acc,el) => {
      return acc+el.price
    },0)
    console.log(getTotalPrice)

    useEffect(() => {
      getCartData()
    },[])
  // console.log(data)

    const handleDelete = (i) => {
      data.splice(i,1);

      localStorage.setItem("cart",JSON.stringify(data))

      getCartData()
    }

    return <div>
      <div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:"25px"}}>
        {data?.map((e,i) => {
          return <Center key={e.title} py={12}>
          <Box
            role={'group'}
            p={6}
            maxW={'350px'}
            w={'full'}
            // bg={useColorModeValue('white', 'gray.800')}
            boxShadow={'2xl'}
            rounded={'lg'}
            pos={'relative'}
            zIndex={1}>
            <Box
              rounded={'lg'}
              mt={-12}
              pos={'relative'}
              height={'230px'}
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
                height={230}
                width={282}
                objectFit={'cover'}
                src={e.image}
              />
            </Box>
            <Stack pt={10} align={'center'}>
              <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                {e.category}
              </Text>
              <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                {e.title}
              </Heading>
              <Stack direction={'row'} align={'center'}>
                <Text fontWeight={600} fontSize={'xl'}>
                  $ {e.price}
                </Text>
              </Stack>
              <br />
              <Button style={{backgroundColor:"black",color:"whitesmoke"}} onClick={() => handleDelete(i)}>
                Delete
              </Button>
            </Stack>
          </Box>
        </Center>
        })}
      </div>
        <hr />
      <div style={{margin:"5%"}}>
        <Box
        role={'group'}
        p={6}
        maxW={'100%'}
        w={'full'}
        // bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}
        style={{backgroundColor:"black",color:"whitesmoke"}}
        >
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500} textDecoration={"underline"}>
                SUMMARY 
          </Heading>
          <br />
          <Text fontSize="lg">Total Items : <b>{data.length}</b></Text>
          <br />
          <Text textTransform={'uppercase'} fontWeight="bold" fontSize="xl">total : $ {getTotalPrice} USD</Text>
          <br />
          <Link to="/checkout"><Button style={{color:"black"}}>Proceed to Payment</Button></Link>
        </Box>
      </div>

    </div>

        <hr />
    <div>
      <Footer/>
    </div>

    </div>
  }