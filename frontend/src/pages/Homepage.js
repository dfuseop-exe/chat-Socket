import React from 'react'
import {Container, Tab, TabList, TabPanel, TabPanels, Tabs, Text} from '@chakra-ui/react';
import { Box } from '@chakra-ui/react'
import Login from '../Components/Authentication/Login';
import Signup from '../Components/Authentication/Signup';


const Homepage = () => {
    return (
        <Container maxW='xl' centerContent>
            <Box
                d='flex'
                justifyContent = "center"
                p={3}
                bg={'white'}
                w='100%'
                m="30px 0 15px 0"
                borderRadius = "lg"
                borderWidth = "1px"
            >
                <Text fontSize="4xl" fontFamily="Work sans">Chat-With-<span style={{color:'black' , fontWeight : 'bold'}}>Socket</span></Text>
            </Box>
            <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px" marginBottom='20px'>
            <Tabs variant='soft-rounded' outline='none' >
                <TabList mb='1em'>
                    <Tab width='50%'>Log In</Tab>
                    <Tab width='50%'>Sign Up</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <Login/>
                    </TabPanel>
                    <TabPanel>
                        <Signup/>
                    </TabPanel>
                </TabPanels>
                </Tabs>
            </Box>
        </Container>
    )
}

export default Homepage
