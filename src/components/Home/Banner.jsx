import React, {useState, useEffect} from "react";
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
import { getPopularReceipes } from '../../utils/homeService';
import defaultImg from '../../Images/chicken.jpg';

const Banner = () => {

  const [data, setData] = useState([]);

  const imgPath = "https://foodielandnod.herokuapp.com/";

  const receipeDetails = async () => {
    const {data : data} = await getPopularReceipes();
    setData(data);
  }

  useEffect(() => {
    receipeDetails();
  }, [])

  return (
    <Carousel infiniteLoop>
      {data.map((item) => {
        return (
          <Box key={item._id}>
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
                      src={imgPath + item.recipeId.categoryId.image}
                    />
                    <Box pl={3}>
                      <Heading fontSize={"sm"}>{item.recipeId.categoryId.categoryName}</Heading>
                      <Text fontSize={"sm"}>{moment(item.recipeId.categoryId.createdAt).format("MMM Do YY")}</Text>
                    </Box>
                  </WrapItem>
                  <Button borderRadius="10px" bgColor="#000" colorScheme="#fff">
                    View Receipe
                    <MdOutlineSlowMotionVideo />
                  </Button>
                </Wrap>
              </Box>
              <Box w={512}>
                <Image src={imgPath + item.image ? defaultImg : imgPath + item.image} height={460}  w={"100%"} />
              </Box>
            </Flex>
          </Box>
        );
      })}
    </Carousel>
  );
};

export default Banner;
