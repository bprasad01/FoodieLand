import React, { useEffect } from "react";
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
import moment from "moment";
import BlogInfo from "./BlogInfo";
import ReceipesPost from "./ReceipesPost";
import { useState } from "react";
import Footer from "../common/Footer";
import { getOneBlogPost } from "../../utils/blogService";
import Inbox from "../Home/Inbox";

function BlogPosts(props) {

  const [blog, setBlog] = useState([]);

  const imgPath = "https://foodielandnod.herokuapp.com/";

  const blogId = props.match.params.blogId;

  const getBlogDetail = async () => {
    const { data : blog } = await getOneBlogPost(blogId);
    setBlog(blog.data);
  }

  // const getBlogDetails = async () => {
  //   const URL = `https://foodielandnod.herokuapp.com/api/getBlog?id=${blogId}`;
  //   const { data : blog } = await axios.get(URL);
  //   setBlog(blog.data);
  // }

  useEffect( () => {
    getBlogDetail();
  }, []);

  return (
    <Container maxW={1080} mx={"auto"}>
      <Box mt={20}>
        <Heading textAlign={"center"} fontSize={"5xl"} fontWeight={800}>
          {blog.title}
        </Heading>
        <Center>
          <Grid templateColumns="repeat(2, 1fr)" gap={6} mt={10}>
            <GridItem>
              <HStack>
                <Avatar
                  name="Ryan Florence"
                  src="https://bit.ly/dan-abramov"
                />
                <Stack>
                  <Heading fontSize={"sm"}>John Prince</Heading>
                </Stack>
              </HStack>
            </GridItem>
            <GridItem>
              <Text fontSize={"sm"} mt={3}>
                15 Sep 2022
              </Text>
            </GridItem>
          </Grid>
        </Center>
        <Text mt={10} fontSize={"sm"} color={"gray.500"} textAlign={"center"} mx={20}>
          {blog.description}
        </Text>
        <Box mt={10}>
        <Img src={imgPath + blog.image}  w={"100%"} borderRadius={30}/>
        </Box>
      </Box>
      <BlogInfo />
      <Inbox />
      <ReceipesPost />
      <Footer />
    </Container>
  );
}

export default BlogPosts;
// {blog.userId.firstName + " " + blog.userId.lastName}
// {moment(blog.userId.createdAt).format("MMM Do YY")}