import React from 'react'
import {  
    Box,  
    Heading,  
    Flex,  
    Text,
    Image,
    Stack,
    Button,
    Badge,
} from "@chakra-ui/core";

export default function ImagePortfolio() {
    return (
        <Box bg='white' p={5} borderWidth={1}  rounded="md" shadow="md">
            <Flex>
                <Image src="https://bit.ly/2Z4KKcF" width='380px' height='200px'></Image>
                
            </Flex>
            <Box mb={5} mt={2}>
                <Box>
                    <Heading size='md' color='black'>SIDESA</Heading>
                </Box>
                <Text fontSize='14px' color='teal.600' fontWeight='bold'>Sistem Informasi Desa Memudahkan Desa Untuk Mengelola Data</Text>
            </Box>
            
            <Stack isInline>
                <Button rightIcon="arrow-forward" variantColor="teal" variant="solid">
                    Demo
                </Button>
            </Stack>
            
        </Box>
    )
}
