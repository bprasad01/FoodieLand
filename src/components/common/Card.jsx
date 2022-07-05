import React from "react";
import { Box, Image, Heading, HStack, Button } from "@chakra-ui/react";
import { BsFillAlarmFill } from "react-icons/bs";
import { ImSpoonKnife } from "react-icons/im";

function Card({ img, heading, time, category }) {
  return (
    <Box p={3} bg="#EBF8FF" borderRadius={20} as="article">
      <Image objectFit="fill" h={300} w="100%" src={img} alt="stock image" />
      <Heading size="md" fontWeight="bold">
        {heading}
      </Heading>
      <HStack justifyItems={"space-between"}>
        <Button borderRadius="10px" bgColor="#EDFDFD">
          <BsFillAlarmFill />
          {time}
        </Button>
        <Button borderRadius="10px" bgColor="#EDFDFD">
          <ImSpoonKnife />
          {category}
        </Button>
      </HStack>
    </Box>
  );
}

export default Card;
