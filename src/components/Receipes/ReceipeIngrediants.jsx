import { Box, Flex, Heading, Stack, List, ListItem, ListIcon, VStack, Divider, HStack, Img, Text, Spacer } from "@chakra-ui/react";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FiCircle } from "react-icons/fi";
import FoodImg1 from '../../Images/food01.jpg'
import FoodImg2 from '../../Images/food02.jpg'
import FoodImg3 from '../../Images/food03.jpg'


function ReceipeIngrediants(props) {
  return (
    <Box maxW={1080} mx={"auto"}>
      <Flex mt={10}>
        <Box>
          <Stack spacing={5}>
            <Heading fontSize={"4xl"}>Ingredients</Heading>
            <Heading fontSize={"lg"}>For Main Dish</Heading>
            <VStack>
            <List spacing={8}>
              <ListItem as='s' color={"gray.400"}>
                <ListIcon as={FaCheckCircle} color={"#000"} />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit
              </ListItem>
              <Divider />
              <ListItem>
                <ListIcon as={FiCircle}  />
                Assumenda, quia temporibus eveniet a libero incidunt suscipit
              </ListItem>
              <Divider />
              <ListItem>
                <ListIcon as={FiCircle}/>
                Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
              </ListItem>
              <Divider />
              {/* You can also use custom icons from react-icons */}
              <ListItem>
                <ListIcon as={FiCircle}/>
                Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
              </ListItem>
              <Divider />
            </List>
            </VStack>
            <Heading mt={10} fontSize={"lg"}>For The Sauce</Heading>
            <VStack>
            <List spacing={8}>
              <ListItem>
                <ListIcon as={FiCircle}/>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit
              </ListItem>
              <Divider />
              <ListItem>
                <ListIcon as={FiCircle}/>
                Assumenda, quia temporibus eveniet a libero incidunt suscipit
              </ListItem>
              <Divider />
              <ListItem>
                <ListIcon as={FiCircle}/>
                Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
              </ListItem>
              <Divider />
              {/* You can also use custom icons from react-icons */}
              <ListItem>
                <ListIcon as={FiCircle}/>
                Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
              </ListItem>
              <Divider />
            </List>
            </VStack>
          </Stack>
        </Box>
        <Spacer />
        <Box w={380}>
            <Heading fontSize={"4xl"}>Other Receipe</Heading>
            <Stack mt={5}>
                <HStack>
                    <Img w={180} h={110} borderRadius={30} src={FoodImg3}/>
                    <Stack>
                    <Heading fontSize={"lg"}>Chicken MeatBall With Creamy Cheese</Heading>
                    <Heading fontSize={"sm"} color={"gray.400"}>By Andreas Paul</Heading>
                    </Stack>
                </HStack>
                <HStack>
                    <Img w={180} h={110} borderRadius={30} src={FoodImg2}/>
                    <Stack>
                    <Heading fontSize={"lg"}>Chicken MeatBall With Creamy Cheese</Heading>
                    <Heading fontSize={"sm"} color={"gray.400"}>By Andreas Paul</Heading>
                    </Stack>
                </HStack>
                <HStack>
                    <Img w={180} h={110} borderRadius={30} src={FoodImg1}/>
                    <Stack>
                    <Heading fontSize={"lg"}>Chicken MeatBall With Creamy Cheese</Heading>
                    <Heading fontSize={"sm"} color={"gray.400"}>By Andreas Paul</Heading>
                    </Stack>
                </HStack>
                <HStack>
                    <Img mt={20} w={"100%"} h={300} src={FoodImg3}/>
                </HStack>
            </Stack>
        </Box>
      </Flex>
    </Box>
  );
}

export default ReceipeIngrediants;
