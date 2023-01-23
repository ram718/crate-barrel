import {
    Box,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    StackDivider,
    useColorModeValue,
  } from '@chakra-ui/react';
//   import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
  import { MdLocalShipping } from 'react-icons/md';
  import { Link } from 'react-router-dom';
  
  
  export default function ProductCard ({id,title,category,price,image}) {


    return (
      <Container maxW={'7xl'}>
        <Box
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 10, md: 15 }}
          marginBottom={"-2%"}
          >
          <Flex>
            <Link to={`/products/${id}`}><Image
              rounded={'md'}
              alt={title}
              src={image}
              fit={'cover'}
              align={'center'}
              w="100%"
              h={{ base: '100%', sm: '400px', lg: '500px' }}
              style={{alignItems:"center",marginBottom:"25px",marginLeft:"4%"}}
            /></Link>
          </Flex>

          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={'header'}>
              <Heading
                lineHeight={1.1}
                fontWeight="semibold"
                fontSize={{ base: 'lg', sm: 'xl', lg: '2xl' }}>
                {title}
              </Heading>
              <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={'column'}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.200', 'gray.600')}
                />
              }>
                <br />
                
              <VStack spacing={{ base: 4, sm: 6 }}>
                <Text textTransform="uppercase" fontSize={'lg'}>
                  {category}
                </Text>
              </VStack>
              <br />
              </Stack>
              <Text
                color={useColorModeValue('gray.900', 'gray.400')}
                fontWeight="bold"
                fontSize={'2xl'}>
                $ {price}
              </Text>
            </Box>

            <Link to={`/products/${id}`}><Button
              style={{marginLeft:"5%"}}
              rounded={20}
              w={"30%"}
              mt={8}
              size={'lg'}
              py={'2'}
              bg={useColorModeValue('gray.900', 'gray.50')}
              color={useColorModeValue('white', 'gray.900')}
              textTransform={'uppercase'}
              // onClick={() => handleClick(id)}
              _hover={{
                transform: 'translateY(4px)',
                boxShadow: 'lg',
              }}>
              Details
            </Button></Link>
  
            {/* <Stack direction="row" alignItems="center" justifyContent={'center'}>
              <MdLocalShipping />
              <Text>{Math.ceil(Math.random()*5)} - 7 business days delivery</Text>
            </Stack> */}
          </Stack>
        </Box>
      </Container>
    );
  }