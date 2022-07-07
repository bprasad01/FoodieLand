import React, { Component } from "react";
import axios from "axios";
import { Box, Heading, Img, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import Card from "../common/Card";
import { getAllReceipe } from "../../utils/homeService";

class Receipes extends Component {
  state = {
    popularReceipes: [],
  };

  imgPath = "http://95.111.202.157:8001/";

  async componentDidMount() {
    const { data : popularReceipes } = await getAllReceipe()
    this.setState({ popularReceipes });
  }
  render() {
    return (
      <Box maxW={1080} mx={"auto"} mt={15}>
        <Stack>
          <Heading textAlign={"center"}>Simple & Tasty Receipe</Heading>
          <Text textAlign={"center"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt <br/>ut labore et dolore magna aliqua.
          </Text>
        </Stack>
        <SimpleGrid columns={3} spacing={5}>
          {this.state.popularReceipes.map((item, index) => (
            <Card key={index} img={this.imgPath + item.recipeId.image}
            heading={item.recipeId.title} 
            time={item.recipeId.cookTime}
            category={item.recipeId.categoryId.categoryName}/>

          ))}
        </SimpleGrid>
      </Box>
    );
  }
}

export default Receipes;
