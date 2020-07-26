import React from 'react'
import {  
    Box,  
    Heading,  
    Flex,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Stack,
    InputGroup,
    InputLeftElement,
    Icon,
    Button,
    Textarea,
    Divider,
}  from "@chakra-ui/core"; 
import { MdPerson } from "react-icons/md";


export default function Contact() {
    return (
        <Flex alignItems="center" justifyContent="center">
        <Box borderTop="2px" w="100%" mb={10} >
            <Heading as="h3" size="xl" textAlign="center" mt={2} mb={5}>
                Kontak
            </Heading>
            <Box width='350px' margin='auto'>
                <Stack spacing={3}>
                    <FormControl isRequired>
                        <InputGroup shadow='md'>
                            <InputLeftElement children={<MdPerson/>}></InputLeftElement>
                            <Input type='name' placeholder='Nama Lengkap' aria-label='First name'/>
                        </InputGroup>
                    </FormControl>
                    <FormControl isRequired>
                        <InputGroup shadow='md'>
                            <InputLeftElement children={<Icon name='email'/>}></InputLeftElement>
                            <Input type='email' placeholder='Alamat Email' aria-label='Email'/>
                        </InputGroup>
                    </FormControl>
                    <FormControl isRequired>
                        <InputGroup shadow='md'>
                            <Textarea  placeholder='Deskripsi' aria-label='Deskripsi'/>
                        </InputGroup>
                    </FormControl>
                    <Divider/>
                    <Button variantColor='teal' type='submit' shadow='sm' _hover={{ boxShadow: 'md' }} _active={{ boxShadow: 'lg' }} >Kirim</Button>
                </Stack>
            
            </Box>
            
            
        </Box>
    </Flex>
    )
}
