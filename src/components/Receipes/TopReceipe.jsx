import { Box, Heading, SimpleGrid, Image, HStack, Button } from '@chakra-ui/react';
import React from 'react';
import { BsFillAlarmFill } from "react-icons/bs";
import { ImSpoonKnife } from "react-icons/im";
import { getAllReceipe } from "../../utils/homeService";
import { useState } from 'react';
import { useEffect } from 'react';

function TopReceipe(props) {

    const [data, setData ] = useState([]);
    const imgPath = "http://95.111.202.157:8001/";
    const getReceipeData = async () => {
        const { data : data } = await getAllReceipe();
        setData(data);
    }

    useEffect( () => {
        getReceipeData();
    })
    return (
        <Box maxW={1080} mx={"auto"} mb={20}>
        <Box mt={20}>
        <Heading fontSize={"3xl"} textAlign={"center"}>You May Like These Receipes Too</Heading>
        </Box>
        <SimpleGrid columns={4} spacing={10} mt={10}>
          {data.slice(0,4).map((item, index) => (
            <Box key={index} p={3} borderRadius={20} as="article" mt={15} boxShadow='dark-lg' rounded='md' bg='white'>
              <Image
                objectFit="fill"
                h={300}
                w="100%"
                src={imgPath + item.recipeId.image}
                alt="stock image"
              />
              <Heading size="md" fontWeight="bold">
                {item.recipeId.title}
              </Heading>
              <HStack justifyItems={"space-between"}>
                <Button borderRadius="10px" bgColor="#EDFDFD">
                  <BsFillAlarmFill />
                  {item.recipeId.cookTime}
                </Button>
                <Button borderRadius="10px" bgColor="#EDFDFD">
                  <ImSpoonKnife />
                  {item.recipeId.categoryId.categoryName}
                </Button>
              </HStack>
            </Box>
          ))}
        </SimpleGrid>
        </Box>
    );
}

export default TopReceipe;