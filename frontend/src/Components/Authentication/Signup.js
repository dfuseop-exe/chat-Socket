import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const Signup = () => {
    const [form, setform] = useState({
        name : '',
        email : '',
        password : '',
        confirmpassword : '',
        pic : '',
    })

    const [show, setshow] = useState(false)

    const handleClick = () => {
        setshow(!show);
    }

    const postDetails = (pics)=>{

    }

    const submitHandler = () => {

    }

    return (
        <VStack spacing='5px'>
            <FormControl id='first-name' isRequired>
                <FormLabel>Name</FormLabel>
                <Input 
                    placeholder="Enter your name"
                    onChange={(e)=>{setform({name: e.target.value})}}
                />
            </FormControl>

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

            <FormControl id='password' isRequired>
                <FormLabel>Confirm Password</FormLabel>
                <InputGroup>
                    <Input 
                        type={show ? "text" : "password"}
                        placeholder="Enter confirm password"
                        onChange={(e)=>{setform({confirmpassword: e.target.value})}}
                    />
                    <InputRightElement width='4.5rem'>
                        <Button h="1.75rem" size="sm" onClick={handleClick}>
                        {show ? "Hide" : "Show"}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>

            <FormControl id='pic'>
                <FormLabel>Upload profile picture</FormLabel>
                <Input 
                    type="file"
                    p={1.5}
                    accept="image/*"
                    onChange={(e)=>postDetails(e.target.files[0])}
                />
            </FormControl>

            <Button
                colorScheme='blue'
                width='100%'
                style={{marginTop : 15}}
                onClick={submitHandler}
            >Sign up</Button>
        </VStack>
    )
}

export default Signup
