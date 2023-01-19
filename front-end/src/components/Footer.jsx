import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaTwitter, FaYoutube, FaInstagram,FaTiktok,FaFacebook,FaPinterest } from 'react-icons/fa';

// import AppStoreBadge from '@/components/AppStoreBadge';
// import PlayStoreBadge from '@/components/PlayStoreBadge';

const ListHeader = ({children}) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

// const SocialButton = ({
//   children,
//   label,
//   href,
// }) => {
//   return (
//     <chakra.button
//       bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
//       rounded={'full'}
//       w={8}
//       h={8}
//       cursor={'pointer'}
//       as={'a'}
//       href={href}
//       display={'inline-flex'}
//       alignItems={'center'}
//       justifyContent={'center'}
//       transition={'background 0.3s ease'}
//       _hover={{
//         bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
//       }}>
//       <VisuallyHidden>{label}</VisuallyHidden>
//       {children}
//     </chakra.button>
//   );
// };

export default function Footer() {
  return <Box>
    <Box
      bg={useColorModeValue('black.50', 'black.900')}
      color={useColorModeValue('black.700', 'black.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={'flex-start'}>
            <ListHeader>Company</ListHeader>
            <Link href={'#'}>About Us</Link>
            <Link href={'#'}>Blog</Link>
            <Link href={'#'}>Careers</Link>
            <Link href={'#'}>Contact Us</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Support</ListHeader>
            <Link href={'#'}>Help Center</Link>
            <Link href={'#'}>Safety Center</Link>
            <Link href={'#'}>Community Guidelines</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Legal</ListHeader>
            <Link href={'#'}>Cookies Policy</Link>
            <Link href={'#'}>Privacy Policy</Link>
            <Link href={'#'}>Terms of Service</Link>
            <Link href={'#'}>Law Enforcement</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <Text fontSize="sm" fontWeight="semibold">Social Media</Text>
            <br />
            <Stack direction={'row'} spacing={6}>
                <FaFacebook/>
                <FaInstagram />
                <FaPinterest/>
                <FaYoutube />
                <FaTiktok/>
            </Stack>
            <br />
            <Text fontSize="sm">Show us your look with:</Text>
            <Text fontSize="xs">#CrateStyle</Text>
            <Text fontSize="xs">#CrateKidsStyle</Text>
            {/* <ListHeader>Install App</ListHeader> */}
            {/* <AppStoreBadge />
            <PlayStoreBadge /> */}
          </Stack>
        </SimpleGrid>
      </Container>

      {/* <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('black.200', 'black.700')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ md: 'space-between' }}
          align={{ md: 'center' }}>
          
          
        </Container>
      </Box> */}
    </Box>
        <hr />
        <Box
            bg={useColorModeValue('black.50', 'black.900')}
            color={useColorModeValue('black.700', 'black.200')}>
            <Container as={Stack} maxW={'6xl'} py={10}>
            <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
            <Stack align={'flex-start'}>
                <ListHeader>Our Company</ListHeader>
                <Link href={'#'}>About Us</Link>
                <Link href={'#'}>Careers</Link>
                <Link href={'#'}>Responsible Design</Link>
                <Link href={'#'}>Store Locations and Events</Link>
            </Stack>

            <Stack align={'flex-start'}>
                <ListHeader>Resources</ListHeader>
                <Link href={'#'}>Customer Support</Link>
                <Link href={'#'}>Account</Link>
                <Link href={'#'}>Return Policy</Link>
                <Link href={'#'}>Shipping Information</Link>
                <Link href={'#'}>Email and Text Preferences</Link>
                <Link href={'#'}>Gift Cards</Link>
                <Link href={'#'}>Catalogs</Link>
                <Link href={'#'}>Product Recalls</Link>
                <Link href={'#'}>Accessibility Statement</Link>
                <Link href={'#'}>CA Supply Chains Act</Link>
                <Link href={'#'}>Do Not Sell My Personal Information</Link>
                <Link href={'#'}>Cookie Settings</Link>
            </Stack>

            <Stack align={'flex-start'}>
                <ListHeader>Legal</ListHeader>
                <Link href={'#'}>Cookies Policy</Link>
                <Link href={'#'}>Privacy Policy</Link>
                <Link href={'#'}>Terms of Service</Link>
                <Link href={'#'}>Law Enforcement</Link>
            </Stack>
            </SimpleGrid>
            </Container>
        </Box>
    </Box>
}