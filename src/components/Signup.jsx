import { Avatar, Button, Container, Heading, Input, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {
  return (
    <>
          <Container maxW={'container.xl'} h='100vh' p='16' >
              <form action="">
                  <VStack alignItems={'stretch'} spacing='6' width={['full', '96']} m='auto' my={'16'} >
                      <Heading textTransform={'uppercase'} textAlign='center' fontSize={['30', '40']} >Video Hub</Heading>
                      <Avatar alignSelf={'center'} boxSize='24' colorScheme={'purple'} />
                      <Input required focusBorderColor={'purple.500'} placeholder='Name' type={'name'} outline='none' />
                      <Input required focusBorderColor={'purple.500'} placeholder='Email' type={'email'} outline='none' />
                      <Input required focusBorderColor={'purple.500'} placeholder='Set New Password' type={'password'} />
                      <Button colorScheme={'purple'} type='submit'>Sign Up</Button>
                      <Text textAlign={'right'}>Existing User?{" "}
                          <Button variant={'link'} colorScheme='purple' >
                              <Link to={'/login'}>Login</Link>
                          </Button> </Text>

                  </VStack>
              </form>
          </Container>  
    </>
  )
}
