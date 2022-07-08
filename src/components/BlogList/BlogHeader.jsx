import React, { useState, useEffect } from "react";
import {
  Center,
  Container,
  Heading,
  Box,
  Text,
  Input,
  Button,
  Flex,
  Img,
  HStack,
  Avatar,
  Stack,
} from "@chakra-ui/react";
import food1 from "../../Images/food01.jpg";
import { getAllBlogs } from '../../utils/blogService';

function BlogHeader(props) {

    const [data, setBlogs ] = useState([]);

    const imgPath = "https://foodielandnod.herokuapp.com/";
    const blogsDetails = async () => {
        const { data } = await getAllBlogs();
        console.log(data);
        setBlogs(data);
    }

    useEffect(() => {
        blogsDetails();
    })

  return (
    <Container maxW={1080} mx={"auto"}>
      <Box>
        <Center>
          <Box mt={10}>
            <Heading fontSize={"5xl"}>Blog & Article</Heading>
          </Box>
        </Center>
        <Center>
          <Text mt={5} color={"gray.600"} fontSize={"sm"}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Text>
        </Center>
        <Center>
          <Box mt={12}>
            <Input
              placeholder="Search article, news or receipe..."
              size="lg"
              htmlSize={30}
              width="auto"
              borderRadius={15}
            />
            <Button
              borderRadius={15}
              bgColor={"#000"}
              color={"#fff"}
              size={"lg"}
              ml={2}
            >
              Search
            </Button>
          </Box>
        </Center>
      </Box>
      <Flex mt={20}>
        <Box w={750}>
        {data.map(item => {
            return(
            <Flex mb={5}>
              <Box w={250}>
                <Img src={imgPath + item.image} w={220} h={200} borderRadius={20} />
              </Box>
              <Box w={400}>
                <Heading fontSize={"md"}>
                  {item.title}
                </Heading>
                <Text fontSize={"sm"} color={"gray.500"} textAlign={"justify"}>
                  {item.description}
                </Text>
                <HStack mt={35}>
                  <Avatar
                    name="Ryan Florence"
                    src="https://bit.ly/ryan-florence"
                    size="sm"
                  />
                  <Heading fontSize={"sm"} fontWeight={800}>
                    John Smith
                  </Heading>
                  <Text fontSize={"sm"} color={"gray.500"}>
                    15 March 2022
                  </Text>
                </HStack>
              </Box>
            </Flex>)
        })}
        </Box>
        <Box ml={10}>
          <Heading fontSize={"2xl"}>Tasty Receipes</Heading>
          <Flex>
            <Box>
            <HStack mt={5}>
              <Img w={180} h={120} borderRadius={30} src={food1} />
              <Stack>
                <Heading fontSize={"lg"}>
                  Chicken MeatBall With Creamy Cheese
                </Heading>
                <Heading fontSize={"sm"} color={"gray.400"}>
                  By Andreas Paul
                </Heading>
              </Stack>
            </HStack>
            <HStack mt={5}>
              <Img w={180} h={120} borderRadius={30} src={food1} />
              <Stack>
                <Heading fontSize={"lg"}>
                  Chicken MeatBall With Creamy Cheese
                </Heading>
                <Heading fontSize={"sm"} color={"gray.400"}>
                  By Andreas Paul
                </Heading>
              </Stack>
            </HStack>
            <HStack mt={5}>
              <Img w={180} h={120} borderRadius={30} src={food1} />
              <Stack>
                <Heading fontSize={"lg"}>
                  Chicken MeatBall With Creamy Cheese
                </Heading>
                <Heading fontSize={"sm"} color={"gray.400"}>
                  By Andreas Paul
                </Heading>
              </Stack>
            </HStack>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
}

export default BlogHeader;
