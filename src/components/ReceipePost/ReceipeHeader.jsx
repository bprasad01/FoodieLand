import React, { useState, useEffect } from "react";
import Pagination from "../common/Pagination";
import {
  Center,
  Container,
  Heading,
  Box,
  Text,
  Input,
  Button,
} from "@chakra-ui/react";
import ReceipePostList from "./ReceipePostList";
import { getAllReceipes, getPopularReceipes, getSearchReceipe } from "../../utils/receipePost";

function ReceipeHeader() {
  const [data, setReceipe] = useState([]);
  const [popularReceipe, setPopularReceipe] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery] = useState("");
  const [postsPerPage] = useState(4);

  const receipeDetails = async () => {
    const { data } = await getAllReceipes();
    setReceipe(data);
  };

  const popularReceipeDetails = async () => {
    const { data: popularReceipe } = await getPopularReceipes();
    console.log(popularReceipe);
    setPopularReceipe(popularReceipe);
  };

  const handleSearch = async (query) => {
    const { data: searchQuery } = await getSearchReceipe(query);
    setReceipe(searchQuery);
  };

  useEffect(() => {
    receipeDetails();
    popularReceipeDetails();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Container maxW={1080} mx={"auto"}>
      <Box>
        <Center>
          <Box mt={10}>
            <Heading fontSize={"5xl"}>Receipes & Article</Heading>
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
              type="text"
              name="query"
              placeholder="Search article, news or receipe..."
              size="lg"
              htmlSize={30}
              width="auto"
              borderRadius={15}
              onChange={(event) => handleSearch(event.target.value)}
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
      <ReceipePostList posts={currentPosts}  popularReceipe={popularReceipe} />
      <Center>
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={data.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </Center> 
    </Container>
  );
}

export default ReceipeHeader;
