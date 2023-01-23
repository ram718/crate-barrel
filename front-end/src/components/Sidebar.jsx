import React, { ReactNode } from 'react';
import {
  IconButton,
  Box,
  Button,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  Image,
  FlexProps,
} from '@chakra-ui/react';
import {
  FiHome,
  FiCompass,
  FiStar,
  FiMenu,
  FiSearch
} from 'react-icons/fi';
import {CgSmartHomeLight} from "react-icons/cg"
import { IconType } from 'react-icons';
import { useState } from 'react';



const LinkItems = [
  // { name: 'All Products',term:"AllProducts" },
  // { name: 'Trending', icon: FiTrendingUp },
  { name: 'Indoor', icon:  FiHome,term:"furniture" },
  {name:"Lighting",icon:CgSmartHomeLight,term:"lighting"},
  { name: 'Outdoor', icon: FiStar,term:"outdoor"  },
  { name: 'Accessories', icon: FiCompass ,term:"kitchen" },
];

export default function Sidebar({ children,handleClick,handleSearch,handleOrder }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
        handleClick={handleClick}
        handleSearch={handleSearch}
        handleOrder={handleOrder}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}



const SidebarContent = ({ handleOrder,handleSearch,handleClick,onClose, ...rest }) => {
  const [search,setSearch] = useState("");
  

  return (
    <Box
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="absolute"
      h="full"
      {...rest}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <input type="text" placeholder='Search' onChange={(e) => setSearch(e.target.value)} style={{padding:"2%"}}/>
        <button onClick={() => handleSearch(search)} style={{marginLeft:"5px"}}><FiSearch/></button>
        {/* <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} /> */}
      </Flex>
      <Button onClick={() => handleOrder("asc")} variant={'ghost'} colorScheme={"blackAlpha.500"}>Low to High</Button>
      <Button onClick={() => handleOrder("desc")} variant={'ghost'} colorScheme={"blackAlpha.500"}>High to Low</Button>
      <br />
      <br />
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
          <Button onClick={() => handleClick(link.term)} variant={'ghost'} colorScheme={'blackAlpha.500'}>{link.name}</Button>
        </NavItem>
      ))}
    </Box>
  );
};


const NavItem = ({ icon, children, ...rest }) => {
  return (
    <Link href="#" style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};


const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent="flex-start"
      {...rest}>
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
        Logo
      </Text>
    </Flex>
  );
};