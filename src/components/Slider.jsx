import React, { Component } from "react";
import axios from "axios";
import {
  Text,
  Flex,
  Box,
  Heading,
  Button,
  HStack,
  Wrap,
  WrapItem,
  Avatar,
  Image,
} from "@chakra-ui/react";
import { BsFillAlarmFill } from "react-icons/bs";
import { ImSpoonKnife } from "react-icons/im";
import { MdOutlineSlowMotionVideo, MdKitchen } from "react-icons/md";
import ReceipeImage from "../Images/chicken.jpg";
class Slider extends Component {
  state = {
    receipes: [],
  };

  async componentDidMount() {
    const URL = "http://95.111.202.157:8001/api/popularRecipes";
    const res = await axios.get(URL);
    const receipes = res.data;
    this.setState({ receipes });
  }

  render() {
    return (
      <Box>
        <Flex
          maxW={1080}
          mt={10}
          mx="auto"
          mb={10}
          bg="#EBF8FF"
          borderRadius="15px"
        >
          <Box w={540}>
            <Button borderRadius="10px" mt={10} ml={10}>
              <MdKitchen /> Hot Receipe
            </Button>
            <Heading fontSize="4xl" mt={25} ml={10} mr={20}>
              Spicy Delicious Chicken Wings
            </Heading>
            <Text fontSize={"sm"} ml={10} mt={5} mb={5}>
              Lorem ipsum dolor sit amet, Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s
            </Text>
            <HStack ml={10} justifyItems={"space-between"}>
              <Button borderRadius="10px" bgColor="#EDFDFD">
                <BsFillAlarmFill />
                30 Minutes
              </Button>
              <Button borderRadius="10px" bgColor="#EDFDFD">
                <ImSpoonKnife />
                Chicken
              </Button>
            </HStack>
            <Wrap
              spacing="160px"
              mt={120}
              ml={10}
              justifyItems={"space-between"}
            >
              <WrapItem>
                <Avatar
                  size="sm"
                  name="Kent Dodds"
                  src="https://bit.ly/kent-c-dodds"
                />
                <Box pl={3}>
                  <Heading fontSize={"sm"}>John Smith</Heading>
                  <Text fontSize={"sm"}>20 March 2022</Text>
                </Box>
              </WrapItem>
              <Button borderRadius="10px" bgColor="#000" colorScheme="#fff">
                View Receipe
                <MdOutlineSlowMotionVideo />
              </Button>
            </Wrap>
          </Box>
          <Box w={540}>
            <Image borderRadius="15px" src={ReceipeImage} />
          </Box>
        </Flex>
      </Box>
    );
  }
}

export default Slider;
