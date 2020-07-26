
    import React from "react";  
    import {  
        Box,  
        Heading,  
        Flex,  
        Link,  
        useColorMode,  
        IconButton,
        Button,
        ButtonGroup,
        Text,
        Stack,  
    } from "@chakra-ui/core";  
    import { FaGithub,FaFacebookSquare,FaInstagramSquare,FaLinkedin } from "react-icons/fa";

    const MenuItems = ({ children }) => (  
        <Link mt={{ base: 4, md: 0 }} mr={6} display="block">  
            {children}  
        </Link>  
    );  
      
    const Footer = props => {  
        const { colorMode, toggleColorMode } = useColorMode();  
        return (  
            <Flex  
                as="footer"  
                align="center"  
                justify="center"  
                wrap="wrap"  
                padding="1.5rem"  
                bg={colorMode === "light" ? "gray.900" : "teal.500"}  
                color={colorMode === "light" ? "teal.300" : "white"}  
                borderBottom="1px solid black"  
                {...props}  
            >  
                <Box align="center">  
                    <Heading as="h2" size="xs" alignItems="center">  
                    &copy; {new Date().getFullYear()} Holilrahman  
                    </Heading>
                    <Stack isInline>
                        <IconButton variantColor="teal"  icon={FaGithub} />
                        <IconButton variantColor="teal"  icon={FaFacebookSquare} />
                        <IconButton variantColor="teal"  icon={FaInstagramSquare} />
                    </Stack>
                    
                </Box>
                
            </Flex> 
            
        );  
    };  
      
export default Footer;  
