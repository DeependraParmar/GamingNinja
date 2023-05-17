import { Button, Container, Heading, Input, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <>
        <Container maxW={'container.xl'} h='100vh' p='16' >
            <form action="">
                <VStack alignItems={'stretch'} spacing='8' width={['full','96']} m='auto' my={'16'} >
                    <Heading textTransform={'uppercase'} textAlign='center' fontSize={['30','40']} >Welcome Back</Heading>
                    <Input required focusBorderColor={'purple.500'} placeholder='Email' type={'email'} outline='none' />
                    <Input required focusBorderColor={'purple.500'} placeholder='Password' type={'password'} />
                    <Button variant={'link'} alignSelf='end' >
                        <Link to={'/forgotpassword'}>Forgot Password?</Link>
                    </Button>
                    <Button colorScheme={'purple'} type='submit'>Login</Button>
                    <Text textAlign={'right'}>New User?{" "}
                          <Button variant={'link'} colorScheme='purple' >
                              <Link to={'/signup'}>Sign Up</Link>
                          </Button> </Text>
                      
                </VStack>
            </form>
        </Container> 
    </>
  )
}
