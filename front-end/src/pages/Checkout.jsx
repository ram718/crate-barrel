import {
    Container,
    Flex,
    Box,
    Heading,
    Text,
    Button,
    VStack,
    HStack,
    Wrap,
    WrapItem,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Textarea,
  } from '@chakra-ui/react';
  import {
    MdPhone,
    MdOutlineEmail,
  } from 'react-icons/md';
  import {  BsCreditCard2Back } from 'react-icons/bs';
  import {Link as Link} from "react-router-dom";
import Footer from '../components/Footer';

  
  export default function Checkout() {
    return (<div>
      <Container bg="whiteSmoke" maxW="full" mt={0} centerContent overflow="hidden">
        <Flex>
          <Box
            bg="black"
            color="white"
            borderRadius="lg"
            m={{ sm: 4, md: 16, lg: 10 }}
            p={{ sm: 5, md: 5, lg: 16 }}>
            <Box p={4}>
              <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                <WrapItem>
                  <Box style={{marginTop:"60%"}} >
                    <Heading>Customer Details</Heading>
                    <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                      Fill up the form below to continue payment
                    </Text>
                    <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                      <VStack pl={0} spacing={3} alignItems="flex-start">
                       
                      </VStack>
                    </Box>
                    <HStack
                      mt={{ lg: 10, md: 10 }}
                      spacing={5}
                      px={5}
                      alignItems="flex-start">
                    </HStack>
                  </Box>
                </WrapItem>
                <WrapItem>
                  <Box bg="white" borderRadius="lg">
                    <Box m={8} color="#0B0E3F">
                      <VStack spacing={5}>
                        <FormControl id="name">
                          <FormLabel>Phone Number</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<MdPhone color="gray.800" />}
                            />
                            <Input type="text" size="md" />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Mail</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<MdOutlineEmail color="gray.800" />}
                            />
                            <Input type="text" size="md" />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Address</FormLabel>
                          <Textarea
                            borderColor="gray.300"
                            _hover={{
                              borderRadius: 'gray.300',
                            }}
                            placeholder="Address"
                          />
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Credit/Debit Card</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<BsCreditCard2Back color="gray.800" />}
                            />
                            <Input type="text" size="md" />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>CVV</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            {/* <InputLeftElement
                              pointerEvents="none"
                            //   children={<color="gray.800" />}
                            /> */}
                            <Input type="password" size="md" />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name" float="right">
                          <Link to="/payment"><Button
                            variant="solid"
                            bg="black"
                            color="white"
                            _hover={{}}>
                            Pay
                          </Button></Link>
                        </FormControl>
                      </VStack>
                    </Box>
                  </Box>
                </WrapItem>
              </Wrap>
            </Box>
          </Box>
        </Flex>
      </Container>
      <div style={{backgroundColor:"black",color:"white"}}>
        <Footer/>
      </div>
    </div>
    );
  }