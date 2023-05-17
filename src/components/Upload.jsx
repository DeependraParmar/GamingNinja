import { Button, Container, HStack, Input, VStack } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineCloudUpload } from "react-icons/ai";

export default function Upload() {
    return (
        <>
            <Container maxW={'container.xl'} p={'24'} h={'100vh'} >
                <VStack color={'purple.600'} h='full' justifyContent={'center'} >
                    <AiOutlineCloudUpload size={'10vmax'} />
                    <form>
                        <HStack>
                            <Input required type={'file'} css={{
                                '&::file-selector-button': {
                                    border: 'none',
                                    width: 'calc(100% + 36px)',
                                    height: '100%',
                                    marginLeft: '-18px',
                                    color: 'purple',
                                    backgroundColor: 'white',
                                    cursor: 'pointer'
                                }
                            }} />
                            <Button color={'purple'} type='submit' >Upload</Button>
                        </HStack>
                    </form>
                </VStack>
            </Container>
        </>
    )
}
