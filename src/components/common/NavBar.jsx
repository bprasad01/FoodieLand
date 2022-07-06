import  React from "react";
import {
  Box,
  Flex,
  Link,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
} from "@chakra-ui/react";

import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const NavLink = ({ children } = { children: React }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box maxW={1080} mx={"auto"}>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16}  alignItems={"center"} justifyContent={"space-between"}>
          <Box>FoodieLand</Box>
          <Flex>
          <NavLink>Home</NavLink>
          <NavLink>Receipe</NavLink>
          <NavLink>Blog</NavLink>
          <NavLink>Contact</NavLink>
          <NavLink>About Us</NavLink>
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
