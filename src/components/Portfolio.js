import React from 'react'
import {  
    Box,  
    Heading,  
    Flex,  
    
} from "@chakra-ui/core"; 

function Portfolio() {
    return (
        <Flex alignItems="center" justifyContent="center">
            <Box borderTop="2px" borderBottomColor="teal.500" w="100%" >
                <Heading as="h3" size="xl" textAlign="center" mt={2} mb={2}>
                    Portofolio
                </Heading>              
            </Box>
        </Flex>
    )
}

export default Portfolio;