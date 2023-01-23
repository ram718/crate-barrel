import {
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    Image,
    useToast
  } from '@chakra-ui/react';
  import {useState,useEffect,useContext} from "react";
  import {AuthContext} from "../Context/AuthContext"
  import {Navigate,Link} from "react-router-dom";
import Loader from '../components/Loader';

  function Toast() {
    const toast = useToast()
    return (
    //   <Button
    //     onClick={() =>
          toast({
            title: 'Logged-in Success',
            description: "We've created your account for you.",
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
    //     }
    //   >
    //     Show Toast
    //   </Button>
    )
  }
  
  export default function Login() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const {isAuth,loginUser} = useContext(AuthContext);
    const [loading,setLoading] = useState(false);

    const handleLogin = () => {
      setLoading(true)
        fetch(`https://reqres.in/api/login`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({email,password})
        })
        .then((res) => res.json)
        .then((res) => {
          loginUser()
          setLoading(false)
        })
        .catch((err) => setLoading(false))
    }

    // console.log(isAuth)

    if(isAuth){
      return <Navigate to="/"></Navigate>
    }


    return (
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex flex={1}>
          <Image
            alt={'Login Image'}
            objectFit={'cover'}
            src={
              'https://i.ibb.co/PQSC3Lz/crate.png'
            }
          />
        </Flex>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={4} w={'full'} maxW={'md'}>
            <Heading fontSize={'2xl'}>Sign in to your account</Heading>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </FormControl>
            <Stack spacing={6}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'black'}>Forgot password?</Link>
              </Stack>
              <Button colorScheme={'black'} variant={'solid'} style={{color:"white",backgroundColor:"black"}} onClick={handleLogin}>
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Flex>
      </Stack>
    );
  }