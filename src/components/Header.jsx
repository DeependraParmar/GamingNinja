import React from 'react';
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton
    , Button,
    useDisclosure,
    VStack,
    HStack
} from '@chakra-ui/react';
import { Link } from "react-router-dom";
import { BiMenuAltLeft } from "react-icons/bi";

export default function Header() {
    const {isOpen,onOpen,onClose} = useDisclosure();
    return (
        <>
            <Button pos={"fixed"} zIndex='10' left={"4"} top={"4"} p={"0"} height={"10"} width={"0"} colorScheme={"purple"} borderRadius={"full"} onClick={onOpen}>
                <BiMenuAltLeft />
            </Button>

            <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
                <DrawerOverlay/>
                <DrawerContent>
                    <DrawerCloseButton/>
                    <DrawerHeader>Video Collection</DrawerHeader>
                    <DrawerBody>
                        <VStack >
                            <Button onClick={onClose} width={"full"} colorScheme={"purple"} variant={"ghost"}>
                                <Link width={"full"}  to={"/"}>Home</Link>
                            </Button>
                            <Button onClick={onClose} width={"full"} colorScheme={"purple"} variant={"ghost"}>
                                <Link width={"full"} to={"/videos"}>Videos</Link>
                            </Button>
                            <Button onClick={onClose} width={"full"} colorScheme={"purple"} variant={"ghost"}>
                                <Link width={"full"} to={"/videos?category=free"}>Free Videos</Link>
                            </Button>
                            <Button onClick={onClose} width={"full"} colorScheme={"purple"} variant={"ghost"}>
                                <Link width={"full"} to={"/upload"} >Upload Video</Link>
                            </Button>
                        </VStack>

                        <HStack pos={"absolute"} bottom={"10"} width={'full'} justifyContent="center" left="0">
                            <Button onClick={onClose} colorScheme={"purple"}>
                                <Link to={"/login"}>Log In</Link>
                            </Button>
                            <Button onClick={onClose} colorScheme={"purple"} variant={"outline"}>
                                <Link to={"/signup"}>Sign Up</Link>
                            </Button>
                        </HStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}
