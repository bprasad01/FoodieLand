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
} from "@chakra-ui/react";
import React from "react";

function Banner(props) {
  return (
    <Container maxW={1080} mx={"auto"}>
      <Box mt={20}>
        <Heading textAlign={"center"} fontSize={"5xl"} fontWeight={800}>
          Full Guide to Becoming a Professional Chef
        </Heading>
        <Center>
          <Grid templateColumns="repeat(2, 1fr)" gap={6} mt={10}>
            <GridItem>
              <HStack>
                <Avatar
                  name="Ryan Florence"
                  src="https://bit.ly/ryan-florence"
                />
                <Stack>
                  <Heading fontSize={"sm"}>John Smith</Heading>
                </Stack>
              </HStack>
            </GridItem>
            <GridItem>
              <Text fontSize={"sm"} mt={3}>15 March 2022</Text>
            </GridItem>
          </Grid>
        </Center>
      </Box>
    </Container>
  );
}

export default Banner;
