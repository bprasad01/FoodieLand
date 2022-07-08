import  React from "react";
import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  HStack
} from "@chakra-ui/react";

import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { NavLink } from "react-router-dom";



export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box maxW={1080} mx={"auto"}>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16}  alignItems={"center"} justifyContent={"space-between"}>
          <Box>FoodieLand</Box>
          <Flex justifyContent={"space-between"}>
          <HStack>
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/receipes">Receipe</NavLink>
          <NavLink to="/bloglists">Blog</NavLink>
          <NavLink to="/contacts">Contact</NavLink>
          <NavLink to="/aboutus">About Us</NavLink>
          </HStack>
          </Flex>
          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
              <Button>{<FaFacebook />}</Button>
              <Button>{<FaTwitter />}</Button>
              <Button>{<FaInstagram />}</Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}
