import React, { Component } from "react";
import axios from "axios";
import { Box, Heading, Flex, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import Card from "./common/Card";

class AllReceipes extends Component {
  state = {
    popularReceipes: [],
  };

  async componentDidMount() {
    const URL = "http://95.111.202.157:8001/api/v1/getAllRecipes";
    const res = await axios.get(URL);
    const popularReceipes = res.data;
    console.log(popularReceipes);
    this.setState({ popularReceipes });
  }
  render() {
    return (
      <Box maxW={1080} mx={"auto"} >
        <Flex mt={30}>
          <Heading w={540}>Try this delicious receipe<br/> to make your day</Heading>
          <Text w={540}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </Flex>
        <SimpleGrid columns={4} spacing={5}>
          {this.state.popularReceipes.map((item, index) => (
            <Card key={index} img={"http://95.111.202.157:8001/" + item.recipeId.image}
            heading={item.recipeId.title} 
            time={item.recipeId.cookTime}
            category={item.recipeId.categoryId.categoryName}/>

          ))}
        </SimpleGrid>
      </Box>
    );
  }
}

export default AllReceipes;
