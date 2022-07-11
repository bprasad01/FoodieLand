import {
  Box,
  Button,
  Grid,
  GridItem,
  HStack,
} from "@chakra-ui/react";
import React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumber = [];

  const pageSize = Math.ceil(totalPosts / postsPerPage);

  for (let i = 1; i <= pageSize; i++) {
   pageNumber.push(i);
  }
  return (
    <Box>
      <Grid templateColumns={6} gap={6}>
          <HStack mt={5}>
            {pageNumber.map((number) => (
              <GridItem>
                <Button
                size={"lg"}
                  onClick={() => paginate(number)}
                  bgColor={"gray.200"}
                  borderRadius={15}
                  color={"#000"}
                   _hover={{ bg: "#000", color: " #fff" }}
                >
                  {number}
                </Button>
              </GridItem>
            ))}
          </HStack>
      </Grid>
    </Box>
  );
};

export default Pagination;
