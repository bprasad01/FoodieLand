import React from "react";
import {
  Box,
  Button,
  Center,
  Grid,
  GridItem,
  Heading,
  Img,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaInstagram } from "react-icons/fa";
import InstaImg1 from "../../Images/food-9.png";
import InstaImg2 from "../../Images/food-10.png";
import InstaImg3 from "../../Images/food-11.png";
import InstaImg4 from "../../Images/food-12.png";

function InstaPost(props) {
  function Feature({ img, title, location, desc, postDesc, ...rest }) {
    return (
      <Box p={5} shadow="md" borderWidth="1px" {...rest}>
      <Heading fontSize="xl">{title}</Heading>
      <Text mt={2}>{location}</Text>
        <Img src={img} />
        <Text mt={4}>{desc}</Text>
        <Text mt={4}>{postDesc}</Text>
      </Box>
    );
  }
  return (
    <Box maxW={1080} mx={"auto"} >
      <Stack mt={25}>
        <Heading fontSize={"4xl"} mt={20} textAlign={"center"}>
          Check Out @foodieland on Instagram
        </Heading>
        <Text fontSize={"md"} mt={15} textAlign={"center"}>
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups.
        </Text>
      </Stack>
      <Box mt={10} mb={10}>
        <Grid templateColumns="repeat(4, 1fr)" gap={5}>
          <GridItem w="100%">
            <Feature title="Foodieland" img={InstaImg1} location="Tokyo, Japan" desc="Liked by craig_love & 122,000" postDesc="FoodieLand lorem ipsum dolor sit amet" />
          </GridItem>
          <GridItem w="100%">
            <Feature title="Foodieland" img={InstaImg2} location="Tokyo, Japan" desc="Liked by craig_love & 122,000" postDesc="FoodieLand lorem ipsum dolor sit amet" />
          </GridItem>
          <GridItem w="100%">
            <Feature title="Foodieland" img={InstaImg3} location="Tokyo, Japan" desc="Liked by craig_love & 122,000" postDesc="FoodieLand lorem ipsum dolor sit amet" />
          </GridItem>
          <GridItem w="100%">
            <Feature title="Foodieland" img={InstaImg4} location="Tokyo, Japan" desc="Liked by craig_love & 122,000" postDesc="FoodieLand lorem ipsum dolor sit amet" />
          </GridItem>
        </Grid>
      </Box>
      <Box bgGradient="linear(to-b, white.0, blue.100)" >
        <Center>
          <Button bgColor={"#000"} color={"#fff"} mb={15}>
            {<FaInstagram />}Visit Our Instagram
          </Button>
        </Center>
      </Box>
    </Box>
  );
}

export default InstaPost;
