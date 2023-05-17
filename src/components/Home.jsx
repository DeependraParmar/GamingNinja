import { Box, Container, Heading, Img, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/support.png";

const headingOptions = {
    pos: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%,-50%)",
    textTransform: "uppercase",
    py: "10",
    width: "100%",
    size: "4xl"
}

export default function Home() {
  return (
    <>
        <Box>
            <MyCarousel/>
            <Container maxWidth={"container.xl"} p={"16"}>
                <Heading textTransform={"uppercase"} py={"2"} w={"fit-content"} borderBottom={"2px solid "} m={"auto"}>Services</Heading>
                <Stack h={'full'} p={"4"} alignItems={'center'} direction={['column','column','column','row']}  >
                    <Img src={img5} h={['40','400']} p={['4','16']} />
                    <Text letterSpacing={'widest'} lineHeight={'190%'} p={['4','16']} textAlign="center" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil facere veritatis a minus harum aspernatur omnis numquam quibusdam iusto quasi quod debitis vitae tempore, exercitationem sed nobis eligendi voluptatibus itaque dolore. Quaerat esse autem incidunt quos adipisci consequuntur corrupti in reprehenderit, molestias deserunt velit quis nesciunt, praesentium, architecto ratione. Vitae pariatur officiis vel, quibusdam atque odio nulla officia quisquam libero inventore praesentium soluta, fuga, sit aspernatur minima mollitia ipsam sunt id. Consequuntur optio earum officiis nulla neque velit nisi facere, ex quos architecto quo ullam dicta aliquam, corrupti quae accusamus est accusantium fugiat dolor obcaecati sint. Sed, architecto. Voluptates, suscipit.</Text>
                </Stack>
            </Container>
        </Box> 

    </>
  )
}

const MyCarousel = () => (
    <Carousel autoPlay infiniteLoop interval="5000" showStatus={false} showArrows={false}>
        <Box width={"full"} height={"100vh"} >
            <Img src={img2} />
            <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions}>The Future is Gaming</Heading>
        </Box>
        <Box width={"full"} height={"100vh"} >
            <Img src={img1} />
            <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions}>Built your Gaming Setup</Heading>
        </Box>
        <Box width={"full"} height={"100vh"} >
            <Img src={img3} />
            <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions}>Gaming will change the world</Heading>
        </Box>
        <Box width={"full"} height={"100vh"} >
            <Img src={img4} />
            <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions}>I am here for Gaming</Heading>
        </Box>
    </Carousel>
)