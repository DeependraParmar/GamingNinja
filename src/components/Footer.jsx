import { Box, Button, Heading, HStack, Input, Stack, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { AiOutlineSend,AiFillYoutube,AiFillInstagram,AiFillLinkedin,AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <>
        <Box bgColor={"blackAlpha.900"} p={'8'} color='white'>
            <Stack direction={['column','row']}  >
                <VStack alignItems={'stretch'} w='full' px={'4'} >
                    <Heading size={'md'} textTransform='uppercase' my={'4'}  >
                        Subscibe for new Updates
                    </Heading>
                    <HStack>
                        <Input placeholder='Enter Email here...' borderRadius='none'
                        outline={'none'} focusBorderColor='none' />
                        <Button padding={'0'} color='purple' variant={'ghost'} borderRadius='0 20px 20px 0' >
                            <AiOutlineSend size={'20'} />
                        </Button>
                    </HStack>
                </VStack>
                <VStack w={'full'} >
                    <Heading textTransform={'uppercase'} textAlign='center' >Video Hub</Heading>
                    <Text fontSize={'14'} >All Rights Reserved 2023-27</Text>
                </VStack>
                <VStack w={'full'} >
                      <Heading size={'md'} textTransform='uppercase' my={'4'}  >Social Media</Heading>
                      <HStack>
                    <Button variant={'link'} colorScheme='gray' >
                        <a target={'_blank'} href="https://www.youtube.com/@learnlogics"><AiFillYoutube size={'20'} /></a>
                    </Button>
                    <Button variant={'link'} colorScheme='gray' >
                        <a target={'_blank'} href="https://www.instagram.com/_deependra.parmar"><AiFillInstagram size={'20'} /></a>
                    </Button>
                    <Button variant={'link'} colorScheme='gray' >
                        <a target={'_blank'} href="https://www.github.com/DeependraParmar"><AiFillGithub size={'20'} /></a>
                    </Button>
                    <Button variant={'link'} colorScheme='gray' >
                        <a target={'_blank'} href="https://www.linkedin.com/in/deependraparmar"><AiFillLinkedin size={'20'} /></a>
                    </Button>
                      </HStack>
                </VStack>
            </Stack>
        </Box> 
    </>
  )
}

export default Footer;
