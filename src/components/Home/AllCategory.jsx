import {
  Box,
  Button,
  Heading,
  HStack,
  Grid,
  GridItem,
  Image,
  Text,
  Img,
  Flex
} from "@chakra-ui/react";
import React, { Component } from "react";
import axios from "axios";

class AllCategory extends Component {
  state = {
    categories: [],
  };

  getAllCategories = async () => {};

  async componentDidMount() {
    const URL = "http://95.111.202.157:8001/api/getAllCategory";
    const res = await axios.get(URL);
    const categories = res.data;
    this.setState({ categories });
  }

  render() {
    return (
      <Box maxW={1080} mx={"auto"} mt={100}>
        <HStack justifyContent={"space-between"} mb={20}>
          <Heading>Categories</Heading>
          <Button bgColor="#EBF8FF" borderRadius="10px">View All Category</Button>
        </HStack>
        <Box h={"100%"} w={"100%"}>
        <Grid templateColumns="repeat(6, 1fr)" gap={6}>
          {this.state.categories.slice(0,6).map((item) => (
            <GridItem w="100%" >
              <Img  src={"http://95.111.202.157:8001/" + item.image}/>
              <Text fontSize={"md"} fontWeight={400} textAlign={"center"}>{item.categoryName}</Text>
              </GridItem>
    ))}
        </Grid>
        </Box>
      </Box>
    );
  }
}

export default AllCategory;
