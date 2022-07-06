import React, {useState, useEffect} from "react";
import axios from "axios";
import moment from "moment";
import {
  Image,
  Box,
  Heading,
  Flex,
  Text,
  Button,
  HStack,
  Wrap,
  WrapItem,
  Avatar,
} from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BsFillAlarmFill } from "react-icons/bs";
import { ImSpoonKnife } from "react-icons/im";
import { MdOutlineSlowMotionVideo, MdKitchen } from "react-icons/md";
// If you want to use your own Selectors look up the Advancaed Story book examples
const Banner = ({ slides }) => {

  const [data, setData] = useState([]);

   const getPopularReceipeData = async () => {
    const URL = "http://95.111.202.157:8001/api/popularRecipes";
    const res = await axios.get(URL);
    const receipeData = res.data;
    setData(receipeData);
  }

  useEffect(() => {
    getPopularReceipeData();
  }, [])

  return (
    <Carousel infiniteLoop>
      {data.map((item) => {
        return (
          <Box>
            <Flex
              maxW={1024}
              mx={"auto"}
              mb={10}
              mt={10}
              bg="#EBF8FF"
              borderRadius="15px"
            >
              <Box w={512}>
                <Button borderRadius="10px" mt={10} ml={-300}>
                  <MdKitchen /> Hot Receipe
                </Button>
                <Heading fontSize="5xl" mt={25} ml={5} mr={20}>
                  {item.recipeId.title}
                </Heading>
                <Text fontSize={"sm"} ml={10} mt={5} mb={5} textAlign="justify" mr={20}>
                {item.recipeId.description}
                </Text>
                <HStack ml={10} justifyItems={"space-between"}>
                  <Button borderRadius="10px" bgColor="#EDFDFD">
                    <BsFillAlarmFill />
                    {item.recipeId.prepTime}
                  </Button>
                  <Button borderRadius="10px" bgColor="#EDFDFD">
                    <ImSpoonKnife />
                    {item.recipeId.categoryId.categoryName}
                  </Button>
                </HStack>
                <Wrap
                  spacing="160px"
                  mt={20}
                  ml={10}
                  mb={5}
                  justifyItems={"space-between"}
                >
                  <WrapItem>
                    <Avatar
                      size="sm"
                      name={"Kent Dodds"}
                      src={"http://95.111.202.157:8001/" + item.recipeId.userId.Image}
                    />
                    <Box pl={3}>
                      <Heading fontSize={"sm"}>{item.recipeId.userId.firstName}</Heading>
                      <Text fontSize={"sm"}>{moment(item.recipeId.userId.createdAt).format("MMM Do YY")}</Text>
                    </Box>
                  </WrapItem>
                  <Button borderRadius="10px" bgColor="#000" colorScheme="#fff">
                    View Receipe
                    <MdOutlineSlowMotionVideo />
                  </Button>
                </Wrap>
              </Box>
              <Box w={512}>
                <Image src={"http://95.111.202.157:8001/" + item.recipeId.image} height={460}  w={"100%"} />
              </Box>
            </Flex>
          </Box>
        );
      })}
    </Carousel>
  );
};

export default Banner;
