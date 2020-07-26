import React from 'react'
import {  
    Box,  
    Heading,  
    Flex,  
    Text,
    Image,
    Stack,
    Badge,
} from "@chakra-ui/core";  
import Typical from 'react-typical';

function Header() {
    return (
        <Flex>
            <Box p={5} w="100%"  rounded="md">
            <Image
                rounded="full"
                size="150px"
                src="https://s7.gifyu.com/images/Picture1f3f633cdcc6e4b28.png"
                alt="Holil Rahman"
                display= "block"
                margin= "0 auto"
                />
                
                <Heading as="h3" size="xl" textAlign="center" marginTop="5px">Holilurrahman</Heading>
                
                <Heading as="h4" size="md" mt={1} textAlign="center">
                    <Typical
                    steps={['Junior Web Developer 🖥️', 1000, 'Desain Grafis 👨🏾‍🎨', 1000]}
                    loop={Infinity}
                    wrapper="p"
                /></Heading>
                
                    <Stack isInline display="flex" justifyContent="center" alignItems="center" mt={2}>
                        <Badge rounded="full" px="2" variantColor="green">Python</Badge>
                        <Badge rounded="full" px="2" variantColor="yellow">Javascript</Badge>
                        <Badge rounded="full" px="2" variantColor="blue">PHP</Badge>
                    </Stack>
                <Text mt={3} textAlign="center">
                
                 Saya seorang Pengembang Web yang mulai terjun ke dunia pemrograman dan desain grafis pada tahun 2017. 
                Saya sangat senang dengan dunia pemrograman web, saya dapat membangun situs web saya sendiri menggunakan bahasa pemrograman seperti PHP, Python, Javascript dan lainnya. Saya membangun semuanya dengan antusias dan penuh semangat.
                </Text>
            </Box>

        </Flex>
    )
}

export default Header;