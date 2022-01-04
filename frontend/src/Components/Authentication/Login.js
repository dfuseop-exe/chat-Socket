import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react';
import React, { useState } from 'react'


const Login = () => {
    const [show, setshow] = useState(false);
    const [form, setform] = useState({
        email : '',
        password : '',
    })
    
    const handleClick = () => {
        setshow(!show);
    }

    const submitHandler = () => {

    }

    return (
        <VStack spacing='5px'>
            <FormControl id='email' isRequired>
                <FormLabel>Email</FormLabel>
                <Input 
                    placeholder="Enter your email"
                    onChange={(e)=>{setform({email: e.target.value})}}
                />
            </FormControl>

            <FormControl id='password' isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                    <Input 
                        type={show ? "text" : "password"}
                        placeholder="Enter your password"
                        onChange={(e)=>{setform({password: e.target.value})}}
                    />
                    <InputRightElement width='4.5rem'>
                        <Button h="1.75rem" size="sm" onClick={handleClick}>
                        {show ? "Hide" : "Show"}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>

            <Button
                colorScheme='blue'
                width='100%'
                style={{marginTop : 15}}
                onClick={submitHandler}
            >log in</Button>
        </VStack>
    )
}

export default Login
