import {
  Box,
  Flex,
  Heading,
  HStack,
  Text,
  Avatar,
  Stack,
  Icon,
  Button,
  Img,
  Spacer,
  Grid,
  Divider,
  GridItem,
} from "@chakra-ui/react";
import React from "react";
import { RiTimerFill } from "react-icons/ri";
import { TbMinusVertical, TbToolsKitchen } from "react-icons/tb";
import { FiPrinter } from "react-icons/fi";
import { FiShare } from "react-icons/fi";
import ReceipeImg from "../../Images/food-9.png";
import { useState } from "react";
import { getOneReceipePost } from "../../utils/receipePost";
import { useEffect } from "react";

function ReceipeInfo(props) {
  const [receipePost, setReceipePost] = useState([]);

  const imgPath = "https://foodielandnod.herokuapp.com/";

  const receipeId = props.receipeId;
  // console.log(receipeId);

  
  useEffect(() => {
    getReceipeDetail();
  }, []);
  
  const getReceipeDetail = async () => {
    const { data: receipePost } = await getOneReceipePost(receipeId);
    setReceipePost(receipePost.data);
  };
  console.log("receipe" + receipePost);
 
  let miny = JSON.stringify(receipePost.recipeId);
  console.log(miny);
  // console.log("post" , typeof(receipePost.recipeId));
  

  return (
    <Box maxW={1080} mx={"auto"}>
      <Flex mt={20}>
        <Box w={700}>
          {receipePost.map( item => {
           
              <>
              <Heading fontSize={"5xl"} fontWeight={800}>
              {item.recipeId.title}
            </Heading>
            <Flex mt={5}>
              <Grid templateColumns="repeat(4, 1fr)" gap={6}>
                <GridItem>
                  <HStack>
                    <Avatar
                      name="Ryan Florence"
                      src="https://bit.ly/ryan-florence"
                    />
                    <Stack>
                      <Heading fontSize={"md"}>john Smith</Heading>
                      <Text fontSize={"sm"}>15 March 2022</Text>
                    </Stack>
                  </HStack>
                </GridItem>
                <GridItem>
                  <HStack>
                    <Icon w={8} h={8}>
                      <RiTimerFill />
                    </Icon>
                    <Stack>
                      <Heading fontSize={"md"}>Prep Time</Heading>
                      <Text fontSize={"sm"}>15 Minutes</Text>
                    </Stack>
                  </HStack>
                </GridItem>
                <GridItem>
                  <HStack>
                    <Icon w={8} h={8}>
                      <RiTimerFill />
                    </Icon>
                    <Stack>
                      <Heading fontSize={"md"}>Cook Time</Heading>
                      <Text fontSize={"sm"}>15 Minutes</Text>
                    </Stack>
                  </HStack>
                </GridItem>
  
                <GridItem>
                  <HStack>
                    <Icon w={8} h={8}>
                      <TbToolsKitchen />
                    </Icon>
                    <Stack>
                      <Text>Chicken</Text>
                    </Stack>
                  </HStack>
                </GridItem>
              </Grid>
            </Flex>
            <Stack mt={8}>
              <Img w="100%" h={500} borderRadius={30} src={ReceipeImg} />
            </Stack></>
            
          })}
         
        </Box>
        <Box ml={5} w={380}>
          <HStack pl={280}>
            <Button size="md" bgColor={"#BEE3F8"} borderRadius={35}>
              <FiPrinter />
            </Button>
            <Button size="md" bgColor={"#BEE3F8"} borderRadius={35}>
              <FiShare />
            </Button>
          </HStack>
          <Box mt={120} ml={5} bgColor={"#EBF8FF"} borderRadius={20}>
            <Heading fontSize={"2xl"} pl={5} pt={5}>
              Nutrition Information
            </Heading>
            <Grid mt={5}>
              <HStack mx={5}>
                <Text>Calory</Text>
                <Spacer />
                <Text>123</Text>
              </HStack>
              <Divider />
              <HStack mx={5} mt={5}>
                <Text>Calory</Text>
                <Spacer />
                <Text>123</Text>
              </HStack>
              <Divider />
              <HStack mx={5} mt={5}>
                <Text>Calory</Text>
                <Spacer />
                <Text>123</Text>
              </HStack>
              <Divider />
              <HStack mx={5} mt={5}>
                <Text>Calory</Text>
                <Spacer />
                <Text>123</Text>
              </HStack>
              <Divider />
              <HStack mx={5} mt={5}>
                <Text>Calory</Text>
                <Spacer />
                <Text>123</Text>
              </HStack>
              <Divider />
            </Grid>
            <Text px={10} pb={10} mt={50} fontSize={"md"}>
              {" "}
              Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
            </Text>
          </Box>
        </Box>
      </Flex>
      <Stack mt={5}>
        <Text fontSize={"sm"} color={"gray.500"} textAlign={"justify"}>
          Lorem ipsum dolor sit amet. Vel sapiente omnis sit ipsa quaerat ea
          eligendi animi est recusandae maiores et quaerat repellendus in
          expedita numquam aut perferendis maiores. Eos internos distinctio et
          laudantium dolorum et nulla nisi sed architecto natus et nostrum quasi
          vel libero dignissimos ea odio dolore. Et quia necessitatibus rem
          molestias doloremque id incidunt laudantium qui voluptas sint.
        </Text>
      </Stack>
    </Box>
  );
}

export default ReceipeInfo;
