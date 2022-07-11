import React from "react";
import {
  Box,
  Center,
  Container,
  Grid,
  GridItem,
  Heading,
  HStack,
  Avatar,
  Stack,
  Text,
  Img,
} from "@chakra-ui/react";
import banner from '../../Images/Chef1.jpg';

function Banner(props) {
  return (
    <Container maxW={1080} mx={"auto"}>
      <Box mt={20}>
        <Heading textAlign={"center"} fontSize={"5xl"} fontWeight={800}>
          Full Guide to Becoming a Professional Chef
        </Heading>
        <Center>
          <Grid templateColumns="repeat(2, 1fr)" gap={6} mt={10}>
            <GridItem>
              <HStack>
                <Avatar
                  name="Ryan Florence"
                  src="https://bit.ly/ryan-florence"
                />
                <Stack>
                  <Heading fontSize={"sm"}>John Smith</Heading>
                </Stack>
              </HStack>
            </GridItem>
            <GridItem>
              <Text fontSize={"sm"} mt={3}>
                15 March 2022
              </Text>
            </GridItem>
          </Grid>
        </Center>
        <Text mt={10} fontSize={"sm"} color={"gray.500"} textAlign={"center"} mx={20}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, , quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Text>
        <Box mt={10}>
        <Img src={banner} borderRadius={30}/>
        </Box>
      </Box>
    </Container>
  );
}

export default Banner;
