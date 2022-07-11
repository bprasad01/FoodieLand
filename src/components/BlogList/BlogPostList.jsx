import React from 'react';
import { Box, Flex, Img, Heading, Text, HStack, Avatar, Stack } from '@chakra-ui/react';
import food1 from "../../Images/food01.jpg";
import poster from '../../Images/poster3.png';
import moment from 'moment';
const BlogPostList = ({ posts }) => {

    const defaultAvatarImg = "https://bit.ly/ryan-florence";
    const imgPath = "https://foodielandnod.herokuapp.com/";
    return (
        <Box>
        <Flex mt={20}>
        <Box w={750}>
        {posts.map(item => {
            return(
            <Flex mb={5}>
              <Box w={250}>
                <Img src={imgPath + item.image ? food1 : imgPath + item.image} w={220} h={200} borderRadius={20} />
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
                    name="AV"
                    src={imgPath + item.userId.Image ? defaultAvatarImg : imgPath + item.userId.Image}
                    size="sm"
                  />
                  <Heading fontSize={"sm"} fontWeight={800}>
                    {item.userId.firstName + " " + item.userId.lastName}
                  </Heading>
                  <Text fontSize={"sm"} color={"gray.500"}>
                    {moment(item.userId.createdAt).format("MMM Do YY")}
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
          <Img src={poster} mt={5}/>
        </Box>
      </Flex>
        </Box>
    );
}

export default BlogPostList;